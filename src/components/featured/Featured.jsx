import React from "react";
import "./featured.css";

const Featured = (props) => {
  return (
    <div className="featured">
      {props.items.map((item, i) => (
        <div key={i} className="featuredItem">
          <img src={item.image} alt="" className="featuredImg" />
          <div>
            <h1>{item.name}</h1>
            <h2>{item.subText}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Featured;
