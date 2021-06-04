import React from 'react';
import './Contact.css'
const Contact = () => {
    return (
        <div className='contact-Form'>
          <h1>Contact</h1>
            <form>
                <div className="first">
                <input className="input-item" type="text" placeholder="firstName"/>
                <input className="input-item" type="text" placeholder="firstName"/>
                </div>
                <div>
                    <input className="input-item" type="email" placeholder="email" />
                </div>
                <div>
                    <textarea className="input-item" name="message" id="message" cols="50" rows="10" placeholder="message"></textarea>
                </div>
            </form>
        </div>
    );
};

export default Contact;