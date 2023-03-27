import React from "react";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const page = () => {
  const router = useRouter();
  return (
    <div>
      <Navbar />
      <div className="flex justify-center text-[26px] py-[10%]">
        <h1>Contenido para la página de {router.query.page}</h1>
      </div>
      <Footer />
    </div>
  );
};

export default page;
