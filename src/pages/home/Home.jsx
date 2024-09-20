import React from "react";
import "./home.css";
import city from "../../data/city.json";
import count from "../../data/type.json";
import hotel from "../../data/hotel_list.json";
import footer from "../../data/footer.json";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Featured from "../../components/featured/Featured";
import PropertiesList from "../../components/propertiesList/PropertiesList";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />

      <div className="homeContainer">
        <Featured items={city} />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertiesList items={count} />
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties items={hotel} />
        <Contact />
        <Footer items={footer} />
      </div>
    </div>
  );
};

export default Home;
