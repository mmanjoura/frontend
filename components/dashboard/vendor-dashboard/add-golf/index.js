
'use client'
import Sidebar from "../common/Sidebar";
import Header from "../../../../components/header/default-header";
import SettingsTabs from "./components/index";
import Footer from "../common/Footer";
import { useState } from "react";

const index = () => {

  const [userInfo, setuserInfo] = useState(Object);
  return (
    <>
      <div className="header-margin"></div>

      <Header userInfo = {userInfo} />

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
                <h1 className="text-30 lh-14 fw-600">Add Golf</h1>
                <div className="text-15 text-light-1">
                 Add a new golf.
                </div>
              </div>
              {/* End .col-12 */}
            </div>
            {/* End .row */}

            <div className="py-30 px-30 rounded-4 bg-white shadow-3">
              <SettingsTabs />
            </div>

            <Footer />
          </div>
          {/* End .dashboard__content */}
        </div>
        {/* End dashbaord content */}
      </div>
      {/* End dashbaord content */}
    </>
  );
};

export default index;
