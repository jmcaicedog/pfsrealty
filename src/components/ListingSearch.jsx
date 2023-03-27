import PropCard from "./PropCard";
import React, { useEffect, useState } from "react";
import axios from "axios";

const ListingSearch = ({ type, title }) => {
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
      listProps = await axios.get("http://localhost:3001/props");
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
          rntList = listProps.data.filter((prop) => true);
          break;

        default:
          break;
      }
      setProperties(rntList);
    })();
    return () => {};
  }, []);

  return (
    <div className="w-[60%] px-3 mr-2">
      <div className="my-5 flex flex-col justify-center text-center">
        <p className="text-[28px] font-light text-gray">{title}</p>
      </div>
      <div className="pt-4 flex flex-wrap justify-between">
        {properties.map((prop, key) => (
          <div className="w-[33%] p-3">
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListingSearch;
