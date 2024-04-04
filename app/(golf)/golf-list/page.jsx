'use client';
import CallToActions from "@/components/common/CallToActions";
import ProductHeader from "@/components/header/product-header";
import DefaultFooter from "@/components/footer/default";
import TopHeaderFilter from "@/components/golf-list/golf-list/TopHeaderFilter";
import GolfProperties from "@/components/golf-list/golf-list/GolfProperties";
import Sidebar from "@/components/golf-list/golf-list/Sidebar";
import { useGolfsData } from "@/data/golfs-data";
import { useState, useEffect } from "react";


const index = () => {
  const [selectedDate, setSelectedDate] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [filteredGolfs, setFilteredGolfs] = useState([]); // State for filtered golfs

  const golfs = useGolfsData()

  if (!golfs) return null;

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
     const filteredGolfs = golfs?.data?.filter(golf =>
      golf?.location?.toLowerCase().includes(selectedLocation.toLowerCase())
    );
    setFilteredGolfs(filteredGolfs);
    console.log("Filtered Golfs: ", filteredGolfs);
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
                <Sidebar golfs={golfs} onSearch={handleClick} onDateSearch={handleDateSearch} onLocationSearch={handleLocationSearch} />
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
                    <Sidebar golfs={golfs} onSearch={handleClick} onDateSearch={handleDateSearch} onLocationSearch={handleLocationSearch} />
                  </aside>
                </div>
                {/* End offcanvas body */}
              </div>
              {/* End mobile menu sidebar */}
            </div>
            {/* End col */}

            <div className="col-xl-9 ">
              <TopHeaderFilter golfs={golfs} />
              <div className="mt-30"></div>
              {/* End mt--30 */}
              <div className="row y-gap-30">
      
              <GolfProperties golfs={filteredGolfs.length >= 0 ? filteredGolfs : golfs?.data} />
              { filteredGolfs.length == 0 && <p>There are no golfs courses in this location</p>}
 


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
