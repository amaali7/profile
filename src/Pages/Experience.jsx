import React from "react";
import UofK from "../images/uofk.png";
import Almadain from "../images/almadain.jpg";
import Stem from "../images/STEM.png";
import NileU from "../images/nileU.png";
import SmsProxy from "../images/smsproxy.png";
import Water from "../images/water.png";
import UvLamp from "../images/uv.png";

const Experience = () => {
  return (
    <section id="Experience" className="page-section experience-page">
      <h1 className="rounded-header" style={{ width: "300px" }}>
        Freelancer
      </h1>
      <div className="container">
        <div className="card">
          <div className="top-box">
            <div className="logo">
              <img src={Water} alt="UofK" className="mada" />
            </div>
            <h1 className="marg10">
              <a href="http://github.com/amaali7/WHO" className="linko" target="_blank">Web App</a>
            </h1>
          </div>
          <div className="main-box">
            <h1 className="header">Monitoring Water Sources</h1>
            <h6 className="span">2018 - 2019</h6>
            <p className="body">
              A web application that help to collecting biological and chemical
              information about water sources and isolating data based on
              geographical zoon and the central administration is the only one
              have access to all the data.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="top-box">
            <div className="logo">
              <img src={UvLamp} alt="UofK" height="110px" className="mada" />
            </div>
            <h1 className="marg10">
              <a href="https://github.com/amaali7/UV_Final" className="linko" target="_blank">Health Care</a>
            </h1>
          </div>
          <div className="main-box">
            <h1 className="header">Smart UV Lamb</h1>
            <h6 className="span">2018 - 2019</h6>
            <p className="body">
              A smart UV sterilization system that includes motion and current
              sensors, controlled using wireless network , supports a web user
              interface, a manual control system, and alarm system.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="top-box">
            <div className="logo">
              <img src={SmsProxy} alt="UofK" className="mada" />
            </div>
            <h1 className="marg10">
              <a href="https://github.com/amaali7/ESP32-SMS" className="linko" target="_blank">Communications Technology</a>
            </h1>
          </div>
          <div className="main-box">
            <h1 className="header"> SMS Smart Proxy</h1>
            <h6 className="span">2018 - 2019</h6>
            <p className="body">
              An interactive response system that transfers SMS to a central
              server that responds appropriately to them, either automatically
              or manually, and the response is sent back to the sender by SMS.
            </p>
          </div>
        </div>
      </div>
      <h1 className="rounded-header" style={{ width: "300px" }}>
        Teaching
      </h1>
      <div className="container">
        <div className="card">
          <div className="top-box">
            <div className="logo">
              <img src={UofK} alt="UofK" className="mada" />
            </div>
            <h1 className="marg10">University Of Khartoum</h1>
          </div>
          <div className="main-box">
            <h1 className="header">Department Of Physics</h1>
            <h6 className="span">2017 - 2020</h6>
            <p className="body">
              I work at physics laboratories in the preparation and teaching
              experiments and maintenance of laboratory equipment, computer
              software and hardware.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="top-box">
            <div className="logo">
              <img src={NileU} alt="UofK" className="mada" />
            </div>
            <h1 className="marg10">Nile University</h1>
          </div>
          <div className="main-box">
            <h1 className="header">Department Of Physics</h1>
            <h6 className="span">2018 - 2019</h6>
            <p className="body">Teaching in 1st year Laboratories</p>
          </div>
        </div>
        <div className="card mas">
          <div className="top-box">
            <div className="logo">
              <img src={Almadain} alt="UofK" className="mada" />
            </div>
            <h1>Almadin College for Science and Technology</h1>
          </div>
          <div className="main-box">
            <h1 className="header">Department Of Physics</h1>
            <h6 className="span">2017 - 2019</h6>
            <p className="body">Teaching in 1st year Laboratories</p>
          </div>
        </div>
        <div className="card">
          <div className="top-box">
            <div className="logo">
              <img src={Stem} alt="UofK" className="mada" />
            </div>
            <h1 className="marg10">STEM Education Sudan </h1>
          </div>
          <div className="main-box">
            <h1 className="header">Electronics and Programing</h1>
            <h6 className="span">2017 - 2020</h6>
            <p className="body">
              Educate children basic electronics and simple embedded like
              Arduino, ESP32 and ESP8266, with several sensors during summer
              camp's.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
