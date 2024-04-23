import DropdownList from '../../components/TourTypes';
import React, { useEffect, useState } from 'react';
import {useContentTypes} from "@/data/contentType";
import LoadingSpinner from '@/components/spinners/LoadingSpinner';

const TourContent = () => {

  const baseURL = process.env.NEXT_PUBLIC_API_URL;
  const [selectedOption, setSelectedOption] = useState('');
  const [tag, setTag] = useState("");


  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [tourtype, setTourType] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [map_url, setMapUrl] = useState("");
  const [minimum_duration, setMinimumDuration] = useState("");
  const [group_size, setGroupSize] = useState("");
  const [number_of_reviews, setNumberOfReviews] = useState("");
  const [reviews_comment, setReviewsComment] = useState("");
  const [overview, setOverview] = useState("");
  const [whats_included, setWhatsIncluded] = useState("");
  const [highlights, setHighlights] = useState("");
  const [cancellation_policy, setCancellationPolicy] = useState("");
  const [important_information, setImportantInformation] = useState("");
  const [additional_information, setAdditionalInformation] = useState("")
  const [loading, setLoading] = useState(false);

  // // Get data for dropdown
  const contentTypes = useContentTypes();

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch(baseURL + '/tours', {
      method: "POST",
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tag,
        title,
        location,
        price,
        latitude,
        tour_type: tourtype,
        longitude,
        map_url,
        minimum_duration,
        group_size,
        number_of_reviews,
        reviews_comment,
        overview,
        whats_included,
        highlights,
        cancellation_policy,
        important_information,
        additional_information,

      }),
    });

    const body = await res.json();
    setTimeout(() => {
      setLoading(false);
      document.getElementById("SubmitForm").reset();
    }
      , 1000);

  };


  const handleSelect = (value) => {
    setSelectedOption(value);
    setTourType(value);
  };
  return (
    <form id="SubmitForm" className="row y-gap-20" onSubmit={submit}>
       {loading ? (<LoadingSpinner />) : (
      <div className="row x-gap-20 y-gap-20">
      <div className="col-12">
        <div className="form-input" style={{ border: '2px solid #ddd', borderRadius: '4px', width:'400px', height:'50px'}}>
          <DropdownList className="lh-1 text-16 text-light-1" options={contentTypes} onSelect={handleSelect} >
            </DropdownList>
          </div>
        </div>
        <div className="col-12">
          <div className="form-input ">
            <input name="" id=""  type="text"  onChange={e => setTag(e.target.value)} />
            <label className="lh-1 text-16 text-light-1">Optional Tag: 
                                                              "likely to sell out*",
                                                              "best seller",
                                                              "top rated",
                                                              "New Program"
            </label>
          </div>
        </div>
        {/* End Tag */}
        <div className="col-12">
          <div className="form-input ">
            <input name="" id=""  type="text" required onChange={e => setTitle(e.target.value)} />
            <label className="lh-1 text-16 text-light-1">Title</label>
          </div>
        </div>
        {/* End Title */}
        <div className="col-12">
          <div className="form-input ">
            <input name="" id=""  type="text" required onChange={e => setLocation(e.target.value)} />
            <label className="lh-1 text-16 text-light-1">Location</label>
          </div>
        </div>
        {/* End Location */}

        <div className="col-12">
          <div className="form-input ">
            <input name="" id=""  type="text" required onChange={e => setPrice(e.target.value)} />
            <label className="lh-1 text-16 text-light-1">Price</label>
          </div>
        </div>
        {/* End Price */}


        <div className="col-12">
          <div className="form-input ">
            <input name="" id=""  type="text"  onChange={e => setLatitude(e.target.value)} />
            <label className="lh-1 text-16 text-light-1">Latitude Optional</label>
          </div>
        </div>
        {/* End Latitude */}
        <div className="col-12">
          <div className="form-input ">
            <input name="" id=""  type="text"  onChange={e => setLongitude(e.target.value)} />
            <label className="lh-1 text-16 text-light-1">Longitude Optional</label>
          </div>
        </div>
        <div className="col-12">
            <div className="form-input ">
              <input type="text" required onChange={e => setMapUrl(e.target.value)} />
              <label className="lh-1 text-16 text-light-1">Google Map Iframe </label>
            </div>
          </div>
        {/* End Longitude */}
        <div className="col-12">
          <div className="form-input ">
            <input name="" id=""  type="text" required onChange={e => setMinimumDuration(e.target.value)} />
            <label className="lh-1 text-16 text-light-1">Minimum Duration hours</label>
          </div>
        </div>
        {/* End Minimum Duration */}
        <div className="col-12">
          <div className="form-input ">
            <input name="" id=""  type="text" required onChange={e => setGroupSize(e.target.value)} />
            <label className="lh-1 text-16 text-light-1">Minimum Group Size</label>
          </div>
        </div>
        {/* End Group Size */}
        <div className="col-12">
          <div className="form-input ">
            <input name="" id=""  type="text" required onChange={e => setNumberOfReviews(e.target.value)} />
            <label className="lh-1 text-16 text-light-1">Number of Reviews</label>
          </div>
        </div>
        {/* End Number of Review */}
        <div className="col-12">
          <div className="form-input ">
            <input name="" id=""  type="text" required onChange={e => setReviewsComment(e.target.value)} />
            <label className="lh-1 text-16 text-light-1">Reviews Comment: Excellent</label>
          </div>
        </div>
        {/* End Number of Reviews Comment */}

        <div className="col-12">
          <div className="form-input ">
            <textarea name="" id=""  required rows={5} defaultValue={""} onChange={e => setOverview(e.target.value)} />
            <label className="lh-1 text-16 text-light-1">Overviw</label>
          </div>
        </div>
               {/* End Overview */}
               <div className="col-12">
          <div className="form-input ">
            <textarea name="" id=""  required rows={5} defaultValue={""} onChange={e => setWhatsIncluded(e.target.value)} />
            <label className="lh-1 text-16 text-light-1">
            What's Included (Use pipe char "|" separated values. The header is the first value)

          </label>
          </div>
        </div>
        {/* End Whats Included */}
        <div className="col-12">
          <div className="form-input ">
            <textarea name="" id=""  required rows={5} defaultValue={""} onChange={e => setHighlights(e.target.value)} />
            <label className="lh-1 text-16 text-light-1">
            Highlights: (Use pipe char "|" separated values. The header is the first value)
              </label>
          </div>
        </div>
        {/* End Whats Included */} 
        <div className="col-12">
          <div className="form-input ">
            <textarea name="" id=""  rows={5} defaultValue={""} onChange={e => setImportantInformation(e.target.value)} />
            <label className="lh-1 text-16 text-light-1">
            Optional Important Information: (Use pipe char "|" separated values. The header is the first value)
            </label>
          </div>
        </div>
        <div className="col-12">
          <div className="form-input ">
            <textarea name="" id=""   rows={5} defaultValue={""} onChange={e => setAdditionalInformation(e.target.value)} />
            <label className="lh-1 text-16 text-light-1">
            Optional Additional Information: (Use pipe char "|" separated values. The header is the first value)
              </label>
          </div>
        </div>
        <div className="col-12">
            <div className="form-input ">
              <textarea name="" id=""  required rows={5} onChange={e => setCancellationPolicy(e.target.value)} />
              <label className="lh-1 text-16 text-light-1">Cancellation Policy: long Text</label>
            </div>
          </div>
        {/* End Content */}
 
        <div className="d-inline-block pt-30">
          <button className="button h-50 px-24 -dark-1 bg-blue-1 text-white" aria-label="Save changes" type="button">
            Save Changes <div className="icon-arrow-top-right ml-15" />
          </button>
        </div>
        {/* End Content */}

      </div>
        )}
    </form>
  );
};

export default TourContent;
