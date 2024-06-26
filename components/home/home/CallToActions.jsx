'use client'
import { useRouter } from 'next/navigation';
import  { useEffect, useState } from "react";
const CallToActions = () => {
  const { push } = useRouter();



  const handleSignInClick = () => {
    // Redirect to the login page
    push('/login');
  };
  const handleRegisterClick = () => {
    // Redirect to the login page
    push('/signup');
  };



  return (
    <section className="layout-pt-md layout-pb-lg">
      <div className="container">
        <div className="row y-gap-20 justify-between items-end">
          <div className="col-auto">
            <div className="sectionTitle -md">
              <h2 className="sectionTitle__title">Not a Member Yet?</h2>
              <p className="text-dark-1 sectionTitle__text mt-5 sm:mt-0">
                Join us! Our members can access savings of up to 50% and earn
                Trip Coins while booking.
              </p>
            </div>
          </div>
          {/* End .col */}

          <div className="col-auto">
            <div className="row x-gap-20 y-gap-20">
              <div className="col-auto">
                <button  aria-label="Close" className="button px-40 h-60 -white bg-blue-1 text-white" onClick={handleSignInClick}>
                  Sign In
                  <i className="icon-arrow-top-right ml-10" />
                </button>
              </div>
              {/* End col */}
              <div className="col-auto">
                <button  aria-label="Close" className="button px-40 h-60 -outline-blue-1 text-blue-1" onClick={handleRegisterClick}>
                  Register
                  <i className="icon-arrow-top-right ml-10" />
                </button>
              </div>
            </div>
          </div>
          {/* End .col */}
        </div>
        {/* End .row */}
      </div>
      {/* End .container */}
    </section>
  );
};

export default CallToActions;
