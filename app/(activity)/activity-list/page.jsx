'use client';
import CallToActions from "@/components/common/CallToActions";
import ProductHeader from "@/components/header/product-header";
import DefaultFooter from "@/components/footer/default";
import TopHeaderFilter from "@/components/activity-list/activity-list/TopHeaderFilter";
import ActivityProperties from "@/components/activity-list/activity-list/ActivityProperties";
import Sidebar from "@/components/activity-list/activity-list/Sidebar";
import { useActivitiesData } from "@/data/activities-data";
import { useState, useEffect } from "react";

const index = () => {
  const [selectedDate, setSelectedDate] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [filteredActivities, setFilteredActivities] = useState([]); 

  const activities = useActivitiesData()

  if (!activities) return null;

  const handleDateSearch = (date) => {
    if (date.length > 1) {
      setSelectedDate(date);
    }
  };

  const handleLocationSearch = (location) => {
        if (location) {
          setSelectedLocation(location);
    }
  };

  const handleClick = (selectedDate, selectedLocation) => {
    console.log("---Handling Filter Only filtering on location for now----");
     console.log("Selected Location: ", selectedLocation);
     console.log("Selected Start Date: ", selectedDate[0]?.format("DD-MM-YYYY"));
     console.log("Selected End Date: ", selectedDate[1]?.format("DD-MM-YYYY"));

    //  Get the filtered activities based on the selected location
     const filteredActivities = activities?.data?.filter(activity =>
      activity?.location?.toLowerCase().includes(selectedLocation.toLowerCase())
    );
    //  Set the filtered activities
    setFilteredActivities(filteredActivities);
    console.log("Filtered Golfs: ", filteredActivities);
  };


  return (
    <>
      <div className="header-margin"></div>
      {/* header top margin */}

      <ProductHeader />
      {/* End Header 1 */}

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row y-gap-30">
            <div className="col-xl-3">
              <aside className="sidebar y-gap-40 xl:d-none">
                <Sidebar activities={activities} onSearch={handleClick} onDateSearch={handleDateSearch} onLocationSearch={handleLocationSearch} />
              </aside>
              {/* End sidebar for desktop */}

              <div
                className="offcanvas offcanvas-start"
                tabIndex="-1"
                id="listingSidebar"
              >
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasLabel">
                    Filter Tours
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                {/* End offcanvas header */}

                <div className="offcanvas-body">
                  <aside className="sidebar y-gap-40  xl:d-block">
                    <Sidebar activities={activities} onSearch={handleClick} onDateSearch={handleDateSearch} onLocationSearch={handleLocationSearch} />
                  </aside>
                </div>
                {/* End offcanvas body */}
              </div>
              {/* End mobile menu sidebar */}
            </div>
            {/* End col */}

            <div className="col-xl-9 ">
              <TopHeaderFilter activities={activities} />
              <div className="mt-30"></div>
              {/* End mt--30 */}
              <div className="row y-gap-30">      
              <ActivityProperties activities={filteredActivities.length > 0 ? filteredActivities : activities?.data} />    
                </div>
              {/* End .row */}
              {/* <Pagination golfs = {golfs} /> */}
            </div>
            {/* End .col for right content */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End layout for listing sidebar and content */}

      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter />
    </>
  );
};

export default index;
