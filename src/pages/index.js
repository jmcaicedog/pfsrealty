import Head from "next/head";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Listing from "@/components/Listing";
import Footer from "@/components/Footer";
import house from "../assets/bannerhome.jpg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>PFS Realty Group - Miami</title>
        <meta
          name="description"
          content="Website prototype for PFS Realty Group by juanmanuelcaicedo.com"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <Navbar />
        <Hero image={house} type="usados" />
        <Listing type="RES" title="Propiedades usadas" />
      </main>
      <Footer />
    </>
  );
}
