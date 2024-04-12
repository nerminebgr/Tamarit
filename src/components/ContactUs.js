import React, { useState } from 'react';
import imageMap from './../graphics/Rectangle 186.png';

const ContactUsPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [notifications, setNotifications] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    if (id === 'name') {
      setName(value);
    } else if (id === 'email') {
      setEmail(value);
    } else if (id === 'message') {
      setMessage(value);
    } else if (id === 'notifications') {
      setNotifications(event.target.checked);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Vérification des validations
    const validationErrors = {};
    if (name.trim() === '') {
      validationErrors.name = 'Veuillez saisir votre nom.';
    }
    if (email.trim() === '') {
      validationErrors.email = 'Veuillez saisir votre email.';
    }
    if (message.trim() === '') {
      validationErrors.message = 'Veuillez saisir votre message.';
    }

    // Si des erreurs de validation sont présentes, les afficher
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Envoyer les données au serveur
      const formData = {
        name,
        email,
        message,
        notifications,
      };
      // Ici, vous pouvez utiliser une fonction pour envoyer les données au serveur
      // par exemple, fetch() ou axios.post()

      // Réinitialiser les champs et les erreurs après la soumission réussie
      setName('');
      setEmail('');
      setMessage('');
      setNotifications(false);
      setErrors({});
    }
  };
  return (
    <div className="contact-us-page">
      <div className="contact-form">
        <h1>Contacter nous</h1>
        <div className="form-group">
          <label htmlFor="name">Nom :</label>
          <div className="input-wrapper">
            <input type="text" id="name" value={name} onChange={handleInputChange} />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email :</label>
          <div className="input-wrapper">
            <input type="email" id="email" value={email} onChange={handleInputChange} />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="message">Message :</label>
          <div className="input-wrapper">
            <textarea id="message" rows="4" value={message} onChange={handleInputChange} />
            {errors.message && <span className="error-message">{errors.message}</span>}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="notifications">Je souhaite recevoir des notifications :</label>
          <input type="checkbox" id="notifications" checked={notifications} onChange={handleInputChange} />
        </div>
        <button className="send-button" onClick={handleSubmit}>Envoyer</button>
      </div>
      <div className="map-section">
        <img src={imageMap} alt="Map" />
        {Object.keys(errors).length > 0 && (
          <div className="error-messages">
            {Object.values(errors).map((error, index) => (
              <p key={index} className="error-message">{error}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
  
  
};

export default ContactUsPage;
