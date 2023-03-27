import PropCard from "./PropCard";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Listing = ({ type, title }) => {
  let listProps = [{}];
  let titleSliced = title.slice(10);
  const [properties, setProperties] = useState([
    {
      photos: [],
      price: "",
      bathrooms: "",
      bedrooms: "",
      area: "",
      address: "",
    },
  ]);

  useEffect(() => {
    (async () => {
      let rntList = [];
      listProps = await axios.get(
        "https://backpfs.juanmanuelcaicedo.com/props"
      );
      switch (type) {
        case "RES":
          rntList = listProps.data.filter(
            (prop) => prop.property.type === "RES"
          );
          break;

        case "RNT":
          rntList = listProps.data.filter(
            (prop) => prop.property.type === "RNT"
          );
          break;

        case "SEARCH":
          rntList = listProps.data.filter((prop) =>
            prop.geo.county.includes(titleSliced)
          );
          break;

        default:
          break;
      }
      setProperties(rntList);
    })();
    return () => {};
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <div className="my-5 flex flex-col justify-center text-center">
        <p className="text-[28px] font-light text-gray">{title}</p>
      </div>
      <div className="pt-4 flex overflow-x-scroll space-x-2 pb-6 px-8 justify-between">
        {properties.map((prop, key) => (
          <PropCard
            key={key}
            photo={
              prop.photos.length
                ? prop.photos[0]
                : "https://dvvjkgh94f2v6.cloudfront.net/523fa3e6/373356454/83dcefb7.jpeg"
            }
            price={prop.listPrice}
            property={prop.property}
          />
        ))}
      </div>
    </div>
  );
};

export default Listing;
