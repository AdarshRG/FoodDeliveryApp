import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MyCard from "../components/MyCard";
import Carousel from "../components/Carousel";

export default function Home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Carousel/>
      </div>
      <div className="m-3" > 
        <MyCard />
        <MyCard />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
