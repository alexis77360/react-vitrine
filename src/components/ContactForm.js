import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {init} from '@emailjs/browser';


//? Initialiser EmailJS avec votre USER ID
init(process.env.REACT_APP_USER_ID);

const ContactForm = () => {
const form = useRef();

const sendEmail = (e) => {
    e.preventDefault();

    const formMessage = document.querySelector('.form-message');

    //? YOUR_SERVICE_ID = Service ID from EmailJS dashboard
    emailjs.sendForm(
         'service_udbjk6e',
         'template_4bu08dq',
         form.current,
         //!on peut utiliser les variables d'environnement dans le fichier .env pour cacher les informations sensibles
         process.env.REACT_APP_ID
         )
         
      .then((result) => {
          //? remettre les champs à vide
            form.current.reset();
            //? afficher le message de succès
            formMessage.innerHTML = "<p class='sucess'> Message envoyé avec succès !<p> ";

            //? supprimer le message de succès après 5 secondes
            setTimeout(() => formMessage.remove(), 5000);




      }, (error) => {

            //? afficher le message d'erreur
            formMessage.innerHTML = "<p class='error'> Une erreur s'est produite, veuillez réessayer. <p>";
            //? supprimer le message d'erreur après 5 secondes
            setTimeout(() => formMessage.remove(), 5000);

      });
  };

  return (
    <div className="form-container">
        <h2>Contactez-moi</h2>
    <form ref={form} onSubmit={sendEmail} className='form-content'>
      <label>Nom</label>
      <input type="text" name="name" required autoComplete='off' id='name' />
      <label>Email</label>
      <input type="email" name="email" required autoComplete='off' id='email'/>
      <label>Message</label>
      <textarea name="message" required autoComplete='off' id='mess'/>
      <input type="submit" value="Envoyer" className='hover button' />
    </form>
    <div className="form-message">

    </div>
    </div>
  );
};



export default ContactForm;