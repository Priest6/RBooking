import { format } from "date-fns";
import React, { useState } from "react";
import { DateRange } from "react-date-range";
import "./searchPopup.css";

const SearchPopup = ({ popup }) => {
  // console.log(popup);
  const [destination, setDestination] = useState(popup.destination);
  const [date, setDate] = useState(popup.date);
  const [openDate, setOpenDate] = useState(false);
  const [option, setOption] = useState(popup.option);

  //render
  return (
    <div className="popupSearch">
      <h1 className="ppTitle">Search</h1>
      <div className="ppItem">
        <label>Destination</label>
        <input
          type="text"
          onChange={(e) => setDestination(e.target.value)}
          value={destination}
        />
      </div>

      {/* ---------date-------- */}
      <div className="ppItem">
        <label>Check-in date</label>
        <span onClick={() => setOpenDate(!openDate)}>{`${format(
          date[0].startDate,
          "MM/dd/yyyy"
        )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
        {openDate && (
          <DateRange
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            minDate={new Date()}
            onChange={(item) => setDate([item.selection])}
            ranges={date}
          />
        )}
      </div>

      {/* ---------option--------- */}
      <div className="ppItem">
        <label>Options</label>
        <div className="ppOptions">
          <div className="ppOptionItem">
            <span>
              Min price<small>per night</small>
            </span>
            <input type="number" className="ppOptionItemInput" />
          </div>
          <div className="ppOptionItem">
            <span>
              Max price<small>per night</small>
            </span>
            <input type="number" className="ppOptionItemInput" />
          </div>
          <div className="ppOptionItem">
            <span>Adult</span>
            <input
              type="number"
              className="ppOptionItemInput"
              value={option.adult}
              onChange={(e) =>
                setOption((prev) => {
                  return { ...prev, adult: e.target.value };
                })
              }
            />
          </div>
          <div className="ppOptionItem">
            <span>Children</span>
            <input
              type="number"
              className="ppOptionItemInput"
              value={option.children}
              onChange={(e) =>
                setOption((prev) => {
                  return { ...prev, children: e.target.value };
                })
              }
            />
          </div>
          <div className="ppOptionItem">
            <span>Room</span>
            <input
              type="number"
              className="ppOptionItemInput"
              value={option.room}
              onChange={(e) =>
                setOption((prev) => {
                  return { ...prev, room: e.target.value };
                })
              }
            />
          </div>
        </div>
      </div>
      <button>Search</button>
    </div>
  );
};

export default SearchPopup;
