
'use client'

import React, {  useState } from 'react';
import LoadingSpinner from '@/components/spinners/LoadingSpinner';

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const baseURL = process.env.NEXT_PUBLIC_API_URL;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");


  const handleSubmit = async (e) => {
    event.preventDefault();
    setLoading(true);


    const res = await fetch(baseURL + '/contacts', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        subject: subject,
        message: message,
      }),



    });

    const body = await res.json();
    setTimeout(() => {
      setLoading(false);

    }
      , 1000);
  };
  
  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <form className="row y-gap-20 pt-20" onSubmit={handleSubmit} id = "SubmitForm">
      <div className="col-12">
        <div className="form-input">
          <input type="text" id="name" required onChange={e => setName(e.target.value)} />
          <label htmlFor="name" className="lh-1 text-16 text-light-1">
            Full Name
          </label>
        </div>
      </div>
      <div className="col-12">
        <div className="form-input">
          <input type="email" id="email" required onChange={e => setEmail(e.target.value)} />
          <label htmlFor="email" className="lh-1 text-16 text-light-1">
            Email
          </label>
        </div>
      </div>
      <div className="col-12">
        <div className="form-input">
          <input type="text" id="subject" required onChange={e => setSubject(e.target.value)}  />
          <label htmlFor="subject" className="lh-1 text-16 text-light-1">
            Subject
          </label>
        </div>
      </div>
      <div className="col-12">
        <div className="form-input">
          <textarea id="message" required rows="4" onChange={e => setMessage(e.target.value)} ></textarea>
          <label htmlFor="message" className="lh-1 text-16 text-light-1">
            Your Message
          </label>
        </div>
      </div>
      <div className="col-auto">
        <button
          type="submit"
          className="button px-24 h-50 -dark-1 bg-blue-1 text-white"
        >
          Send Message <div className="icon-arrow-top-right ml-15"></div>
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
