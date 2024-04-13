'use client'
import CallToActions from "@/components/common/CallToActions";
import ProductHeader from "@/components/header/product-header";
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
  const [tours, setTours] = useState([]); // State for filtered golfs



  useEffect(() => {
    axios.get(`${Constants.baseURL}/tours`).then((response) => {
      setTours(response?.data);
    });
  }, [selectedLocation, selectedDate, selectedTypeFilter]);
  
if (!tours) return null;

const handleClick = (selectedDate, selectedLocation) => {
  const filterByLocation = tours?.data?.filter(tour =>
    tour?.location?.includes(selectedLocation)
  );
  setTours({ data: filterByLocation });
};

const handleToursDateFilter = (date) => {
  if (date.length > 1) {
    setSelectedDate(date);
  }

};

const handleToursLocationFilter = (location) => {
  if (location) {
    setSelectedLocation(location);
  }
};

const handleToursTypeFilter = (selectedTypeFilter) => {

  if (selectedTypeFilter > 0) {
    const filterByType = tours?.data.filter(
      (tour) => tour.activity_type == selectedTypeFilter
    );
    setTours({ data: filterByType });
    console.log("selectedTypeFilter", selectedTypeFilter);
  } else {
    console.log("selectedTypeFilter", selectedTypeFilter);
    axios.get(`${Constants.baseURL}/tours`).then((response) => {
      setTours(response?.data);
    });
  }


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
                <Sidebar 
                  tours = {tours} 
                  onSearch={handleClick} 
                  onDateSearch={handleToursDateFilter} 
                  onLocationSearch={handleToursLocationFilter} 
                  onTypeCheckedFilter={handleToursTypeFilter}
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
                      onDateSearch={handleToursDateFilter} 
                      onLocationSearch={handleToursLocationFilter} 
                      onTypeCheckedFilter={handleToursTypeFilter}
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
