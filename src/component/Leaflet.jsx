import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import { Icon } from "leaflet";
import Data from "../Data/Data";
import { Link } from "react-router-dom";
import Footer from "./Footer";
const Leaflet = () => {
  // console.log(Data.name)
  const customIcon = new Icon({
    iconUrl:
      "https://cdn.dribbble.com/users/1144645/screenshots/4004782/hotel.gif",
    iconSize: [39, 39],
  });

  return (
    <>
      <MapContainer center={Data[0].geocode} zoom={5}>
        <TileLayer
          attribution='<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {Data.map((data, index) => (
          <Marker
            key={index}
            position={data.geocode}
            icon={customIcon}
            className="border"
          >
            <Tooltip>
              {data.price}
              <Popup className="font-mooli">
                <img src={data.dp} alt="" className=" h-28    " />
                <h3 className="font-semibold  ">{data.name}</h3>

                <button className="bg-black text-white px-3 py-1 font-mooli  ">
                  {" "}
                  <Link to={`/detail/${data.id}`}> Learn More</Link>
                </button>
              </Popup>
            </Tooltip>
          </Marker>
        ))}
      </MapContainer>
      <Footer />
    </>
  );
};

export default Leaflet;
