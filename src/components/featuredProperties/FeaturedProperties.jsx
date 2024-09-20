import React from "react";
import { useNavigate } from "react-router-dom";
import "./featuredProperties.css";

const FeaturedProperties = (props) => {
  const navigate = useNavigate();
  const handlerDetail = () => {
    navigate("/detail");
  };
  //render
  return (
    <div className="fp">
      {props.items.map((item, i) => (
        <div key={i} className="fpItem" onClick={handlerDetail}>
          <img src={item.image_url} alt="" className="fpImg" />{" "}
          <span className="fpName">{item.name}</span>
          <span className="fpCity">{item.city}</span>
          <span className="fpPrice">Stating from ${item.price}</span>
          <div className="fpRating">
            <button>{item.rate}</button>
            <span>{item.type}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedProperties;
