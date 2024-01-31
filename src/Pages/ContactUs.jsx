import React from 'react';
import './CSS/ContactUs.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';


const ContactUs = () => {
  return (
    <section className="contact">
        <div className="content">
            <h2>Contact Us</h2>
            <p></p>
        </div>
        <div className="container">
            <div className="contactInfo">
                <div className="box">
                    <div className="icon">
                    <FontAwesomeIcon icon={faLocationDot} size="lg" color="black" />
                    </div>
                    <div className="text">
                        <h3>Address</h3>
                        <p>PES-University RR campus Banashankari Banglore Karnataka</p>
                    </div>
                </div>
                <div className="box">
                    <div className="icon">
                    
                    <FontAwesomeIcon icon={faPhone} size="lg" color="black" />
                    </div>
                    <div className="text">
                        <h3>Phone</h3>
                        <p>507-475-6094</p>
                    </div>
                </div>
                <div className="box">
                    <div className="icon">
                    <FontAwesomeIcon icon={faEnvelope} size="lg" color="black" />
                    </div>
                    <div className="text">
                        <h3>E-mail</h3>
                        <p>varadpai27@gmail.com</p>
                    </div>
                </div>
                <div className="contactForm">
                    <form>
                        <h2>Send Message</h2>
                        <div className="inputBox">
                            <input type="text" name='' required='required' />
                                <span>Name</span>
                        </div>
                        <div className="inputBox">
                      <input type="text" name='' required='required'  />
                                <span>E-mail</span>
                        </div>
                        <div className="inputBox">
                        <textarea required='required' ></textarea>
                            <span>Type your Message... </span>
                        </div>
                        <div className="inputBox">
                            <a href='/apparels  '><input type="button" name='' value='Send' /></a>
                            
                        </div>
                    </form>
                </div>
          </div>
        </div>
    </section>
  );
};

export default ContactUs;
