import React, { useEffect, useState } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { getRestaurants } from "../../services/restaurants";
import "./index.css";

const containerStyle = {
  width: "100%",
  height: "800px",
};

function Map() {
  const [position, setPosition] = useState();

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAhSQ02xvSmi9KwN_A-6SvEh3asxtYRrpE",
  });

  navigator.geolocation.getCurrentPosition(function (position) {
    setPosition({
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    });
  });

  if (!isLoaded) {
    return null;
  }
  const restaurants = getRestaurants();
  return (
    <GoogleMap mapContainerStyle={containerStyle} center={position} zoom={13}>
      <Marker position={position} />
      {/* <Marker
        position={{
          lat: restaurants[0].lat,
          lng: restaurants[0].long,
        }}
      />
      <Marker
        position={{
          lat: restaurants[1].lat,
          lng: restaurants[1].long,
        }}
      /> */}
    </GoogleMap>
  );
}

export default React.memo(Map);
