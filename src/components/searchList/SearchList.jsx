import React, { useState } from "react";
import "./searchList.css";

const SearchList = (props) => {
  // console.log(props.items);
  const [modal, setModal] = useState(false);
  const [imgModal, setImgModal] = useState("");

  //event click image
  const imageModalHandler = (i) => {
    setImgModal(props.items[i]);
    setModal(true);
  };

  //hide
  const closeHandler = () => {
    setModal(false);
  };

  //render
  return (
    <div>
      {props.items.map((item, index) => (
        <div className="searchItem" key={index}>
          <img
            src={item.image_url}
            alt=""
            className="siImg"
            onClick={() => imageModalHandler(index)}
          />
          <div className="siDesc">
            <h1 className="siTitle">{item.name}</h1>
            <span className="siDistance">{item.distance}</span>
            <span className="siTaxiOp">{item.tag}</span>
            <span className="siSubitle">{item.description}</span>
            <span className="siFeatures">{item.type}</span>
            <span
              className={item.free_cancel ? "siCancelOp" : "siCancelOpHiden"}
            >
              Free Cancellation
            </span>
            <span
              className={
                item.free_cancel ? "siCancelOpSubtitle" : "siCancelOpHiden"
              }
            >
              You can cancel later, so lock in this great price today
            </span>
          </div>
          <div className="siDetails">
            <div className="siRating">
              <span>{item.rate_text}</span>
              <button>{item.rate}</button>
            </div>
            <div className="siDetailTexts">
              <span className="siPrice">${item.price}</span>
              <span className="siTaxOp">Includes taxes and frees</span>
              <button className="siCheckButton">See availability</button>
            </div>
          </div>
        </div>
      ))}
      {/* ------------displayModal----------- */}
      {modal && (
        <div>
          <div className="backdrop" onClick={closeHandler} />
          <div className="modal">
            <i className="fas fa-times-circle close" onClick={closeHandler} />
            <img src={imgModal.image_url} alt="" />
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchList;
