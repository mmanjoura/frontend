'use client';
import CallToActions from "@/components/common/CallToActions";
import ProductHeader from "@/components/header/product-header";
import DefaultFooter from "@/components/footer/default";
import TopHeaderFilter from "@/components/golf-list/golf-list/TopHeaderFilter";
import GolfProperties from "@/components/golf-list/golf-list/GolfProperties";
import Sidebar from "@/components/golf-list/golf-list/Sidebar";
import { useState, useEffect } from "react";
import axios from "axios";
import Constants from "@/utils/constants";
import refreshPage from "@/components/common/PageRefresh";



const index = () => {
  const [selectedDate, setSelectedDate] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedTypeFilter, setSelectedTypeFilter] = useState("");
  const [golfs, setGolfs] = useState([]); // State for filtered golfs

  // const golfs = useGolfsData()
  useEffect(() => {
    axios.get(`${Constants.baseURL}/golfs`).then((response) => {
      setGolfs(response?.data);
    });
  }, [selectedLocation, selectedDate, selectedTypeFilter]);
  

  if (!golfs) return null;


  const handleClick = (selectedDate, selectedLocation) => {
    const filterByLocation = golfs?.data?.filter(golf =>
      golf?.location?.includes(selectedLocation)
    );
    setGolfs({ data: filterByLocation });
  };

  const handleGolfsDateFilter = (date) => {
    if (date.length > 1) {
      setSelectedDate(date);
    }

  };

  const handleGolfsLocationFilter = (location) => {
    if (location) {
      setSelectedLocation(location);
    }
  };

  const handleGolfsTypeFilter = (selectedTypeFilter) => {

    console.log("golfs", golfs?.data);

    if (selectedTypeFilter > 0) {
      const filterByType = golfs?.data.filter(
        (golf) => golf.activity_type == selectedTypeFilter
      );
      setGolfs({ data: filterByType });
      console.log("selectedTypeFilter", selectedTypeFilter);
    } else {
      console.log("selectedTypeFilter", selectedTypeFilter);
      axios.get(`${Constants.baseURL}/golfs`).then((response) => {
        setGolfs(response?.data);
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
                <Sidebar golfs={golfs} 
                    onSearch={handleClick} 
                    onDateSearch={handleGolfsDateFilter} 
                    onLocationSearch={handleGolfsLocationFilter} 
                    onTypeCheckedFilter={handleGolfsTypeFilter}
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
                  <Sidebar golfs={golfs} 
                    onSearch={handleClick} 
                    onDateSearch={handleGolfsDateFilter} 
                    onLocationSearch={handleGolfsLocationFilter} 
                    onTypeCheckedFilter={handleGolfsTypeFilter}
                    />
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
              {/* <GolfProperties golfs={filteredGolfs.length > 0 ? filteredGolfs : golfs?.data} /> */}
              <GolfProperties golfs={golfs} />
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
