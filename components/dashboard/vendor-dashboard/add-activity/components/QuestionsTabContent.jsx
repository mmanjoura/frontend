import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {useActivitiesData} from "../../../../../data/activities-data";
import DropdownList from '../components/ActivityTypes';
import LoadingSpinner from '@/components/spinners/LoadingSpinner';

const QuestionsTabContent = () => {
  const baseURL = process.env.NEXT_PUBLIC_API_URL;
  const [selectedOption, setSelectedOption] = useState('');
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);

    const activities = useActivitiesData();
  
    const submit = async (e) => {
      e.preventDefault();
      setLoading(true);     
  
      const res = await fetch(baseURL + '/faqs?id=' + selectedOption +'&category=ACTIVITY', {
        method: "POST",
        credentials: 'include',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content,
          title,
  
        }),
      });
      setTimeout(() => {
        setLoading(false);
        document.getElementById("SubmitForm").reset();
      }
        , 1000);

    }
  

   
    const handleSelect = (selectedOption) => {
      setSelectedOption(selectedOption);
    };

  return (
    <>
    <form id="SubmitForm" className="row y-gap-20" onSubmit={submit}>
    {loading ? (<LoadingSpinner />) : (
      <div className="mt-20">
        <div className="fw-500 mb-20">Question & Answer</div>
        <div className="col-12">
        <div className="form-input" style={{ border: '2px solid #ddd', borderRadius: '4px', width:'400px', height:'50px'}}>
          <DropdownList className="lh-1 text-16 text-light-1" options={activities} onSelect={handleSelect} >
            </DropdownList>
          </div>
          <br></br>
        </div>
        <div className="overflow-scroll scroll-bar-1">
          <table className="table-5 -border-bottom col-12">
            <thead className="bg-light-2">
              <tr>
                <th>Question</th>
                <th>Answer</th>
                <th />
              </tr>
            </thead>
            {/* End thead */}
            <tbody>
              <tr>
                <td className="col-5">
                  <div className="form-input ">
                    <input type="text" required onChange={e => setTitle(e.target.value)}/>
                    <label className="lh-1 text-16 text-light-1">
                      Eg: Is it Safe to travel wih You?
                    </label>

                  </div>
                </td>
                {/* End td */}
                <td className="col-7">
                  <div className="form-input ">
                    <textarea required rows={3} defaultValue={""} onChange={e => setContent(e.target.value)} />
                    <label className="lh-1 text-16 text-light-1">No it is not.</label>
                  </div>
                </td>
      
              </tr>
              {/* End tr */}
              {/* End tr */}
            </tbody>
          </table>
        </div>
        <div className="d-inline-block pt-30">
        <button className="button h-50 px-24 -dark-1 bg-blue-1 text-white">
          Save Changes <div className="icon-arrow-top-right ml-15" />
        </button>
      </div>
        {/* End overflow */}
      </div>
         )}
      {/* End policy */}
      </form>
    </>
  );
};

export default QuestionsTabContent;
