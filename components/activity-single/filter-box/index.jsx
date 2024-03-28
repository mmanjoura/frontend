'use client';
import GuestSearch from "./GuestSearch";
import DateSearch from "./DateSearch";
import Link from "next/link";
import { useState } from "react";

const index = (props) => {
  const baseURL = process.env.NEXT_PUBLIC_API_URL;
  const [loading, setLoading] = useState(false);
  const [selectedDates, setSelectedDates] = useState([]);
  const [selectedGuests, setSelectedGuests] = useState({});
  const [formData, setFormData] = useState({
    selectedDates: [],
    selectedGuests: {}
  });

  const handleDateChange = (dates) => {
    setSelectedDates(dates);

  };

  const handleGuestChange = (guests) => {
    setSelectedGuests(guests);

  };

  // Now submit formData to the backend
  const Submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch(baseURL + '/bookings', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // I only want start and end dates and number of guests
      body: JSON.stringify({
        start_date: selectedDates[0]?.format("DD-MM-YYYY"),
        end_date: selectedDates[1]?.format("DD-MM-YYYY"),
        guests: selectedGuests
      }),
    });
    const data = await res.json();
    setLoading(false);
  };

  return (
    <>
      <div className="col-12">
        <div className="searchMenu-date px-20 py-10 border-light rounded-4 -right js-form-dd js-calendar">
          <div>
            <h4 className="text-15 fw-500 ls-2 lh-16">Date</h4>
            <DateSearch onDateChange={handleDateChange} />
          </div>
        </div>
        {/* End check-in-out */}
      </div>
      {/* End .col-12 */}

      <div className="col-12">
        <GuestSearch onGuestChange={handleGuestChange} />
        {/* End guest */}
      </div>
      {/* End .col-12 */}

      <div className="col-12">
        {/* <Link
          href="/booking-page"
          className="button -dark-1 py-15 px-35 h-60 col-12 rounded-4 bg-blue-1 text-white"
        >
          Book Now
        </Link> */}
        <button
          onClick={Submit}
          className="button -dark-1 py-15 px-35 h-60 col-12 rounded-4 bg-blue-1 text-white" ></button>
      </div>
      {/* End .col-12 */}
    </>
  );
};

export default index;
