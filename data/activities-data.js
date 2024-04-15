
import axios from "axios";
import React from "react";
import Constants from "@/utils/constants";

const baseURL = process.env.NEXT_PUBLIC_API_URL;

export const useActivitiesData = () => {

  const [activities, setActivities] = React.useState(null);

  React.useEffect(() => {
    axios.get(`${Constants.baseURL}/activities`).then((response) => {
      setActivities(response.data);

    });
  }, []);
  ;
  return activities;
}

export const useActivityData = (id) => {

  const [activity, setActivity] = React.useState(null);

  React.useEffect(() => {
    axios.get(`${Constants.baseURL}/activities/`+ id).then((response) => {
      setActivity(response.data);
    });
  }, []);
  return activity;
}

