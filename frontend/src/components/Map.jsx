import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css"; // Re-uses images from ~leaflet package
import * as L from "leaflet";
import "leaflet-defaulticon-compatibility";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import { useMapEvent } from "react-leaflet/hooks";
import { useEffect } from "react";

const Map = (props) => {
  useEffect(() => {}, []);
  return (
    <MapContainer
      center={props.mapCenter === "" ? ["42.88", "-78.78"] : props.mapCenter}
      zoom={11}
      scrollWheelZoom={true}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {props.markers.map((marker) => {
        console.log(marker);
        return (
          <Marker key={marker.name} position={marker.location}>
            <Popup>
              <img src={marker.image} alt={marker.name} width="100" />
              <br />
              <h1>{marker.name}</h1>
              <br />
              <br />
              Available today: {marker.items.join(", ")}
            </Popup>
          </Marker>
        );
      })}
      {/* <Marker position={["42.88", "-78.78"]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker> */}
    </MapContainer>
  );
};

export default Map;
