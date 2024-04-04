'use client'
import CallToActions from "@/components/common/CallToActions";
import ProductHeader from "@/components/header/product-header";
import DefaultFooter from "@/components/footer/default";
import TopHeaderFilter from "@/components/activity-list/activity-list/TopHeaderFilter";
import ActivityProperties from "@/components/activity-list/activity-list/ActivityProperties";
import Pagination from "@/components/activity-list/common/Pagination";
import Sidebar from "@/components/activity-list/activity-list/Sidebar";
import { useActivitiesData } from "@/data/activities-data";
import { useState } from "react";


const index = () => {
  const [selectedDate, setSelectedDate] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [filteredActivities, setFilteredActivities] = useState([]); // State for filtered golfs

  const activities = useActivitiesData();
  if (!activities) return null;

  const handleDateSearch = (date) => {

    if (date.length > 1) {
      setSelectedDate(date);
      // format dates in the format DD/MM/YYYY
      console.log("Selected Date: ", (date?.[0]).string.format("DD/MM/YYYY"));
      console.log("Selected Date: ", (date?.[1]).string.format("DD/MM/YYYY"));
    }
  };

  const handleLocationSearch = (location) => {
        if (location) {
          setSelectedLocation(location);
    }
  };

  const handleClick = (selectedDate, selectedLocation) => {
    console.log("---Handling Filter Only filtering on location for now----");
     // Perform filtering logic here
     console.log("Selected Location: ", selectedLocation);
     const filteredActivities = activities?.data?.filter(activity =>
      activity?.location?.toLowerCase().includes(selectedLocation.toLowerCase())
    );
    setFilteredActivities(filteredActivities);
    console.log("Filtered Activities: ", filteredActivities);
  };


  return (
    <>
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <ProductHeader />
      {/* End Header 1 */}

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row y-gap-30">
            <div className="col-xl-3">
              <aside className="sidebar y-gap-40 xl:d-none">
                <Sidebar activities = {activities} onSearch={handleClick} onDateSearch={handleDateSearch} onLocationSearch={handleLocationSearch} />
              </aside>
              {/* End sidebar for desktop */}

              <div
                className="offcanvas offcanvas-start"
                tabIndex="-1"
                id="listingSidebar"
              >
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasLabel">
                    Filter Activity
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
                    <Sidebar activities = {activities} onSearch={handleClick} onDateSearch={handleDateSearch} onLocationSearch={handleLocationSearch} />
                  </aside>
                </div>
                {/* End offcanvas body */}
              </div>
              {/* End mobile menu sidebar */}
            </div>
            {/* End col */}

            <div className="col-xl-9 ">
              <TopHeaderFilter activities = {activities}/>
              <div className="mt-30"></div>
              {/* End mt--30 */}
              <div className="row y-gap-30">
                {/* <ActivityProperties activities = {activities}/> */}
                <ActivityProperties activities={filteredActivities.length > 0 ? filteredActivities : activities?.data} />
              </div>
              {/* End .row */}
              {/* <Pagination activities = {activities}/> */}
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
