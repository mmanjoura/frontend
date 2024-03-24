

import axios from "axios";
import React, { useState, useEffect } from "react";
import Constants from "@/utils/constants";

export const useToursData  = () => {

  const [tours, setTours] = useState(null);

  useEffect(() => {
    axios.get(`${Constants.baseURL}/tours`).then((response) => {
      setTours(response.data);
    });
  }, []);
  return tours;
}


export const useTourData = (id) => {
  const [tour, setTour] = useState(null);
  useEffect(() => {
    axios.get(`${Constants.baseURL}/tours/` + id)
      .then((response) => {
        setTour(response.data);
      })
      .catch((error) => {
        console.error("Error fetching tours:", error);
      });
  }, []);

  return tour;
};











export const GetUserInfo = () => {

  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    axios.get(baseURL+'/users/account', 
    {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },  
      }
    ).then((response) => {
      setUserInfo(response);
    });
  }, []);
  return userInfo;
}

