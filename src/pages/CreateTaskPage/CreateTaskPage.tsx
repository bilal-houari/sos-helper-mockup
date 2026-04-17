import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Plus, 
  ArrowRight, 
  ArrowLeft, 
  Upload, 
  Check, 
  MapPin, 
  Info 
} from 'lucide-react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/Button/Button';
import styles from './CreateTaskPage.module.css';

const STEPS = [
  { id: 1, name: 'The Basics' },
  { id: 2, name: 'Description' },
  { id: 3, name: 'Logistics' },
  { id: 4, name: 'Media' }
];

const CreateTaskPage: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [budget, setBudget] = useState(500);
  const [isPosting, setIsPosting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentStep]);

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(prev => prev + 1);
    } else {
      handleComplete();
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleComplete = () => {
    setIsPosting(true);
    // Simulate API call
    setTimeout(() => {
      setIsPosting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <div className={styles.field}>
              <label className={styles.label}>What do you need help with?</label>
              <input 
                type="text" 
                placeholder="e.g. Assemble a Large IKEA Wardrobe" 
                className={styles.input} 
              />
              <p className={styles.stepDescription}>Be specific to get better offers.</p>
            </div>
            <div className={styles.grid}>
              <div className={styles.field}>
                <label className={styles.label}>Category</label>
                <select className={styles.select}>
                  <option>General Labor (Unskilled)</option>
                  <option>Qualified Labor (Certified)</option>
                </select>
              </div>
              <div className={styles.field}>
                <label className={styles.label}>Domain</label>
                <select className={styles.select}>
                  <option>Furniture Assembly</option>
                  <option>Plumbing</option>
                  <option>Gardening</option>
                  <option>Moving & Logistics</option>
                  <option>Cleaning</option>
                  <option>Electrical</option>
                </select>
              </div>
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div className={styles.field}>
              <label className={styles.label}>Tell us more about the task</label>
              <textarea 
                placeholder="Describe the context, specific items, or any potential challenges..." 
                className={styles.textarea}
              ></textarea>
            </div>
            <div className={styles.field}>
              <label className={styles.label}>Special Requirements (Optional)</label>
              <input 
                type="text" 
                placeholder="e.g. Must bring own ladder, No heavy lifting" 
                className={styles.input} 
              />
            </div>
          </>
        );
      case 3:
        return (
          <>
            <div className={styles.field}>
              <label className={styles.label}>Where is the task located?</label>
              <div style={{ position: 'relative' }}>
                <MapPin size={18} style={{ position: 'absolute', left: '1rem', top: '1.1rem', color: 'var(--text-muted)' }} />
                <input 
                  type="text" 
                  placeholder="Street address, City" 
                  className={styles.input} 
                  style={{ paddingLeft: '3rem' }}
                />
              </div>
            </div>
            <div className={styles.field}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <label className={styles.label}>Estimated Budget</label>
                <span style={{ color: 'var(--primary-color)', fontWeight: 800, fontSize: '1.25rem' }}>{budget} MAD</span>
              </div>
              <input 
                type="range" 
                min="50" 
                max="5000" 
                step="50"
                value={budget}
                onChange={(e) => setBudget(parseInt(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--primary-color)', cursor: 'pointer' }}
              />
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>
                <Info size={14} />
                <span>You can negotiate the final price with your expert later.</span>
              </div>
            </div>
          </>
        );
      case 4:
        return (
          <>
            <div className={styles.uploadZone}>
              <Upload size={48} className={styles.uploadIcon} />
              <p className={styles.uploadText}>Drop photos here or click to browse</p>
              <p className={styles.uploadSubtext}>JPG, PNG up to 10MB. Maximum 6 photos.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginTop: '1rem' }}>
              <div style={{ aspectRatio: '1', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border-color)' }}>
                <Plus size={24} color="var(--text-muted)" />
              </div>
              <div style={{ aspectRatio: '1', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border-color)' }}>
                <Plus size={24} color="var(--text-muted)" />
              </div>
              <div style={{ aspectRatio: '1', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border-color)' }}>
                <Plus size={24} color="var(--text-muted)" />
              </div>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  if (isSuccess) {
    return (
      <div className={styles.container}>
        <Navbar />
        <main className={styles.content}>
          <div className={styles.formCard}>
            <div className={styles.successWrapper}>
              <div className={styles.successIcon}>
                <Check size={48} />
              </div>
              <h1 className={styles.title}>Task Posted!</h1>
              <p className={styles.stepDescription}>
                Your task has been broadcasted to our community of experts. 
                Keep an eye on your messages for incoming offers!
              </p>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', width: '100%' }}>
                <Button variant="primary" style={{ flex: 1 }} onClick={() => navigate('/tasks')}>Browse All Tasks</Button>
                <Button variant="outline" style={{ flex: 1 }} onClick={() => navigate('/')}>Home</Button>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Navbar />
      
      <main className={styles.content}>
        <div className={styles.progressHeader}>
          <h1 className={styles.title}>Post a New Task</h1>
          <div className={styles.progressBar}>
            <div 
              className={styles.progressFill} 
              style={{ width: `${(currentStep / 4) * 100}%` }}
            />
          </div>
          <span className={styles.stepInfo}>
            Step {currentStep} of 4: {STEPS[currentStep - 1].name}
          </span>
        </div>

        <div className={styles.formCard}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            <div>
              <h2 className={styles.stepTitle}>{STEPS[currentStep - 1].name}</h2>
              <p className={styles.stepDescription}>
                {currentStep === 1 && "Start with a clear title and category so the right experts find you."}
                {currentStep === 2 && "Giving more details helps you get faster and more accurate offers."}
                {currentStep === 3 && "Set your location and proposed budget for this task."}
                {currentStep === 4 && "Add photos to help experts understand the scope of work."}
              </p>
            </div>

            {renderStep()}

            <div className={styles.footer}>
              {currentStep > 1 ? (
                <Button variant="ghost" onClick={handleBack} disabled={isPosting}>
                  <ArrowLeft size={18} style={{ marginRight: '8px' }} />
                  Back
                </Button>
              ) : <div />}
              
              <Button 
                variant="primary" 
                className={styles.nextBtn} 
                onClick={handleNext}
                disabled={isPosting}
              >
                {isPosting ? 'Posting...' : currentStep === 4 ? 'Post Task' : 'Continue'}
                {!isPosting && currentStep < 4 && <ArrowRight size={18} style={{ marginLeft: '8px' }} />}
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CreateTaskPage;
