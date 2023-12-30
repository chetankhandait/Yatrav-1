import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";

const HotelMAp = (geocode) => {
  // console.log(Data.name)
  const customIcon = new Icon({
    iconUrl:
      "https://cdn.dribbble.com/users/1144645/screenshots/4004782/hotel.gif",
    iconSize: [58, 58],
  });

  return (
    <MapContainer
      center={geocode.location}
      zoom={13}
      className="  h-[300px] rounded-lg  z-[1]"
    >
      <TileLayer
        attribution='<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker
        key={geocode}
        position={geocode.location}
        icon={customIcon}
        className="border"
      >
        <Popup className="font-mooli">
          <h2>{geocode.location}</h2>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default HotelMAp;
