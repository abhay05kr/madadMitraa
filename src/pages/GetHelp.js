import { useState, useRef, useEffect } from 'react';

function GetHelp() {
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState('');
  const formRef = useRef();

  // Floating animation for card
  useEffect(() => {
    document.body.style.overflowX = 'hidden';
    return () => { document.body.style.overflowX = ''; };
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    formRef.current && formRef.current.reset();
    setFileName('');
  }

  function handleFileChange(e) {
    setFileName(e.target.files[0]?.name || '');
  }

  return (
    <div className="gethelp-root">
      {/* Hero Section */}
      <section className="gethelp-hero">
        <div className="gethelp-hero-content">
          <h1 className="gethelp-hero-title">मदद के लिए आवेदन करें</h1>
          <p className="gethelp-hero-sub">यहाँ आप सुरक्षित और सम्मान के साथ मदद माँग सकते हैं। हम आपकी गोपनीयता और आत्मसम्मान का पूरा ध्यान रखते हैं।</p>
        </div>
      </section>

      {/* Help Request Form Section */}
      <section className="gethelp-form-section">
        <div className="gethelp-form-card animate-float-in">
          <h2 className="gethelp-form-title">अपनी जानकारी भरें</h2>
          {submitted ? (
            <div className="success-message">धन्यवाद! आपकी मदद का अनुरोध सफलतापूर्वक भेजा गया है।</div>
          ) : (
            <form className="gethelp-form" onSubmit={handleSubmit} ref={formRef}>
              <label>पूरा नाम
                <input type="text" required placeholder="अपना नाम लिखें" />
              </label>
              <label>मोबाइल नंबर
                <input type="tel" required placeholder="10 अंकों का मोबाइल नंबर" pattern="[0-9]{10}" />
              </label>
              <label>स्थान
                <input type="text" required placeholder="शहर/गाँव" />
              </label>
              <label>मदद का प्रकार
                <select required>
                  <option value="">चुनें</option>
                  <option>भोजन</option>
                  <option>शिक्षा</option>
                  <option>चिकित्सा</option>
                  <option>पशु सहायता</option>
                  <option>अनाथ बच्चों के लिए</option>
                  <option>अन्य</option>
                </select>
              </label>
              <label>विवरण
                <textarea required placeholder="संक्षिप्त में अपनी समस्या बताएं"></textarea>
              </label>
              <label className="gethelp-file-label">
                प्रमाण (फोटो/डॉक्यूमेंट)
                <input type="file" accept="image/*,.pdf,.doc,.docx" required onChange={handleFileChange} />
                <span className={fileName ? 'file-selected' : ''}>{fileName ? `चुना गया: ${fileName}` : 'कोई फ़ाइल चुनी नहीं गई'}</span>
              </label>
              <button type="submit" className="btn btn-primary gethelp-submit-btn">भेजें</button>
            </form>
          )}
        </div>
      </section>

      {/* Why We Ask Proof Section */}
      <section className="gethelp-proof-section">
        <div className="gethelp-proof-card animate-slide-in">
          <div className="gethelp-proof-icon">🔒</div>
          <div>
            <b>हम प्रमाण क्यों माँगते हैं?</b>
            <p>आपकी सुरक्षा और सही मदद सुनिश्चित करने के लिए हम प्रमाण माँगते हैं। इससे हम असली जरूरतमंदों तक सहायता पहुँचा सकते हैं। आपकी जानकारी पूरी तरह गोपनीय रखी जाएगी।</p>
          </div>
        </div>
      </section>

      {/* Motivational Quote Strip */}
      <section className="gethelp-quote-strip animate-quote">
        <div className="gethelp-quote-text">
          “जब आप मदद माँगते हैं, तो आप ताकत दिखाते हैं। हम उसी ताकत का साथ निभाते हैं।”
        </div>
      </section>
    </div>
  );
}

export default GetHelp; 