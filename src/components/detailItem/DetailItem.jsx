import React, { useState } from "react";
import "./detailItem.css";

const DetailItem = (props) => {
  // console.log(props.items);
  // console.log(props.items[0].photos);

  const [modal, setModal] = useState(false);
  const [indexImage, setIndexImage] = useState("");

  //event click image
  const imageModalHandler = (i) => {
    setIndexImage(i);
    setModal(true);
  };

  //hide
  const closeHandler = () => {
    setModal(false);
  };

  //moving slide
  const moveSlideHandler = (leftright) => {
    let newSlide;
    if (leftright === "left") {
      newSlide = indexImage === 0 ? 5 : indexImage - 1;
    } else {
      newSlide = indexImage === 5 ? 0 : indexImage + 1;
    }
    setIndexImage(newSlide);
  };

  //render
  return (
    <div>
      {props.items.map((item, index) => (
        <div className="detail" key={index}>
          <button className="bookNow">Reverve or Book Now!</button>
          <h1 className="detailTitle">{item.name}</h1>
          <div className="detailAddress">
            <i className="fa fa-location-dot" />
            <span>{item.address}</span>
          </div>
          <span className="detailDistance">{item.distance}</span>
          <span className="detailPriceHighLight">{item.price}</span>
          <div className="detailImages">
            {item.photos.map((photo, i) => (
              <div className="detailImgWrapper" key={i}>
                <img
                  src={photo}
                  alt=""
                  className="detailImg"
                  onClick={() => {
                    imageModalHandler(i);
                  }}
                />
              </div>
            ))}
          </div>
          <div className="detailDetails">
            <div className="detailDetailsTexts">
              <h1 className="detailTitle">{item.title}</h1>
              <p className="detailDesc">{item.description}</p>
            </div>
            <div className="detailDetailsPrice">
              <h1>Perfect for a 9-night stay</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>${item.nine_night_price}</b>(9 nights)
              </h2>
              <button>Reverse or Book Now!</button>
            </div>
          </div>
        </div>
      ))}

      {/* --------displayModal------ */}
      {modal && (
        <div>
          <div className="backdropDetail" onClick={closeHandler} />
          <div className="modalDetail">
            <i
              className="fas fa-times-circle closeDetail"
              onClick={closeHandler}
            />
            <i
              className="fas fa-chevron-circle-left arrowLeft"
              onClick={() => moveSlideHandler("left")}
            />
            <img src={props.items[0].photos[indexImage]} alt="" />
            <i
              className="fas fa-chevron-circle-right arrowRight"
              onClick={() => moveSlideHandler("right")}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailItem;
