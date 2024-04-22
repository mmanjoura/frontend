'use client';
import { useState } from "react";
const Duration = ({tours, onDurationCheckedFilter}) => {


  function categorizeToursDurations(tours) {
    const categorizedDurations = {
      upToOneHour: 0,
      oneToFourHours: 0,
      fourHoursToOneDay: 0,
    };
  
    tours?.forEach(tour => {
      if (tour?.minimum_duration <= 1) {
        categorizedDurations.upToOneHour++;
      } 
      
      if (tour?.minimum_duration > 1 && tour?.minimum_duration <= 4) {
        categorizedDurations.oneToFourHours++;
      } 
      
      if (tour?.minimum_duration > 4 && tour?.minimum_duration <= 24) {
        categorizedDurations.fourHoursToOneDay++;
      }
    });
  
    return categorizedDurations;
  }
  

  const categorizedDurations = categorizeToursDurations(tours?.data);
  
  const checkboxes = [
    { id: 1, label: "Up to 1 hour", count: categorizedDurations.upToOneHour },
    { id: 2, label: "1 to 4 hours", count: categorizedDurations.oneToFourHours },
    { id: 3, label: "4 hours to 1 day", count: categorizedDurations.fourHoursToOneDay },
  ];

  const handleToursDurationFilter = (event, id) => {
    if (event.target.checked) {
      onDurationCheckedFilter(id);
    }
    if (!event.target.checked) {
      onDurationCheckedFilter(0);
    }
  }

  return (
    <>
      {checkboxes.map((checkbox) => (
        <div
          key={checkbox.id}
          className="row y-gap-10 items-center justify-between"
        >
          <div className="col-auto">
            <div className="form-checkbox d-flex items-center">
            <input type="checkbox" onChange={(event) => handleToursDurationFilter(event, checkbox?.id)}  />
              <div className="form-checkbox__mark">
                <div className="form-checkbox__icon icon-check" />
              </div>
              <div className="text-15 ml-10">{checkbox.label}</div>
            </div>
          </div>
          <div className="col-auto">
            <div className="text-15 text-light-1">{checkbox.count}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Duration;
