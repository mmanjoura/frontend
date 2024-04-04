import DateSearch from "../common/DateSearch";
import LocationSearch from "./LocationSearch";
// import LocationSearch2 from "./LocationSearch2";
import { useState } from 'react';
import { useRouter } from 'next/navigation';


const MainFilterSearchBox = ({golfs, onSearch, onDateSearch, onLocationSearch}) => {

  const { push } = useRouter();
  
  // if there is data in the golfs array, return null
  // if (!golfs) return null;
  // console.log("Golfs: ", golfs);


  const [selectedDate, setSelectedDate] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");
  
  
  const handleClick = () =>{
    
    onSearch(selectedDate, selectedLocation)
  };

 const handleDateSearch = (date) => {
    setSelectedDate(date);
    onDateSearch(date);
  }
  const handleLocationSearch = (location) => {
    setSelectedLocation(location);
    onLocationSearch(location);
  }
  return (
    <>
      <div className="col-12">
        <div className="px-20 py-10 bg-white rounded-4">
          <LocationSearch onLocationSearch = {handleLocationSearch} />
          {/* End Location */}
        </div>
      </div>

      <div className="col-12">
        <div className="px-20 py-10 bg-white rounded-4">
          <div className="searchMenu-date  js-form-dd js-calendar">
            <h4 className="text-15 fw-500 ls-2 lh-16">Pick your Date</h4>
            <DateSearch onDateSearch={handleDateSearch} />
          </div>
          {/* End check-in-out */}
        </div>
      </div>
      {/* End .col-12 */}

      <div className="col-12">
        <button className="button -dark-1 py-15 px-35 h-60 col-12 rounded-4 bg-blue-1 text-white" onClick = {handleClick}>
          <i className="icon-search text-20 mr-10" />
          Search
        </button>
      </div>
      {/* End search button_item */}
    </>
  );
};

export default MainFilterSearchBox;
