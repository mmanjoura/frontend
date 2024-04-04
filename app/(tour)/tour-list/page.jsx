'use client'
import CallToActions from "@/components/common/CallToActions";
import ProductHeader from "@/components/header/product-header";
import DefaultFooter from "@/components/footer/default";
import TopHeaderFilter from "@/components/tour-list/tour-list/TopHeaderFilter";
import TourProperties from "@/components/tour-list/tour-list/TourProperties";
import Sidebar from "@/components/tour-list/tour-list/Sidebar";
import { useToursData } from "@/data/tours-data";
import { useState, useEffect } from "react";

const index = () => {

  const [selectedDate, setSelectedDate] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [filteredTours, setFilteredTours] = useState([]); // State for filtered golfs

  const tours = useToursData();
if (!tours) return null;

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
// Perform filtering logic here
console.log("Selected Location: ", selectedLocation);
console.log("Selected Start Date: ", selectedDate[0]?.format("DD-MM-YYYY"));
console.log("Selected End Date: ", selectedDate[1]?.format("DD-MM-YYYY"));

const filteredTours = tours?.data?.filter(tour =>
tour?.location?.toLowerCase().includes(selectedLocation.toLowerCase())
);
setFilteredTours(filteredTours);
console.log("Filtered Tours: ", filteredTours);
};






console.log("Home Page Tours Data: ", tours);

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
                <Sidebar tours = {tours} onSearch={handleClick} onDateSearch={handleDateSearch} onLocationSearch={handleLocationSearch} />
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
                    <Sidebar tours = {tours} />
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
                <TourProperties tours={filteredTours.length > 0 ? filteredTours : tours?.data} />
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
