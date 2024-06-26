
'use client'

import { useState } from "react";
import Pagination from "../../common/Pagination";
import ActionsButton from "../components/ActionsButton";
import { useActivitiesData } from "@/data/activities-data";
import Link from "next/link";

const BookingTable = () => {
  const [activeTab, setActiveTab] = useState(0);
  const activities = useActivitiesData();
  const baseURL = process.env.NEXT_PUBLIC_API_URL;
  if (!activities) return null;

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const handleDelete = async (id) => {
    try {

      const response = await fetch(baseURL + `/activities/${id}`, {
        method: 'DELETE',
        credentials: 'include',
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {

        window.location.reload();
      } else {
        console.error('Failed to delete product');
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };


  return (
    <>
      <div className="tabs -underline-2 js-tabs">
        <div className="tabs__content pt-30 js-tabs-content">
          <div className="tabs__pane -tab-item-1 is-tab-el-active">
            <div className="overflow-scroll scroll-bar-1">
              <table className="table-4 -border-bottom col-12">
                <thead className="bg-light-2">
                  <tr>
                    <th>
                      <div className="d-flex items-center">
                        <div className="form-checkbox ">
                          <input type="checkbox" name="name" />
                          <div className="form-checkbox__mark">
                            <div className="form-checkbox__icon icon-check" />
                          </div>
                        </div>
                      </div>
                    </th>
                    <th>Name</th>
                    <th>Location</th>
                    <th>Author</th>
                    <th>Price</th>
                    <th>Reviews</th>
                    <th>Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                {/* End theade */}
                <tbody>
                  {activities?.data?.map((data, index) => (

                    <tr key={index}>
                      <td>
                        <div className="d-flex items-center">
                          <div className="form-checkbox ">
                            <input type="checkbox" name="name" />
                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon icon-check" />
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="text-blue-1 fw-500">{data.title.substring(0, 20)}</td>

                      <td>{data?.location.substring(0, 20)}</td>

                      <td>{data?.owner}</td>

                      <td>
                        <span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-yellow-4 text-yellow-3">
                          €{data?.price}
                        </span>
                      </td>

                      <td>
                        <div className="rounded-4 size-35 bg-blue-1 text-white flex-center text-12 fw-600">
                          {data?.number_of_reviews}
                        </div>
                      </td>

                      <td>{data?.created_at.slice(0, 10)}</td>

                      <td>
                        <div className="row x-gap-10 y-gap-10 items-center">
                          <div className="col-auto">
                            <Link href={`/activity-single/${data.id}`}>
                              <i className="icon-eye text-16 text-light-1" />
                            </Link>
                          </div>
                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35"  aria-label="Close">
                              <Link href={`./edit-activity/${data.id}`}>
                                <i className="icon-edit text-16 text-light-1" />
                              </Link>
                            </button>
                          </div>
                          <div className="col-auto">
                            <button className="flex-center bg-light-2 rounded-4 size-35"  aria-label="Close" onClick={() => handleDelete(data.id)}>
                              <i className="icon-trash-2 text-16 text-light-1" />
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}

                </tbody>
                {/* End tbody */}
              </table>
            </div>
          </div>
        </div>
      </div>
      <Pagination />
    </>
  );
};

export default BookingTable;
