import React from "react";
import detail from "../../data/detail.json";
import footer from "../../data/footer.json";
import "./detail.css";
import Navbar from "../../components/navbar/Navbar";
import DetailItem from "../../components/detailItem/DetailItem";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";

const Detail = () => {
  return (
    <div>
      <Navbar />
      <div className="detailContainer">
        <DetailItem items={detail} />
        <Contact />
        <Footer items={footer} />
      </div>
    </div>
  );
};

export default Detail;
