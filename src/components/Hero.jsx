import React from "react";
import Image from "next/image";
import Link from "next/link";
import style from "./Hero.module.css";
import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import { useLoadScript } from "@react-google-maps/api";

import { RiSearchLine } from "react-icons/ri";

const Hero = ({ image }) => {
  const { push } = useRouter();
  const [lat, setLat] = useState(27.672932021393862);
  const [lng, setLng] = useState(85.31184012689732);
  const libraries = useMemo(() => ["places"], []);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY,
    libraries: libraries,
  });

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  return (
    <div className="h-[31rem] flex">
      <div className="absolute w-full z-20 rounded">
        <div className="bg-black/40 absolute z-10 w-full h-[31rem]"></div>
        <Image
          src={image}
          className="h-[31rem] object-cover w-full"
          alt="Banner"
          width="100%"
        />
      </div>
      <div className="relative z-30 flex flex-col items-center w-full justify-center">
        <p className="text-white text-[40px] font-bold text-center">
          <b className="text-[#f9097d]">P</b>ROPIEDADES{" "}
          <b className="text-[#f9097d]">F</b>INANCIAMIENTO{" "}
          <b className="text-[#f9097d]">S</b>ERVICIOS
        </p>
        <p className="text-white font-light text-[20px] text-center lg:text-[30px]">
          Lo acompañamos durante todo el proceso
        </p>
        <ul className="flex space-x-2 mt-10 rou">
          <Link href="/">
            <button className="bg-transparent border rounded p-2 text-white  rounded- px-4 hover:bg-[#f9097d] duration-200">
              Usados
            </button>
          </Link>
          <Link href="/new">
            <button className="bg-transparent border rounded p-2 text-white  rounded- px-4 hover:bg-[#f9097d] duration-200">
              Nuevos
            </button>
          </Link>
          <Link href="/rent">
            <button className="bg-transparent border rounded p-2 text-white  rounded- px-4 hover:bg-[#f9097d] duration-200">
              Rentar
            </button>
          </Link>
        </ul>
        <div className="mt-12 flex">
          <PlacesAutocomplete
            onAddressSelect={(address) => {
              getGeocode({ address: address }).then((results) => {
                const { lat, lng } = getLatLng(results[0]);

                setLat(lat);
                setLng(lng);
              });
            }}
          />
          <div
            onClick={() => push("/new")}
            className="flex justify-center items-center w-16 h-16 rounded-r bg-[#f9097d] hover:bg-black duration-100"
          >
            <RiSearchLine className="text-white text-[28px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

const PlacesAutocomplete = ({ onAddressSelect } = {}) => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    callbackName: "myCallbackName",
    requestOptions: { componentRestrictions: { country: "us" } },
    debounce: 300,
    cache: 86400,
  });

  const renderSuggestions = () => {
    return data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
        description,
      } = suggestion;

      return (
        <li
          key={place_id}
          onClick={() => {
            setValue(description, false);
            clearSuggestions();
            onAddressSelect && onAddressSelect(description);
          }}
        >
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      );
    });
  };

  return (
    <div className={style.autocompleteWrapper}>
      <input
        value={value}
        className="bg-white py-5 w-[20rem] rounded-l pl-5 placeholder:text-gray-400 placeholder:text-[20px] lg:w-[32rem]"
        onChange={(e) => {
          setValue(e.target.value);
        }}
        placeholder="Busca por ciudad, código postal, condado o dirección:"
      />

      {status === "OK" && (
        <ul className={style.suggestionWrapper}>{renderSuggestions()}</ul>
      )}
    </div>
  );
};

export default Hero;
