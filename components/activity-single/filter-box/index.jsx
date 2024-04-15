import GuestSearch from "./GuestSearch";
import DateSearch from "./DateSearch";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from 'next/navigation';

const index = ({activity}) => {

  const baseURL = process.env.NEXT_PUBLIC_API_URL;
  const [loading, setLoading] = useState(false);
  const [selectedDates, setSelectedDates] = useState([]);
  const [selectedGuests, setSelectedGuests] = useState({});
  const [formData, setFormData] = useState({
    selectedDates: [],
    selectedGuests: {}
  });
  const router = useRouter();
  const { push } = useRouter();

  const handleDateChange = (dates) => {
    setSelectedDates(dates);
    console.log(dates[0]?.format("DD-MM-YYYY"));
    console.log(dates[1]?.format("DD-MM-YYYY"));

  };

  const handleCounterChange = (guests) => {
    setSelectedGuests(guests);
    console.log(guests);

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch(baseURL + `/booking?product_id=${activity?.id}&start_date=${selectedDates[0]?.format("DD-MM-YYYY")}&end_date=${selectedDates[1]?.format("DD-MM-YYYY")}&num_adult=${selectedGuests.Adults}&num_children=${selectedGuests.Children}`, {
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
    console.log("Response Data: ", data);
    setLoading(false);

     push(`/booking?product_id=${activity?.id}&start_date=${selectedDates[0]?.format("DD-MM-YYYY")}&end_date=${selectedDates[1]?.format("DD-MM-YYYY")}&num_adult=${selectedGuests.Adults}&num_children=${selectedGuests.Children}`);
  
   
  };

  

  return (
    <>

    <div className="col-12">
      <div className="searchMenu-date px-20 py-10 border-light rounded-4 -right js-form-dd js-calendar">
        <div>
          <h4 className="text-15 fw-500 ls-2 lh-16">Date</h4>
          <DateSearch onDateChange={handleDateChange}/>
        </div>
      </div>
      {/* End check-in-out */}
    </div>
    {/* End .col-12 */}

    <div className="col-12">
    <GuestSearch onGuestChange={handleCounterChange} />
      {/* End guest */}
    </div>
    {/* End .col-12 */}

    <div className="col-12">
      <button type="submit" onClick={handleSubmit} className="button -dark-1 py-15 px-35 h-60 col-12 rounded-4 bg-blue-1 text-white">
      <Link
        href="/activity-single/4"
        className="button -dark-1 py-15 px-35 h-60 col-12 rounded-4 bg-blue-1 text-white"
      >
        Book Now
      </Link>
      </button>
    </div>
    {/* End .col-12 */}

  </>
  );
};

export default index;
