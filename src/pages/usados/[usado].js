import React from "react";
import { useRouter } from "next/router";
const usado = () => {
  const router = useRouter();
  return <div>{router.query.usado}</div>;
};

export default usado;
