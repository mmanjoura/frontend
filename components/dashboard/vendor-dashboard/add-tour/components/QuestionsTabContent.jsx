import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {useToursData} from "../../../../../data/tours-data";
import DropdownList from '../components/TourTypes';
import LoadingSpinner from '@/components/spinners/LoadingSpinner';

const QuestionsTabContent = () => {
  const baseURL = process.env.NEXT_PUBLIC_API_URL;
  const [selectedOption, setSelectedOption] = useState('');
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(false);


  const router = useRouter();
  const tours = useToursData();
  console.log("Tours", tours)

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);    

    try {
      const res = await fetch(`${baseURL}/faqs?id=${selectedOption}&category=TOUR`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content,
          title,
        }),
      });

      if (res.ok) {
        setTimeout(() => {
          setLoading(false);
          document.getElementById("SubmitForm").reset();
        }
          , 1000);
      } else {
        console.error('Submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleSelect = (selectedOption) => {
    setSelectedOption(selectedOption);
    console.log('Selected Option', selectedOption);
    // Additional actions based on the selected option can be performed here
  };

  return (
    <form id="SubmitForm" className="row y-gap-20" onSubmit={submit}>
       {loading ? (<LoadingSpinner />) : (
      <div className="mt-20">
        <div className="fw-500 mb-20">Question & Answer</div>
        <div className="col-12">
          <div className="form-input" style={{ border: '2px solid #ddd', borderRadius: '4px', width: '400px', height: '50px' }}>
            <DropdownList className="lh-1 text-16 text-light-1" options={tours} onSelect={handleSelect} />
          </div>
          <br />
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
            <tbody>
              <tr>
                <td className="col-5">
                  <div className="form-input">
                    <input type="text" required onChange={(e) => setTitle(e.target.value)} />
                    <label className="lh-1 text-16 text-light-1">Eg: Is it Safe to travel with You?</label>
                  </div>
                </td>
                <td className="col-7">
                  <div className="form-input">
                    <textarea required rows={3} defaultValue={''} onChange={(e) => setContent(e.target.value)} />
                    <label className="lh-1 text-16 text-light-1">No, it is not.</label>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="d-inline-block pt-30">
          <button className="button h-50 px-24 -dark-1 bg-blue-1 text-white">
            Save Changes <div className="icon-arrow-top-right ml-15" />
          </button>
        </div>
      </div>
        )}
    </form>
  );
};

export default QuestionsTabContent;
