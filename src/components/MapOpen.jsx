import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";


import "leaflet/dist/leaflet.css";

const MapOpen = (props) => {
  

  

 

  return (
    <MapContainer  center={[505, -0.09]}  zoom={13}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
     
    </MapContainer>
  );
};

export default MapOpen;
