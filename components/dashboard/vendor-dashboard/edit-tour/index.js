'use client'
import Sidebar from "../common/Sidebar";
import Header from "../../../../components/header/dashboard-header";
import SettingsTabs from "./components/index";
import Footer from "../common/Footer";
import { useState } from "react";
// import { createEntityAdapter } from "@reduxjs/toolkit";


const index = ({params}) => {

  const [userInfo, setuserInfo] = useState(Object);
  return (
    <>
      {/*  */}
      {/* End Page Title */}

      <div className="header-margin"></div>

      <Header userInfo = {userInfo} />
      {/* End dashboard-header */}

      <div className="dashboard">
        <div className="dashboard__sidebar bg-white scroll-bar-1">
          <Sidebar />
          {/* End sidebar */}
        </div>
        {/* End dashboard__sidebar */}

        <div className="dashboard__main">
          <div className="dashboard__content bg-light-2">
            <div className="row y-gap-20 justify-between items-end pb-60 lg:pb-40 md:pb-32">
              <div className="col-12">
                <h1 className="text-30 lh-14 fw-600">Edit Tour</h1>
                <div className="text-15 text-light-1">
                 Edit an existing tour.
                </div>
              </div>
            </div>
            <div className="py-30 px-30 rounded-4 bg-white shadow-3">
              <SettingsTabs params = {params} />
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
