
'use client'

import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function MapPropertyFinder({props}) {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };


  return (
    <div dangerouslySetInnerHTML={{ __html: props?.map_url }} />
  );
}
