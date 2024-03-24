'use client'
import React, {  useState } from 'react';
import LoadingSpinner from '@/components/spinners/LoadingSpinner';

const ReplyForm = () => {
  const [loading, setLoading] = useState(false);
  const baseURL = process.env.NEXT_PUBLIC_API_URL;
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    event.preventDefault();
    setLoading(true);


    const res = await fetch(baseURL + '/comments', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        subject: subject,
        email: email,
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
    <form className="row y-gap-30 pt-20" onSubmit={handleSubmit}>
      <div className="col-xl-6">
        <div className="form-input ">
          <input type="text" required onChange={e => setSubject(e.target.value)}/>
          <label className="lh-1 text-16 text-light-1">Subject</label>
        </div>
      </div>
      {/* End .col */}

      <div className="col-xl-6">
        <div className="form-input ">
          <input type="text" required onChange={e => setEmail(e.target.value)}/>
          <label className="lh-1 text-16 text-light-1">Email</label>
        </div>
      </div>
      {/* End .col */}

      <div className="col-12">
        <div className="form-input ">
          <textarea required rows={4} defaultValue={""} onChange={e => setMessage(e.target.value)}/>
          <label className="lh-1 text-16 text-light-1">
            Write Your Comment
          </label>
        </div>
      </div>
      {/* End .col */}

      <div className="col-auto">
        <button
          type="submit"
          className="button -md -dark-1 bg-blue-1 text-white"
        >
          Post Comment <div className="icon-arrow-top-right ml-15" />
        </button>
      </div>
      {/* End .col */}
    </form>
  );
};

export default ReplyForm;
