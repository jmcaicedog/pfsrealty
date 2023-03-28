import React, { useState, useMemo } from "react";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ListingSearch from "@/components/ListingSearch";

import {
  useLoadScript,
  GoogleMap,
  Marker,
  Circle,
} from "@react-google-maps/api";

const usado = () => {
  const [lat, setLat] = useState(27.672932021393862);
  const [lng, setLng] = useState(85.31184012689732);

  const libraries = useMemo(() => ["places"], []);
  const mapCenter = useMemo(() => ({ lat: lat, lng: lng }), [lat, lng]);

  const mapOptions = useMemo(
    () => ({
      disableDefaultUI: true,
      clickableIcons: true,
      scrollwheel: false,
    }),
    []
  );

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY,
    libraries: libraries,
  });

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  const onAddressSelect = (address) => {
    getGeocode({ address: address }).then((results) => {
      const { lat, lng } = getLatLng(results[0]);

      setLat(lat);
      setLng(lng);
    });
  };

  const router = useRouter();
  return (
    <div>
      <Navbar />
      <div className="flex flex-col lg:flex-row">
        <ListingSearch
          type="SEARCH"
          title={
            router.query.usado
              ? "Casas y apartamentos usados en: " + router.query.usado
              : ""
          }
        />
        <GoogleMap
          options={mapOptions}
          zoom={14}
          center={mapCenter}
          mapTypeId={"roadmap"}
          mapContainerStyle={{
            width: "600px",
            height: "600px",
            borderRadius: "20px",
            padding: "20px",
            top: "0",
            z: "50",
          }}
          onLoad={(map) => console.log("Map Loaded")}
        >
          <Marker
            position={mapCenter}
            onLoad={() => console.log("Marker Loaded")}
          />

          {[1000, 2500].map((radius, idx) => {
            return (
              <Circle
                key={idx}
                center={mapCenter}
                radius={radius}
                onLoad={() => console.log("Circle Load...")}
                options={{
                  fillColor: radius > 1000 ? "red" : "green",
                  strokeColor: radius > 1000 ? "red" : "green",
                  strokeOpacity: 0.8,
                }}
              />
            );
          })}
        </GoogleMap>
      </div>

      <Footer />
    </div>
  );
};

export default usado;
