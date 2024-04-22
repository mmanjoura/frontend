'use client';
import CategoryTypes from "../sidebar/CategoryTypes";
import OthersFilter from "../sidebar/OthersFilter";
import Hole from "../sidebar/Hole";
import PirceSlider from "../sidebar/PirceSlider";
import MainFilterSearchBox from "./MainFilterSearchBox";
import { useState } from "react";

const Sidebar = ({  golfs, 
                    onSearch, 
                    onDateSearch, 
                    onLocationSearch, 
                    onTypeCheckedFilter, 
                    onHoleCheckedFilter,
                    onPriceChange}) => {
  const [selectedDate, setSelectedDate] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedPriceFilter, setSelectedPriceFilter] = useState("");


  const handleDateFilter = (date) => {

      setSelectedDate(date);
      onDateSearch(date);
    }

    const handleLocationFilter = (location) => {

        setSelectedLocation(location);
        onLocationSearch(location);  
    };

    const handleClick = () => {
      onSearch(selectedDate, selectedLocation);
    }
    
  const handleTypeFilter = (selectedTypeFilter) => {
    onTypeCheckedFilter(selectedTypeFilter);
  };
  const handleHolesFilter = (selectedHolesFilter) => {
    onHoleCheckedFilter(selectedHolesFilter);
  }
  const handlePriceChange = (priceFilter) => {
    setSelectedPriceFilter(priceFilter);
    onPriceChange(priceFilter);
  }
  
  
  return (
    <>
      <div className="sidebar__item -no-border">
        <div className="px-20 py-20 bg-light-2 rounded-4">
          <h5 className="text-18 fw-500 mb-10">Search Golfs</h5>

          <div className="row y-gap-20 pt-20">
            <MainFilterSearchBox 
                onSearch = {handleClick}  
                onDateSearch = {handleDateFilter} 
                onLocationSearch = {handleLocationFilter}
         
                
                />
          </div>
        </div>
      </div>
      {/* End search tours */}

      <div className="sidebar__item -no-border">
        <h5 className="text-18 fw-500 mb-10">Category Types</h5>
        <div className="sidebar-checkbox">
          <CategoryTypes golfs = {golfs} onTypeCheckedFilter = {handleTypeFilter}/>
        </div>
        {/* End Sidebar-checkbox */}
      </div>
      {/* End popular filter */}

      {/* End Aminities filter */}

      <div className="sidebar__item pb-30">
        <h5 className="text-18 fw-500 mb-10">Price</h5>
        <div className="row x-gap-10 y-gap-30">
          <div className="col-12">
            <PirceSlider golfs = {golfs} onPriceChange = {handlePriceChange}/>
          </div>
        </div>
      </div>
      {/* End Nightly priceslider */}

      <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">Number of Holes</h5>
        <div className="sidebar-checkbox">
          <Hole golfs = {golfs} onHoleCheckedFilter = {handleHolesFilter}/>
        </div>
      </div>
      {/* End style filter */}


      {/* End Aminities filter */}
    </>
  );
};


export default Sidebar;
