
import axios from "axios";
import React from "react";
import Constants from "@/utils/constants";

const baseURL = process.env.NEXT_PUBLIC_API_URL;

export const useContentTypesData = () => {

  const [contentTypes, setContentTypes] = React.useState(null);
  const [contentType, setContentType] = React.useState(null);

  React.useEffect(() => {
    axios.get(`${Constants.baseURL}/activitytypes`).then((response) => {
      setContentTypes(response.data);
    });
  }, []);
  return contentTypes;
}

