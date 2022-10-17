import React from "react";
import { Marker } from "react-leaflet";


const VenueMarkers = (props) => {
  const { venues } = props;
  const markers = venues.map((venue, i) => (
    <Marker key={i} position={venue.geometry} icon={VenueLocationIcon}>
      <MarkerPopup data={venue} />
    </Marker>
  ));
  return <>{markers}</>;
};

export default VenueMarkers;