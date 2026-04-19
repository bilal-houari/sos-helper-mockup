import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import TaskBrowserPage from './pages/TaskBrowserPage/TaskBrowserPage';
import TaskDetailPage from './pages/TaskDetailPage/TaskDetailPage';
import PublicProfilePage from './pages/PublicProfilePage/PublicProfilePage';
import CreateTaskPage from './pages/CreateTaskPage/CreateTaskPage';
import SettingsPage from './pages/SettingsPage/SettingsPage';
import ChatPage from './pages/ChatPage/ChatPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/tasks" element={<TaskBrowserPage />} />
        <Route path="/tasks/:id" element={<TaskDetailPage />} />
        <Route path="/profile/:id" element={<PublicProfilePage />} />
        <Route path="/tasks/create" element={<CreateTaskPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
    </Router>
  )
}

export default App
