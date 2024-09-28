import React, { useState } from "react";
import "./header.css";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";

const Header = () => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    { startDate: new Date(), endDate: new Date(), key: "selection" },
  ]);
  const [openOption, setOpenOption] = useState(false);
  const [option, setOption] = useState({ adult: 1, children: 0, room: 1 });
  const navigate = useNavigate();

  //asc-des quantity
  const quantityOptionHandler = (nameKey, count) => {
    setOption((prev) => {
      return {
        ...prev,
        [nameKey]:
          count === "increase" ? option[nameKey] + 1 : option[nameKey] - 1,
      };
    });
  };
  // console.log(option);

  //seacrh Event
  const handlerSearch = () => {
    navigate("/search", { state: { destination, date, option } });
  };

  //render header
  return (
    <div className="header">
      <div className="headerContainer">
        <h1 className="headerTilte">A lifetime of discounts? It's Genius</h1>
        <p className="headerDesc">
          Get rewarded for your travels - unlock instant saving of 10% or more
          with a free account
        </p>
        {/* <button className="headerBtn">Sign in / Register</button> */}
        <div className="headerSearch">
          {/* --------select place-------- */}
          <div className="headerSearchItem">
            <i className="headerIcon fa fa-bed" />
            <input
              type="text"
              placeholder="Where are you going?"
              className="headerSearchInput"
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>
          {/* ----------select time--------------- */}
          <div className="headerSearchItem">
            <i className="headerIcon fa fa-calendar-days" />
            <span
              onClick={() => setOpenDate(!openDate)}
              className="headerSearchText"
            >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
              date[0].endDate,
              "MM/dd/yyyy"
            )}`}</span>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                moveRangeOnFirstSelection={false}
                className="date"
                minDate={new Date()}
                onChange={(item) => setDate([item.selection])}
                ranges={date}
              />
            )}
          </div>

          {/* ---------select room------- */}

          <div className="headerSearchItem">
            <i className="headerIcon fa fa-person" />
            <span
              className="headerSearchText"
              onClick={() => setOpenOption(!openOption)}
            >{`${option.adult} adult ${option.children} children ${option.room} room`}</span>
            {openOption && (
              <div className="options">
                <div className="optionItem">
                  <span className="optionText">Adult</span>
                  <div className="optionCounter">
                    <button
                      disabled={option.adult < 1}
                      className="optionCounterButton"
                      onClick={() => quantityOptionHandler("adult", "decrease")}
                    >
                      -
                    </button>
                    <span className="optionCounterNumber">{option.adult}</span>
                    <button
                      className="optionCounterButton"
                      onClick={() => quantityOptionHandler("adult", "increase")}
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="optionItem">
                  <span className="optionText">Children</span>
                  <div className="optionCounter">
                    <button
                      disabled={option.children <= 1}
                      className="optionCounterButton"
                      onClick={() =>
                        quantityOptionHandler("children", "decrease")
                      }
                    >
                      -
                    </button>
                    <span className="optionCounterNumber">
                      {option.children}
                    </span>
                    <button
                      className="optionCounterButton"
                      onClick={() =>
                        quantityOptionHandler("children", "increase")
                      }
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="optionItem">
                  <span className="optionText">Room</span>
                  <div className="optionCounter">
                    <button
                      disabled={option.room <= 1}
                      className="optionCounterButton"
                      onClick={() => quantityOptionHandler("room", "decrease")}
                    >
                      -
                    </button>
                    <span className="optionCounterNumber">{option.room}</span>
                    <button
                      className="optionCounterButton"
                      onClick={() => quantityOptionHandler("room", "increase")}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* --------search button------ */}
          <div className="headerSearchItem">
            <button className="headerBtn" onClick={handlerSearch}>
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
