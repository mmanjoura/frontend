
'use client'

import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function MapPropertyFinder({golf}) {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    // Important! Alwys set the container height explicitlya

    // <GoogleMapReact
    //   bootstrapURLKeys={{ key: "AIzaSyCAglUy50ffcyREWqvpJM_zm10UOCJhiQ8" }}
    //   defaultCenter={defaultProps.center}
    //   defaultZoom={defaultProps.zoom}
    // >
    //   <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
    // </GoogleMapReact>
 
      <div dangerouslySetInnerHTML={{ __html: golf?.map_url }} />
 
  );
}

