import React, { useState, useEffect } from "react";
import { GoThreeBars } from "react-icons/go";
import { FaSun, FaMoon } from "react-icons/fa";
import { AiFillCloseCircle, AiOutlineHome } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { MdOutlineTaskAlt, MdOutlinePermContactCalendar } from "react-icons/md";

const Navbar = (props) => {
  const { darkTheme, setDarkTheme, showNav, showList, setShowList } = props;
  const [showBar, setShowBar] = useState(false);

  const handleBarClick = () => {
    setShowList(!showList);
  };

  return (
    <div className={`navbar ${showNav ? "change-nav" : "show-nav"}  `}>
      <div className="titleContainer">
        <h3 id="title">Sohail</h3>
      </div>
      <div className={`list ${showList ? "show-list" : "hide-list"} `}>
        <div className="close-btn-parent">
          <AiFillCloseCircle
            className="close-btn"
            onClick={() => setShowList(!showList)}
          />
        </div>
        <ul>
          <li>
            <AiOutlineHome className="list-icon" />
            <a href="#" onClick={() => setShowList(!showList)}>
              Home
            </a>
          </li>
          <li>
            <BiUserCircle className="list-icon" />
            <a href="#about" onClick={() => setShowList(!showList)}>
              About
            </a>
          </li>
          <li>
            <MdOutlineTaskAlt className="list-icon" />
            <a href="#projects" onClick={() => setShowList(!showList)}>
              Projects
            </a>
          </li>
          <li>
            <MdOutlinePermContactCalendar className="list-icon" />
            <a href="#contact" onClick={() => setShowList(!showList)}>
              Contact
            </a>
          </li>
        </ul>
        <div className="resume">
          <a href="#">Resume</a>
        </div>
      </div>
      <div className="top-icons">
        <div>
          {darkTheme ? (
            <FaSun
              onClick={() => setDarkTheme(!darkTheme)}
              size={23}
              style={{ marginTop: ".3rem", cursor: "pointer" }}
            />
          ) : (
            <FaMoon
              onClick={() => setDarkTheme(!darkTheme)}
              size={23}
              style={{ marginTop: ".3rem", cursor: "pointer" }}
            />
          )}
        </div>
        <GoThreeBars
          className={`bars-icon ${showBar ? "showBar" : ""}`}
          onClick={handleBarClick}
        />
      </div>
    </div>
  );
};
export default Navbar;
