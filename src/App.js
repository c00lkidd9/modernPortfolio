import React, { useState, useEffect } from "react";
import $ from "jquery";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useAudio } from "react-awesome-audio";
import audio from "./turnLight1.mp3";
import "./index.css";
function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [showList, setShowList] = useState(false);
  const [showNav, setShowNav] = useState(true);

  return (
    {alert("hi")}
    <div className={`container ${darkTheme ? "dark" : "light"} `}>
      <div className="home-page">
        <Navbar
          setDarkTheme={setDarkTheme}
          darkTheme={darkTheme}
          showList={showList}
          setShowList={setShowList}
          showNav={showNav}
        />
        <Home showList={showList} />
      </div>
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
export default App;
