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
      
      <h1 className="rounded-header" style={{width: '300px'}}>Freelancer</h1>
      <div className="container">
        <div className="card">
          <div className="top-box">
            <div className="logo">
              <img src={Water} alt="UofK"  className="mada" />
            </div>
            <h1 className="marg10">Web App </h1>
          </div>
          <div className="main-box">
            <h1 className="header">Monitoring Water Sources</h1>
            <h6 className="span">2018 - 2019</h6>
            <p className="body">
              A web application that helps in collecting biological and chemical
              water sourcesdata and isolating data based on geographical areas
              and the centraladministration is the only access all the data.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="top-box">
            <div className="logo">
              <img src={UvLamp} alt="UofK" height="110px" className="mada" />
            </div>
            <h1 className="marg10">Health Care </h1>
          </div>
          <div className="main-box">
            <h1 className="header">Smart UV Lamb</h1>
            <h6 className="span">2018 - 2019</h6>
            <p className="body">
              A smart UV sterilization system that includes motion and current
              sensors, awireless network control system, supports a web user
              interface, a manual controlsystem, and alarm system.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="top-box">
            <div className="logo">
              <img src={SmsProxy} alt="UofK" className="mada" />
            </div>
            <h1 className="marg10">Communications Technology</h1>
          </div>
          <div className="main-box">
            <h1 className="header"> SMS Smart Proxy</h1>
            <h6 className="span">2018 - 2019</h6>
            <p className="body">
              An interactive response system that transfers SMS to a central
              server thatresponds appropriately to them, either automatically or
              manually, and theresponse is sent back to the sender in the same
              way.
            </p>
          </div>
        </div>
      </div>
      <h1 className="rounded-header" style={{width: '300px'}}>Teaching</h1>
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
              I worked in physics laboratories in the preparation and teaching
              of experiments and maintenance of laboratory equipment and
              computers software and hardware.
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
              Educate children bisc electonics and simple embbeded like Arduino,
              ESP32, ESP8266 and Raspberry pi, with sevral sensors during summer
              camp's.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
