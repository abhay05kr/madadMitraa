import { useState, useRef, useEffect } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { sendHelpRequest } from '../utils/emailService';

function GetHelp() {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState('');
  const formRef = useRef();

  // Floating animation for card
  useEffect(() => {
    document.body.style.overflowX = 'hidden';
    return () => { document.body.style.overflowX = ''; };
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const helpData = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      location: formData.get('location'),
      helpType: formData.get('helpType'),
      description: formData.get('description'),
      fileName: fileName
    };

    try {
      const result = await sendHelpRequest(helpData);
      if (result.success) {
        setSubmitted(true);
        formRef.current && formRef.current.reset();
        setFileName('');
      } else {
        alert(t('getHelp.form.error'));
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert(t('getHelp.form.error'));
    }
  }

  function handleFileChange(e) {
    setFileName(e.target.files[0]?.name || '');
  }

  return (
    <div className="gethelp-root">
      {/* Hero Section */}
      <section className="gethelp-hero">
        <div className="gethelp-hero-content">
          <h1 className="gethelp-hero-title">{t('getHelp.hero.title')}</h1>
          <p className="gethelp-hero-sub">{t('getHelp.hero.subtitle')}</p>
        </div>
        <div className="gethelp-hero-image">
          <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=500&q=80" alt="Support and Care" className="gethelp-hero-img" />
        </div>
      </section>

      {/* Help Request Form Section */}
      <section className="gethelp-form-section">
        <div className="gethelp-form-card animate-float-in">
          <h2 className="gethelp-form-title">{t('getHelp.form.title')}</h2>
          {submitted ? (
            <div className="success-message">{t('getHelp.form.success')}</div>
          ) : (
            <form className="gethelp-form" onSubmit={handleSubmit} ref={formRef}>
              <label>{t('getHelp.form.name')}
                <input type="text" name="name" required placeholder={t('getHelp.form.namePlaceholder')} />
              </label>
              <label>{t('getHelp.form.phone')}
                <input type="tel" name="phone" required placeholder={t('getHelp.form.phonePlaceholder')} pattern="[0-9]{10}" />
              </label>
              <label>{t('getHelp.form.location')}
                <input type="text" name="location" required placeholder={t('getHelp.form.locationPlaceholder')} />
              </label>
              <label>{t('getHelp.form.helpType')}
                <select name="helpType" required>
                  <option value="">{t('getHelp.form.selectOption')}</option>
                  {t('getHelp.helpTypes').map((type, index) => (
                    <option key={index} value={type}>{type}</option>
                  ))}
                </select>
              </label>
              <label>{t('getHelp.form.description')}
                <textarea name="description" required placeholder={t('getHelp.form.descriptionPlaceholder')}></textarea>
              </label>
              <label className="gethelp-file-label">
                {t('getHelp.form.proof')}
                <input type="file" accept="image/*,.pdf,.doc,.docx" required onChange={handleFileChange} />
                <span className={fileName ? 'file-selected' : ''}>
                  {fileName ? `${t('getHelp.form.fileSelected')} ${fileName}` : t('getHelp.form.fileNotSelected')}
                </span>
              </label>
              <button type="submit" className="btn btn-primary gethelp-submit-btn">{t('getHelp.form.submit')}</button>
            </form>
          )}
        </div>
      </section>

      {/* Why We Ask Proof Section */}
      <section className="gethelp-proof-section">
        <div className="gethelp-proof-card animate-slide-in">
          <div className="gethelp-proof-icon">🔒</div>
          <div>
            <b>{t('getHelp.proof.title')}</b>
            <p>{t('getHelp.proof.description')}</p>
          </div>
        </div>
      </section>

      {/* Motivational Quote Strip */}
      <section className="gethelp-quote-strip animate-quote">
        <div className="gethelp-quote-text">
          "{t('getHelp.quote')}"
        </div>
      </section>
    </div>
  );
}

export default GetHelp; 