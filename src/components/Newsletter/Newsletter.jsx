import { React, useRef } from "react";
import "./Newsletter.css";
import emailjs from '@emailjs/browser'
import showerBaby from "../../assets/showerBaby.jpg";
import { GiBabyBottle } from "react-icons/gi";

const Newsletter = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_em0xgui', 'template_ylgaf1l', form.current, {
        publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
      })
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Poruka je uspešno poslata!');
          // Čisti sva polja u formi
          form.current.reset();
        },
        (error) => {
          console.error('FAILED...', error);
          alert(`Došlo je do greške prilikom slanja poruke! Detalji: ${error.text}`);
        },
      );
  };

  return (
    <div className="newsletter relative">
      <img src={showerBaby} alt="" />
      <span className="baby-n"><GiBabyBottle /></span>
      <div className="our-newletter">
        <div className="newsletter-form">
          <span className="anchor-news" id="newsletter"></span>
          <h2>Pošaljite nam mail <br /> i mi ćemo Vas kontaktirati</h2>
          <form ref={form} className="form" onSubmit={sendEmail}>
            <input
              type="text"
              name="user_name"
              placeholder="Vaše Ime"
              required
            />
               
            <input
              type="number"
              name="user_number"
              placeholder="Vaš broj"
              required
            />
            <button className="btn btn-newsletter">Kontaktirajte nas</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
