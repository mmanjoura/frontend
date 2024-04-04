import ActivityTypes from "../sidebar/ActivityTypes";
import OthersFilter from "../sidebar/OthersFilter";
import Duration from "../sidebar/Duration";
import Languages from "../sidebar/Languages";
import PirceSlider from "../sidebar/PirceSlider";
import PopularAttractions from "../sidebar/PopularAttractions";
import MainFilterSearchBox from "./MainFilterSearchBox";
import { useState } from "react";

const Sidebar = ({activities, onSearch, onDateSearch, onLocationSearch}) => {

  const [selectedDate, setSelectedDate] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");


  const handleDateSearch = (date) => {

      setSelectedDate(date);
      onDateSearch(date);
    }

    const handleLocationSearch = (location) => {

        setSelectedLocation(location);
        onLocationSearch(location);  
    };

    const handleClick = () => {
      onSearch(selectedDate, selectedLocation);
    }


  return (
    <>
      <div className="sidebar__item -no-border">
        <div className="px-20 py-20 bg-light-2 rounded-4">
          <h5 className="text-18 fw-500 mb-10">Search Activiy</h5>

          <div className="row y-gap-20 pt-20">
            <MainFilterSearchBox  onSearch = {handleClick}  onDateSearch = {handleDateSearch} onLocationSearch = {handleLocationSearch}/>
          </div>
        </div>
      </div>
      {/* End search activity */}

      <div className="sidebar__item -no-border">
        <h5 className="text-18 fw-500 mb-10">Activity Types</h5>
        <div className="sidebar-checkbox">
          <ActivityTypes />
        </div>
        {/* End Sidebar-checkbox */}
      </div>
      {/* End popular filter */}

      <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">Other</h5>
        <div className="sidebar-checkbox">
          <OthersFilter />
        </div>
        {/* End Sidebar-checkbox */}
      </div>
      {/* End Aminities filter */}

      <div className="sidebar__item pb-30">
        <h5 className="text-18 fw-500 mb-10">Price</h5>
        <div className="row x-gap-10 y-gap-30">
          <div className="col-12">
            <PirceSlider />
          </div>
        </div>
      </div>
      {/* End Nightly priceslider */}

      <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">Duration</h5>
        <div className="sidebar-checkbox">
          <Duration />
        </div>
      </div>
      {/* End style filter */}


      <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">Popular Attractions</h5>
        <div className="sidebar-checkbox">
          <PopularAttractions />
        </div>
        {/* End Sidebar-checkbox */}
      </div>
      {/* End Popular Attractions */}
    </>
  );
};

export default Sidebar;
