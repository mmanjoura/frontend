'use client';
import { useState } from "react";
const Duration = ({activities, onDurationCheckedFilter}) => {


  function categorizeActivityDurations(activities) {
    const categorizedDurations = {
      upToOneHour: 0,
      oneToFourHours: 0,
      fourHoursToOneDay: 0,
    };
  
    activities?.forEach(activity => {
      if (activity?.minimum_duration <= 60) {
        categorizedDurations.upToOneHour++;
      } else if (minimum_duration > 60 && minimum_duration <= 240) {
        categorizedDurations.oneToFourHours++;
      } else if (minimum_duration > 240 && minimum_duration <= 1440) {
        categorizedDurations.fourHoursToOneDay++;
      }
    });
  
    return categorizedDurations;
  }
  

  const categorizedDurations = categorizeActivityDurations(activities?.data);
  
  const checkboxes = [
    { id: 1, label: "Up to 1 hour", count: categorizedDurations.upToOneHour },
    { id: 2, label: "1 to 4 hours", count: categorizedDurations.oneToFourHours },
    { id: 3, label: "4 hours to 1 day", count: categorizedDurations.fourHoursToOneDay },
  ];

  const handleDurationFilter = (event, id) => {
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
            <input type="checkbox" onChange={(event) => handleDurationFilter(event, checkbox?.id)}  />
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
