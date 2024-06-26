import DropdownList from '../components/TourTypes';
import React, { useState } from 'react';
import LoadingSpinner from "../../../../spinners/LoadingSpinner";
import { useToursData } from "@/data/tours-data";

const QuestionsTabContent = ({params, category}) => {
  const baseURL = process.env.NEXT_PUBLIC_API_URL;
  const [content, setContent] = useState("");
  const [selectedOption, setSelectedOption] = useState('');
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  // const { push } = useRouter();
 
    // Get data for dropdown
    const tours = useToursData();
    if (!tours) return null;

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);    
    const res = await fetch(baseURL + '/faqs?id=' + params.id + '&category=' + category, {   
      method: "PUT",
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content,
        title,

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
  };

  return (
    <>
    <form id ="SubmitForm" className="row y-gap-20" onSubmit={submit}>
    {loading ? (<LoadingSpinner />) : (
      <div>
      <div className="text-18 fw-500 mb-10">Tour Itinerary</div>      
      <div className="col-12">
        <div className="form-input" style={{ border: '2px solid #ddd', borderRadius: '4px', width:'400px', height:'50px'}}>
          <DropdownList className="lh-1 text-16 text-light-1" options={tours} onSelect={handleSelect} >
            </DropdownList>
          </div>
        </div>
        <div className="fw-500 mb-20"></div>

        <div className="overflow-scroll scroll-bar-1">
          <table className="table-5 -border-bottom col-12">
            <thead className="bg-light-2">
              <tr>
                <th>Title</th>
                <th>Content</th>
                <th />
              </tr>
            </thead>
            {/* End thead */}
            <tbody>
              <tr>
                <td className="col-5">
                  <div className="form-input ">
                    <input name="" id=""  type="text" required   onChange={e => setTitle(e.target.value)}/>
                    <label className="lh-1 text-16 text-light-1">
                      Stop: 1
                    </label>

                  </div>
                  {/* <BannerUploader /> */}
                </td>
                {/* End td */}
                <td className="col-7">
                  <div className="form-input ">
                    <textarea name="" id=""  required rows={3} defaultValue={""} onChange={e => setContent(e.target.value)} />
                    <label className="lh-1 text-16 text-light-1">
                      Descption of the stop: 1
                    </label>
                  </div>
                </td>
      
              </tr>
              {/* End tr */}
              {/* End tr */}
            </tbody>
          </table>
        </div>
        {/* End overflow */}
    
      {/* End hotelpolicy */}
      <div className="d-inline-block pt-30">
        <button className="button h-50 px-24 -dark-1 bg-blue-1 text-white" aria-label="save item" type="button">
          Save Changes <div className="icon-arrow-top-right ml-15" />
        </button>
      </div>
      {/* End button */}
      </div>
        )}
    </form>
    </>
  );
};


export default QuestionsTabContent;
