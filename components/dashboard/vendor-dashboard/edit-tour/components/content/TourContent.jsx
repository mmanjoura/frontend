import DropdownList from '../TourTypes'; // Adjust the path accordingly
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import {useContentTypes} from "@/data/contentType";
import LoadingSpinner from '@/components/spinners/LoadingSpinner';

const TourContent = ({params}) => {

  const baseURL = process.env.NEXT_PUBLIC_API_URL;
  const [selectedOption, setSelectedOption] = useState('');
  const [redirect, setRedirect] = useState(false);
  const { push } = useRouter();
  const [loading, setLoading] = useState(false);
  
  const [formData, setFormData] = useState({    
    tag: '',
    title: '',
    location: '',
    price: '',
    tour_type: selectedOption,
    latitude: '',
    longitude: '',
    map_url: '',
    minimum_duration: '',
    group_size: '',
    number_of_reviews: '',
    reviews_comment: '',
    overview: '',
    whats_included: '',
    highlights: '',
    important_information: '',
    additional_information: '',
    cancellation_policy: '',
  });


  if (!params) {
    return null;
  }
    // // Get data for dropdown
    const tourTypes = useContentTypes();

    useEffect(() => {
      // Fetch user data from the API when the component mounts
      const fetchTour = async () => {
        try {
          if (!params.id) {
            return;
          }
          const response = await fetch(baseURL + `/tours/${params.id}`);
          if (!response.ok) {
            throw new Error('Failed to fetch tour data');
          }
          const tourData = await response.json();
          
          setFormData(tourData.data);
          
        } catch (error) {
          console.error('Error fetching tour data:', error.message);
        }
      };
  
      fetchTour();
    }, [params]);
    const handleChange = (e) => {
      setFormData({ ...formData,
        [e.target.name]: e.target.value
      });
    };

    if (!formData) {
      return 

    }

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);        

    // tourId = 7;
    const res = await fetch(baseURL + '/tours/' + params.id, {
      method: "PUT",
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const body = await res.json();
    setTimeout(() => {
      setLoading(false);
    }
      , 1000);
    setRedirect(true);
  };


  useEffect(() => {
    // This effect will run when redirect state changes
    if (redirect) {
      // Perform the redirection
      push('/tour-single/' + params.id );
    }
  }, [redirect, push]);

  const handleSelect = (value) => {
    setSelectedOption(value);
  };
  return (
    <form className="row y-gap-20" onSubmit={submit}>
       {loading ? (<LoadingSpinner />) : (
      <div className="row x-gap-20 y-gap-20">
        <div className="col-12">
        <div className="form-input" style={{ border: '2px solid #ddd', borderRadius: '4px', width:'400px', height:'50px'}}>
          <DropdownList className="lh-1 text-16 text-light-1" options={tourTypes} onSelect={handleSelect} >
            </DropdownList>
          </div>
        </div>
        <div className="col-12">
          <div className="form-input ">
            <input type="text" name='tag' onChange={handleChange} value={formData?.tag}   />
            <label className="lh-1 text-16 text-light-1">Tag Optional
            </label>
          </div>
        </div>
        {/* End Tag */}
        <div className="col-12">
          <div className="form-input ">
            <input type="text" name='title' required onChange={handleChange} value={formData?.title} />
            <label className="lh-1 text-16 text-light-1">Title</label>
          </div>
        </div>
        {/* End Title */}
        <div className="col-12">
          <div className="form-input ">
            <input type="text" name='location' required onChange={handleChange} value={formData?.location} />
            <label className="lh-1 text-16 text-light-1">Location</label>
          </div>
        </div>
        {/* End Location */}

        <div className="col-12">
          <div className="form-input ">
            <input type="text" name='price' required onChange={handleChange} value={formData?.price} />
            <label className="lh-1 text-16 text-light-1">Price</label>
          </div>
        </div>
        {/* End Price */}


        <div className="col-12">
          <div className="form-input ">
            <input type="text" name='latitude'  onChange={handleChange} value={formData?.latitude} />
            <label className="lh-1 text-16 text-light-1">Latitude</label>
          </div>
        </div>
        {/* End Latitude */}
        <div className="col-12">
          <div className="form-input ">
            <input type="text" name='longitude'  onChange={handleChange} value={formData?.longitude}/>
            <label className="lh-1 text-16 text-light-1">Longitude</label>
          </div>
        </div>
        <div className="col-12">
          <div className="form-input ">
            <input type="text" name='map_url' required onChange={handleChange} value={formData?.map_url}/>
            <label className="lh-1 text-16 text-light-1">Map Iframe</label>
          </div>
        </div>
        {/* End Longitude */}
        <div className="col-12">
          <div className="form-input ">
            <input type="text" name='minimum_duration' required onChange={handleChange} value={formData?.minimum_duration} />
            <label className="lh-1 text-16 text-light-1">Minimum Duration</label>
          </div>
        </div>
        {/* End Minimum Duration */}
        <div className="col-12">
          <div className="form-input ">
            <input type="text" name='group_size' required onChange={handleChange} value={formData?.group_size} />
            <label className="lh-1 text-16 text-light-1">Minimum Group Size</label>
          </div>
        </div>
        {/* End Group Size */}
        <div className="col-12">
          <div className="form-input ">
            <input type="text" name='number_of_reviews' required onChange={handleChange} value={formData?.number_of_reviews} />
            <label className="lh-1 text-16 text-light-1">Number of Reviews</label>
          </div>
        </div>
        {/* End Number of Review */}
        <div className="col-12">
          <div className="form-input ">
            <input type="text" name='reviews_comment' required onChange={handleChange} value={formData?.reviews_comment} />
            <label className="lh-1 text-16 text-light-1">Reviews Comment</label>
          </div>
        </div>
        {/* End Number of Reviews Comment */}

        <div className="col-12">
          <div className="form-input ">
            <textarea required rows={5} name='overview' onChange={handleChange} value={formData?.overview} />
            <label className="lh-1 text-16 text-light-1">Overviw</label>
          </div>
        </div>
                {/* End Overview */}
                <div className="col-12">
          <div className="form-input ">
            <textarea required rows={5} name='whats_included' onChange={handleChange} value={formData?.whats_included} />
            <label className="lh-1 text-16 text-light-1">
            What's Included

          </label>
          </div>
        </div>
        {/* End Whats Included */}
        <div className="col-12">
          <div className="form-input ">
            <textarea required rows={5}  name='highlights'onChange={handleChange} value={formData?.highlights}/>
            <label className="lh-1 text-16 text-light-1">
            Highlights
              </label>
          </div>
        </div>
        {/* End Whats Included */}
        {/* End Overview */}
   
        <div className="col-12">
          <div className="form-input ">
            <textarea  rows={5} name='important_information' onChange={handleChange} value={formData?.important_information} />
            <label className="lh-1 text-16 text-light-1">
             Important Inforamtion Optional
            </label>
          </div>
        </div>
        <div className="col-12">
          <div className="form-input ">
            <textarea  rows={5} name='additional_information' onChange={handleChange} value={formData?.additional_information} />
            <label className="lh-1 text-16 text-light-1">
            Additonal Information Optional
              </label>
          </div>
        </div>
        {/* End Content */}
        <div className="col-12">
          <div className="form-input ">
            <textarea required rows={5} name='cancellation_policy' onChange={handleChange} value={formData?.cancellation_policy} />
            <label className="lh-1 text-16 text-light-1">Cancellation Policy: long Text</label>
          </div>
        </div>
 
        <div className="d-inline-block pt-30">
          <button className="button h-50 px-24 -dark-1 bg-blue-1 text-white" aria-label="save item" type="button">
            Save Changes <div className="icon-arrow-top-right ml-15" />
          </button>
        </div>
        {/* End Content */}

      </div>
         )}
    </form>
  );
}


export default dynamic(() => Promise.resolve(TourContent), {
  ssr: false,
});


