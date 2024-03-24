import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

const baseURL = process.env.NEXT_PUBLIC_API_URL;

export const useContentTypes = () => {
  const [contentTypes, setContentTypes] = useState(null);


  useEffect(() => {
    axios.get(baseURL + '/activitytypes')
      .then((response) => {
        setContentTypes(response.data);
      })
      .catch((error) => {
        console.error("Error fetching content types:", error);
      });
  }, []);

  return contentTypes;
};
