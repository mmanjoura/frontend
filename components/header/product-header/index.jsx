
'use client'
import Link from "next/link";
import { useEffect, useState } from "react";
import MainMenu from "../MainMenu";
import CurrenctyMegaMenu from "../CurrenctyMegaMenu";
import LanguageMegaMenu from "../LanguageMegaMenu";


import MobileMenu from "../MobileMenu";
import { Button } from "bootstrap";

const ProductHeader = () => {
  const [navbar, setNavbar] = useState(false);
  const [toggle, setToggle] = useState(false);
  const token = process.env.NEXT_PUBLIC_JWT;



  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {    
    if (window.localStorage.getItem('token') === token) {
      setToggle(true);

    }
     
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, [toggle]);

  return (
    <>
      <header className={`header bg-dark-3 ${navbar ? "is-sticky" : ""}`}>
        <div className="header__container px-30 sm:px-20">
          <div className="row justify-between items-center">
            <div className="col-auto">
              <div className="d-flex items-center">
                <Link href="/" className="header-logo mr-20">
                  <img src="/img/general/logo.png" alt="logo icon" />
                  <img src="/img/general/logo.png" alt="logo icon" />
                </Link>
                {/* End logo */}

                <div className="header-menu">
                  <div className="header-menu__content">
                    <MainMenu style="text-white" />
                  </div>
                </div>
                {/* End header-menu */}
              </div>
              {/* End d-flex */}
            </div>
            {/* End col */}

            <div className="col-auto">
              <div className="d-flex items-center">
                <div className="row x-gap-20 items-center xxl:d-none">
                  <CurrenctyMegaMenu textClass="text-white" />
                  {/* End Megamenu for Currencty */}

                  {/* Start vertical devider*/}
                  <div className="col-auto">
                    <div className="w-1 h-20 bg-white-20" />
                  </div>
                  {/* End vertical devider*/}

                  <LanguageMegaMenu textClass="text-white" />
                  {/* End Megamenu for Language */}
                </div>
                {/* End language and currency selector */}

                {/* Start btn-group */}
                <div className="d-flex items-center ml-20 is-menu-opened-hide md:d-none">
                  {/* <Link
                    href="/login"
                    className="button px-30 fw-400 text-14 -white bg-white h-50 text-dark-1"
                  >
                    Become An Expert
                  </Link> */}
                  {/* I need to show Logout if toggle is set */}
                  {toggle ? (
                    <>
                      <Link
                        href="/vendor-dashboard/tours"
                        className="button px-30 fw-400 text-14 -outline-white h-50 text-white ml-20"
                      >
                        DashBoard
                      </Link>
                      {/* Can you add some space betwee these 2 links */}
                      <span style={{ padding: '10px' }}> </span>

                      <Link
                      onClick={() => {
                        window.localStorage.removeItem('token');
                        window.location.reload();}}
                        href="/"
                        className="button px-30 fw-400 text-14 -outline-white h-50 text-white ml-20"
                      >
                        Logout
                   
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link
                        href="/login"
                        className="button px-30 fw-400 text-14 border-white -outline-white h-50 text-white ml-20"
                      >
                        Sign In / Register
                      </Link>
                    </>
                  )}

                </div>
                {/* End btn-group */}

                {/* Start mobile menu icon */}
                <div className="d-none xl:d-flex x-gap-20 items-center pl-30 text-white">
                  <div>
                    <Link
                      href="/login"
                      className="d-flex items-center icon-user text-inherit text-22"
                    />
                  </div>
                  <div>
                    <button
                      className="d-flex items-center icon-menu text-inherit text-20"
                      data-bs-toggle="offcanvas"
                      aria-controls="mobile-sidebar_menu"
                      data-bs-target="#mobile-sidebar_menu"
                    />

                    <div
                      className="offcanvas offcanvas-start  mobile_menu-contnet"
                      tabIndex="-1"
                      id="mobile-sidebar_menu"
                      aria-labelledby="offcanvasMenuLabel"
                      data-bs-scroll="true"
                    >
                      <MobileMenu />
                      {/* End MobileMenu */}
                    </div>
                  </div>
                </div>
                {/* End mobile menu icon */}
              </div>
            </div>
            {/* End col-auto */}
          </div>
          {/* End .row */}
        </div>
        {/* End header_container */}
      </header>
    </>
  );
};

export default ProductHeader;
