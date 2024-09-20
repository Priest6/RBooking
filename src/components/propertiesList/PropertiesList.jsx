import React from "react";
import "./propertiesList.css";

const PropertiesList = (props) => {
  return (
    <div className="pList">
      {props.items.map((item, i) => (
        <div key={i} className="pListItem">
          <img src={item.image} alt="" className="pListImg" />
          <div className="pListTitles">
            <h1>{item.name}</h1>
            <h2>{item.count} hotels</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertiesList;
