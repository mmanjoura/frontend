
'use client'

import React, { useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";

const DateSearch = ({onDateChange }) => {

  const [dates, setDates] = useState([
    new DateObject().setDay(5),
    new DateObject().setDay(14).add(1, "month"),
  ]);



  const handleDatesChange = (newDates) => {
    setDates(newDates);
    onDateChange(newDates); // Call the callback function with the selected dates
  };

  return (
    <div className="text-15 text-light-1 ls-2 lh-16 custom_dual_datepicker">
      <DatePicker
        inputClass="custom_input-picker"
        containerClassName="custom_container-picker"
        value={dates}
        onChange={handleDatesChange}
        numberOfMonths={2}
        offsetY={10}
        range
        rangeHover
        format="MMMM DD"
      />
    </div>
  );
};

export default DateSearch;
