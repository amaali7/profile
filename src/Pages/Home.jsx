import React from "react";
import "../styles/pageDefault.scss";
import "../styles/Home.scss";
import CLang from "../images/C.png";
import CppLang from "../images/C++.png";
import JavaScript from "../images/Javascript.png";
import Python from "../images/Python.png";
import Bash from "../images/Bash.png";
import Tex from "../images/Tex.png";
import HTML from "../images/HTML.png";
import Sass from "../images/Sass.png";
import PersonalImage from "../images/pi.jpg";

const TabChar = "\u00A0" + "\u00A0" + "\u00A0" + "\u00A0";
const Home = () => {
  return (
    <section id="Home" className="page-section home-page">
      <div className="text">
        <p>
          <span className="span-4">#</span>
          <span className="span-1">include </span>
          <span className="span-4">{"<"}</span>
          <span className="span-3">Physics.h</span>
          <span className="span-4">{">"}</span> <br />
          <span className="span-4">#</span>
          <span className="span-1">include </span>
          <span className="span-4">{"<"}</span>
          <span className="span-3">Teaching.h</span>
          <span className="span-4">{">"}</span> <br />
          <span className="span-4">#</span>
          <span className="span-1">include </span>
          <span className="span-4">{"<"}</span>
          <span className="span-3">Hardware.h</span>
          <span className="span-4">{">"}</span> <br />
          <span className="span-4">#</span>
          <span className="span-1">include </span>
          <span className="span-4">{"<"}</span>
          <span className="span-3">Programming.h</span>
          <span className="span-4">{">"}</span> <br />
          <span className="span-4">#</span>
          <span className="span-1">include </span>
          <span className="span-4">{"<"}</span>
          <span className="span-3">InternetOfThings.h</span>
          <span className="span-4">{">"}</span> <br />
          <span className="span-4">#</span>
          <span className="span-1">include </span>
          <span className="span-4">{"<"}</span>
          <span className="span-3">isFun.h</span>
          <span className="span-4">{">"}</span> <br />
          <br />
          <span className="span-1">int</span> main
          <span className="span-1">
            {"("}int <span className="span-5">argc</span>
          </span>
          ,{" "}
          <span className="span-1">
            char <span className="span-2">*</span>
            <span className="span-5">argv</span>[]{"){"}
          </span>
          <br />
          {TabChar}
          <span className="span-1">if{"("}</span>isFun
          <span className="span-1">{")  "}</span>
          myLife.
          <span className="span-4">
            run<span className="span-1">{"()"}</span>
          </span>
          ;<br />
          {TabChar}
          <span className="span-1">else</span> retern{" "}
          <span className="span-5">0</span>; <br />
          <span className="span-1">{"}"}</span>
        </p>
        {/* <p>An  <span>IoT Developer</span>  with wide range of knowledge 
                    including hardware interfacing ,
                     microcontroller  programing like <span>Arduino </span>, <span> ESP32</span>,<span> Linux </span>
                        for both of Computers and <span> Embedded </span> devices .</p> */}
        <a href="#">Take A Look</a>
      </div>
      <div className="images-container">
        <div className="images">
          <div className="wheel">
            <img src={Bash} alt="Bash" />
            <img src={Tex} alt="Tex" />
            <img src={JavaScript} alt="JavaScript" />
            <img src={Sass} alt="Sass" />
            <img src={HTML} alt="HTML" />
            <img src={CLang} alt="C Lang" />
            <img src={CppLang} alt="C++ Lang" />
            <img src={Python} alt="Python" />
          </div>
          <img class="personal-image" src={PersonalImage} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Home;