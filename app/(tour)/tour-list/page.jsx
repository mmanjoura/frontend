'use client'
import CallToActions from "@/components/common/CallToActions";
import DefaultHeader from "@/components/header/default-header";
import DefaultFooter from "@/components/footer/default";
import TopHeaderFilter from "@/components/tour-list/tour-list/TopHeaderFilter";
import TourProperties from "@/components/tour-list/tour-list/TourProperties";
import Sidebar from "@/components/tour-list/tour-list/Sidebar";
import axios from "axios";
import Constants from "@/utils/constants";
import { useState, useEffect } from "react";

const index = () => {

  const [selectedDate, setSelectedDate] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedTypeFilter, setSelectedTypeFilter] = useState("");
  const [selectedDurationFilter, setSelectedDurationFilter] = useState("");
  const [tours, setTours] = useState([]); // State for filtered golfs



  useEffect(() => {
    axios.get(`${Constants.baseURL}/tours`).then((response) => {
      setTours(response?.data);
    });
  }, [selectedLocation, selectedDate, selectedTypeFilter, selectedDurationFilter]);
  
if (!tours) return null;

const handleClick = (selectedDate, selectedLocation) => {
  const filterByLocation = tours?.data?.filter(tour =>
    tour?.location?.includes(selectedLocation)
  );
  setTours({ data: filterByLocation });
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
    const filterByType = tours?.data.filter(
      (tour) => tour.activity_type == selectedTypeFilter
    );
    setTours({ data: filterByType });
  } else {
    axios.get(`${Constants.baseURL}/tours`).then((response) => {
      setTours(response?.data);
    });
  }
};
const handleDurationFilter = (selectedFilter) => {

  if (selectedFilter == 1) {
    const filterByType = tours?.data.filter(
      (tour) => tour?.minimum_duration <= 1
   
    );
    setTours({ data: filterByType });  
  } 
  if (selectedFilter == 2) {
    const filterByType = tours?.data.filter(
      (tour) => tour?.minimum_duration <= 4
    );
    setTours({ data: filterByType });
  }
  if (selectedFilter == 3) {
    const filterByType = tours?.data.filter(
      (tour) => tour?.minimum_duration > 4
    );
    setTours({ data: filterByType });
 
  }
  if (selectedFilter == 0) {
    axios.get(`${Constants.baseURL}/tours`).then((response) => {
      setTours(response?.data);
    });
};
};
  return (
    <>
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <DefaultHeader />
      {/* End Header 1 */}

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row y-gap-30">
            <div className="col-xl-3">
              <aside className="sidebar y-gap-40 xl:d-none">
                <Sidebar 
                  tours = {tours} 
                  onSearch={handleClick} 
                  onDateSearch={handleDateFilter} 
                  onLocationSearch={handleLocationFilter} 
                  onTypeCheckedFilter={handleTypeFilter}
                  onDurationCheckedFilter={handleDurationFilter}
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
                    <Sidebar 
                      tours = {tours} 
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
              <TopHeaderFilter tours = {tours} />
              <div className="mt-30"></div>
              {/* End mt--30 */}
              <div className="row y-gap-30">
                {/* <TourProperties tours = {tours} /> */}
                <TourProperties tours={tours} />
              </div>
              {/* End .row */}
              {/* <Pagination tours = {tours} /> */}
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
