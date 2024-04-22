'use client';
import CallToActions from "@/components/common/CallToActions";
import DefaultHeader from "@/components/header/default-header";
import DefaultFooter from "@/components/footer/default";
import TopHeaderFilter from "@/components/activity-list/activity-list/TopHeaderFilter";
import ActivityProperties from "@/components/activity-list/activity-list/ActivityProperties";
import Sidebar from "@/components/activity-list/activity-list/Sidebar";
import { useState, useEffect } from "react";
import axios from "axios";
import Constants from "@/utils/constants";


const index = () => {

  const [selectedDate, setSelectedDate] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedTypeFilter, setSelectedTypeFilter] = useState("");
  const [selectedDurationFilter, setSelectedDurationFilter] = useState("");
  const [selectedPriceFilter, setSelectedPriceFilter] = useState("");
  const [activities, setActivities] = useState(null);

  useEffect(() => {
    axios.get(`${Constants.baseURL}/activities`).then((response) => {
      setActivities(response?.data);
    });
  }, [selectedLocation, selectedDate, selectedTypeFilter, selectedDurationFilter, selectedPriceFilter]);
  
  if (!activities) return null;

  const handleClick = (selectedDate, selectedLocation) => {
    const filterByLocation = activities?.data?.filter(activity =>
      activity?.location?.includes(selectedLocation)
    );
    setActivities({ data: filterByLocation });
  };

  const handleDateFilter = (date) => {
    if (date.length > 1) {
      setSelectedDate(date);
    }

  };

  const handleLocationFilter = (location) => {
    if (location) {
      setSelectedLocation(location);
    }
  };

  const handleTypeFilter = (selectedTypeFilter) => {

    if (selectedTypeFilter > 0) {
      const filterByType = activities?.data.filter(
        (activity) => activity.activity_type == selectedTypeFilter
      );
      setActivities({ data: filterByType });
    } else {
      axios.get(`${Constants.baseURL}/activities`).then((response) => {
        setActivities(response?.data);
      });
    }


  };
  const handleDurationFilter = (selectedFilter) => {

    if (selectedFilter == 1) {
      const filterByType = activities?.data.filter(
        (activity) => activity?.minimum_duration <= 1
     
      );
      setActivities({ data: filterByType });
    
    } 
    if (selectedFilter == 2) {
      const filterByType = activities?.data.filter(
        (activity) => activity?.minimum_duration <= 4
      );
      setActivities({ data: filterByType });
  
    }
    if (selectedFilter == 3) {
      const filterByType = activities?.data.filter(
        (activity) => activity?.minimum_duration > 4
      );
      setActivities({ data: filterByType });
   
    }
    if (selectedFilter == 0) {
      axios.get(`${Constants.baseURL}/activities`).then((response) => {
        setActivities(response?.data);
      });
  };


  };

  const handlePriceChange = (priceFilter) => {
    const filteredActivities = activities.data.filter(
      (activity) => activity.price <= priceFilter.max && activity.price >= priceFilter.min
    );
  
    if (filteredActivities.length > 0) {
      setActivities((prevActivities) => ({
        ...prevActivities,
        data: filteredActivities,
      }));
    } else {
      axios.get(`${Constants.baseURL}/activities`).then((response) => {
        setActivities(response.data);
        setSelectedPriceFilter(priceFilter);
      });
    }
  };
  


  if (!activities) return null;

  return (
    <>
      <div className="header-margin"></div>
      {/* header top margin */}

      <DefaultHeader />
      {/* End Header 1 */}

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row y-gap-30">
            <div className="col-xl-3">
              <aside className="sidebar y-gap-40 xl:d-none">
                <Sidebar activities={activities}
                  onSearch={handleClick}
                  onDateSearch={handleDateFilter}
                  onLocationSearch={handleLocationFilter}
                  onTypeCheckedFilter={handleTypeFilter}
                  onDurationCheckedFilter={handleDurationFilter}
                  onPriceChange={handlePriceChange}
                />
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
                    <Sidebar activities={activities}
                      onSearch={handleClick}
                      onDateSearch={handleDateFilter}
                      onLocationSearch={handleLocationFilter}
                      onTypeCheckedFilter={handleTypeFilter}
                      onDurationCheckedFilter={handleDurationFilter}
                    />
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
                {/* <ActivityProperties activities={filteredActivities.length > 0 ? filteredActivities : activities?.data} />     */}
                <ActivityProperties activities={activities?.data} />

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
