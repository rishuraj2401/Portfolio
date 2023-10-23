import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { useEffect } from 'react';
import endpoints from '../constants/endpoints';
import FallbackSpinner from './FallbackSpinner';
import Navb from './Navb';
import './styles/contact.css';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cfb9wtl', 'template_viz0qwo', form.current, 'iq6p59s0jWJ9fJhxh')
      .then((result) => {
          console.log(result.text);
          console.log("successful");
          alert("Message sent");
      }, (error) => {
          console.log(error.text);
      });
  };
    const [data, setData] = useState(null);

   
    useEffect(() => {
        fetch(endpoints.education, {
          method: 'GET',
        })
          .then((res) => res.json())
          .then((res) => setData(res))
          .catch((err) => err);
      }, []);
    
      return data ? (
        <>
        {/* <h1>hi to me hello</h1> */}
        {<Navb/>}
        <div className='home'>
           <div className="left">
          

<div class="typewriter">
  <h1>Contact.</h1>
</div>




           </div>
           <div className="rightCon">
            <div className="contt">
           <form ref={form} onSubmit={sendEmail}>
      <label className='lbl'>Name:</label>
      <input type="text" name="user_name" placeholder='Please Enter Your Name' />
      <label className='lbl'>Email:</label>
      <input type="email" name="user_email" placeholder='Please Enter Your Email'/>
      <label className='lbl'placeholder='Write your Message'>Message:</label>
      <textarea name="message" />
      <input type="submit" value="Send"/>
    </form>
    </div>

           </div>
            
        </div>
        </>
    )  : <FallbackSpinner />;

}

export default Contact;
