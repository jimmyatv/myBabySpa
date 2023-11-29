import React from 'react';
import './Newsletter.css';
import showerBaby from '../../assets/showerBaby.jpg';


const Newsletter = () => {
  return (
    <div className='newsletter'>
        <h2>Kontaktirajte nas</h2>
        <div className="our-newletter">
            <div className="newsletter-l">
                <img src={showerBaby} alt="" />
            </div>
            <div className="newsletter-r">
                <form action="">
                    <input type='email' name='user_email' placeholder='Vaše ime' required />
                    <button className='btn btn-newsletter'>Kontaktirajte nas</button>
                </form>
            </div>
        </div>
    </div>
  )
};

export default Newsletter;