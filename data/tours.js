module.exports = [
  {
    id: 1,
    tag: "LIKELY TO SELL OUT*",
    slideImg: ["/img/tours/1.png"],
    title: "Stonehenge, Windsor Castle and Bath with Pub Lunch in Lacock",
    location: "Westminster Borough, London",
    duration: "16",
    numberOfReviews: "3014",
    price: "72",
    tourType: "Full-day Tours",
    delayAnimation: "100",
  },
  {
    id: 2,
    tag: "",
    slideImg: ["/img/tours/2.png", "/img/tours/1.png", "/img/tours/3.png"],
    title: "Westminster Walking Tour & Westminster Abbey Entry",
    location: "Ciutat Vella, Barcelona",
    duration: "14",
    numberOfReviews: "2045",
    price: "65",
    tourType: "Attractions & Museums",
    delayAnimation: "200",
  },

  {
    id: 3,
    tag: "best seller",
    slideImg: ["/img/tours/3.png"],
    title: "High-Speed Thames River RIB Cruise in London",
    location: "Manhattan, New York",
    duration: "18",
    numberOfReviews: "2163",
    price: "87",
    tourType: "Private and Luxury",
    delayAnimation: "300",
  },
  {
    id: 4,
    tag: "top rated",
    slideImg: ["/img/tours/4.png"],
    title: "Edinburgh Darkside Walking Tour: Mysteries, Murder and Legends",
    location: "Vaticano Prati, Rome",
    duration: "20",
    numberOfReviews: "1458",
    price: "99",
    tourType: "Bus Tours",
    delayAnimation: "400",
  },
  {
    id: 5,
    tag: "LIKELY TO SELL OUT*",
    slideImg: ["/img/tours/5.png"],
    title: "Stonehenge, Windsor Castle and Bath with Pub Lunch in Lacock",
    location: "Westminster Borough, London",
    duration: "16",
    numberOfReviews: "3014",
    price: "72",
    tourType: "Full-day Tours",
    delayAnimation: "100",
  },
  {
    id: 6,
    tag: "",
    slideImg: ["/img/tours/6.png", "/img/tours/7.png", "/img/tours/8.png"],
    title: "Westminster Walking Tour & Westminster Abbey Entry",
    location: "Ciutat Vella, Barcelona",
    duration: "14",
    numberOfReviews: "2045",
    price: "65",
    tourType: "Attractions & Museums",
    delayAnimation: "200",
  },
  {
    id: 7,
    tag: "best seller",
    slideImg: ["/img/tours/7.png"],
    title: "High-Speed Thames River RIB Cruise in London",
    location: "Manhattan, New York",
    duration: "18",
    numberOfReviews: "2163",
    price: "87",
    tourType: "Private and Luxury",
    delayAnimation: "300",
  },
  {
    id: 8,
    tag: "top rated",
    slideImg: ["/img/tours/8.png"],
    title: "Edinburgh Darkside Walking Tour: Mysteries, Murder and Legends",
    location: "Vaticano Prati, Rome",
    duration: "20",
    numberOfReviews: "1458",
    price: "99",
    tourType: "Bus Tours",
    delayAnimation: "400",
  },
  {
    id: 9,
    tag: "best seller",
    slideImg: ["/img/tours/9.png"],
    title: "High-Speed Thames River RIB Cruise in London",
    location: "Manhattan, New York",
    duration: "18",
    numberOfReviews: "2163",
    price: "87",
    tourType: "Private and Luxury",
    delayAnimation: "500",
  },
];


// // import axios from "axios";
// // import React, { useState, useEffect } from "react";


// // const baseURL = process.env.NEXT_PUBLIC_API_URL;

// // export const getAll = () => {

// //   const [tours, setTours] = React.useState(null);

// //   React.useEffect(() => {
// //     axios.get(baseURL+'/tours').then((response) => {
// //       setTours(response.data);
// //     });
// //   }, []);
// //   return tours;
// // }

// // export const GetOne = (id) => {
// //   const [tour, setTour] = React.useState(null);
// //   React.useEffect(() => {
// //     axios.get(baseURL+'/tours/'+ id).then((response) => {
// //       setTour(response.data);
// //     });
// //   }, []);
// //   return tour;
// // }


// // export const GetUserInfo = () => {

// //   const [userInfo, setUserInfo] = useState(null);

// //   useEffect(() => {
// //     axios.get(baseURL+'/users/account', 
// //     {
// //       method: 'GET',
// //       credentials: 'include',
// //       headers: {
// //         'Content-Type': 'application/json',
// //       },  
// //       }
// //     ).then((response) => {
// //       setUserInfo(response);
// //     });
// //   }, []);
// //   return userInfo;
// // }

// components/tours/Tours.js

// import { useState, useEffect } from 'react';
// import Constants from '@/utils/constants';

// const Tours = () => {
//   const [tours, setTours] = useState([]);

//   useEffect(() => {
//     const fetchTours = async () => {
//       try {
//         const response = await fetch(`${Constants.baseURL}/tours`);
//         const data = await response.json();
//         setTours(data);
//       } catch (error) {
//         console.error('Error fetching tours:', error);
//       }
//     };

//     fetchTours();
//   }, []);
// };

// export default Tours;


