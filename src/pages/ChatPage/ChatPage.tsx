import React, { useState } from 'react';
import { 
  Send, 
  MoreVertical, 
  Paperclip, 
  Smile,
  CheckCheck
} from 'lucide-react';
import Navbar from '../../components/Navbar/Navbar';
import styles from './ChatPage.module.css';

interface Message {
  id: string;
  text: string;
  sender: 'me' | 'other';
  time: string;
}

interface Contact {
  id: string;
  name: string;
  lastMessage: string;
  time: string;
  online: boolean;
  avatar: string;
}

const MOCK_CONTACTS: Contact[] = [
  { id: '1', name: 'Mehdi El Amrani', lastMessage: 'When would you be available?', time: '10:45 AM', online: true, avatar: 'https://i.pravatar.cc/150?u=1' },
  { id: '2', name: 'Sara Bensouda', lastMessage: 'The plumbing is fixed now, thanks!', time: 'Yesterday', online: false, avatar: 'https://i.pravatar.cc/150?u=2' },
  { id: '3', name: 'Yassine Karim', lastMessage: 'I can help with the moving tomorrow.', time: 'Sat', online: true, avatar: 'https://i.pravatar.cc/150?u=3' },
];

const MOCK_MESSAGES: Message[] = [
  { id: '1', text: 'Hey, I saw your furniture assembly task.', sender: 'me', time: '10:30 AM' },
  { id: '2', text: "Hi! Yes, it's for an IKEA Pax wardrobe. Do you have experience with those?", sender: 'other', time: '10:32 AM' },
  { id: '3', text: "Definitely, I've built at least 5 of them. I have all the tools (drill, level, etc.) needed too.", sender: 'me', time: '10:35 AM' },
  { id: '4', text: 'Perfect! When would you be available to start? I was hoping for sometime this weekend.', sender: 'other', time: '10:40 AM' },
  { id: '5', text: 'I can do Saturday morning at 9 AM if that works for you.', sender: 'me', time: '10:42 AM' },
  { id: '6', text: 'When would you be available?', sender: 'other', time: '10:45 AM' },
];

const ChatPage: React.FC = () => {
  const [activeContact] = useState<Contact>(MOCK_CONTACTS[0]);
  const [messages] = useState<Message[]>(MOCK_MESSAGES);
  const [inputText, setInputText] = useState('');

  return (
    <div className={styles.container}>
      <Navbar />

      <main className={styles.content}>
        {/* Contacts Sidebar */}
        <aside className={styles.sidebar}>
          <div className={styles.sidebarHeader}>
            <h2 className={styles.sidebarTitle}>Messages</h2>
          </div>
          
          <div className={styles.contactsList}>
            {MOCK_CONTACTS.map(contact => (
              <div 
                key={contact.id} 
                className={`${styles.contactItem} ${activeContact.id === contact.id ? styles.activeContact : ''}`}
              >
                <div className={styles.avatarWrapper}>
                  <img src={contact.avatar} alt={contact.name} className={styles.avatar} />
                  <div className={`${styles.statusDot} ${contact.online ? styles.online : styles.offline}`} />
                </div>
                <div className={styles.contactInfo}>
                  <div className={styles.contactTop}>
                    <span className={styles.contactName}>{contact.name}</span>
                    <span className={styles.timestamp}>{contact.time}</span>
                  </div>
                  <p className={styles.lastMessage}>{contact.lastMessage}</p>
                </div>
              </div>
            ))}
          </div>
        </aside>

        {/* Chat Window */}
        <section className={styles.chatWindow}>
          <header className={styles.chatHeader}>
            <div className={styles.headerLeft}>
              <div className={styles.avatarWrapper}>
                <img src={activeContact.avatar} alt={activeContact.name} className={styles.avatar} style={{ width: '40px', height: '40px' }} />
                <div className={`${styles.statusDot} ${styles.online}`} style={{ width: '10px', height: '10px' }} />
              </div>
              <div className={styles.headerInfo}>
                <h3>{activeContact.name}</h3>
                <span>Online</span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '1.25rem', color: 'var(--text-muted)' }}>
              <MoreVertical size={20} cursor="pointer" />
            </div>
          </header>

          <div className={styles.messageFeed}>
            {messages.map((msg) => (
              <div key={msg.id} className={`${styles.messageRow} ${msg.sender === 'me' ? styles.sent : styles.received}`}>
                <div className={`${styles.bubble} ${msg.sender === 'me' ? styles.bubbleSent : styles.bubbleReceived}`}>
                  {msg.text}
                </div>
                <div className={styles.messageTime}>
                  {msg.time}
                  {msg.sender === 'me' && <CheckCheck size={14} style={{ marginLeft: '4px', verticalAlign: 'middle' }} />}
                </div>
              </div>
            ))}
          </div>

          <footer className={styles.chatFooter}>
            <div className={styles.inputWrapper}>
              <Smile size={24} color="var(--text-muted)" cursor="pointer" />
              <Paperclip size={24} color="var(--text-muted)" cursor="pointer" />
              <input 
                type="text" 
                placeholder="Type a message..." 
                className={styles.input} 
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
              />
              <button className={styles.sendBtn}>
                <Send size={18} />
              </button>
            </div>
          </footer>
        </section>
      </main>
    </div>
  );
};

export default ChatPage;
