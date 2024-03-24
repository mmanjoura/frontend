// This file is used to fetch data from 
// the API and return it to the components.
import axios from "axios";
import React from "react";
import Constants from "@/utils/constants";

const baseURL = process.env.NEXT_PUBLIC_API_URL;
export const useGolfsData = () => {

  const [golfs, setGolfs] = React.useState(null);

  React.useEffect(() => {
    axios.get(`${Constants.baseURL}/golfs`).then((response) => {
      setGolfs(response.data);
    });
  }, []);
  return golfs;
}

// Compare this snippet from components/golfs/Golf3.jsx:
// import { Swiper, SwiperSlide } from "swiper/react";
export const useGolfData = (id) => {

  const [golf, setGolf] = React.useState(null);

  React.useEffect(() => {
    axios.get(`${Constants.baseURL}/golfs/`+ id).then((response) => {
      setGolf(response.data);
    });
  }, []);
  return golf;
}

