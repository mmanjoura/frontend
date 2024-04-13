'use client';
import { useState } from "react";
const Hole = ({golfs, onHoleCheckedFilter}) => {

  // const minimum_durations = golfs?.data?.map(golf => golf.minimum_duration);

  function categorizeGolfHoles(golfs) {
    const categorizedHoles = {
      nineHoles: 0,
      twentySevenHoles: 0,
      eighteenHoles: 0,
    };
  
    golfs?.forEach(golf => {
      if (golf?.minimum_duration.includes("9")) {
        categorizedHoles.nineHoles++;
      } else if (golf?.minimum_duration.includes("18")) {
        categorizedHoles.twentySevenHoles++;
      } else if (golf?.minimum_duration.includes("27")) {
        categorizedHoles.eighteenHoles++;
      }
    });
  
    return categorizedHoles;
  }
  

  const categorizedHoles = categorizeGolfHoles(golfs?.data);
  
  const checkboxes = [
    { id: 1, label: "9", count: categorizedHoles.nineHoles },
    { id: 2, label: "18", count: categorizedHoles.eighteenHoles },
    { id: 3, label: "27", count: categorizedHoles.twentySevenHoles },
  ];
  
  console.log(checkboxes);
  
  
  const handleHolesFilter = (event, id) => {
    if (event.target.checked) {
      onHoleCheckedFilter(id);
    }
    if (!event.target.checked) {
      onHoleCheckedFilter(0);
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
            <input type="checkbox" onChange={(event) => handleHolesFilter(event, checkbox?.id)}  />
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

export default Hole;
