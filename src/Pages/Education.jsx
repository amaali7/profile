import React, { useState, useEffect } from "react";
import UofkSlide1 from "../images/uofk-slide1.jpg";
import UofkSlide2 from "../images/uofk-slide2.jpg";
import UofkSlide3 from "../images/uofk-slide3.jpg";

const TabChar = "\u00A0" + "\u00A0" + "\u00A0" + "\u00A0";

const Education = () => {
  const [image, setImage] = useState(0);
  const imageList = [UofkSlide1, UofkSlide2, UofkSlide3];
  useEffect(() => {
    const interval = setInterval(() => {
      if (image === 2) {
        setImage(0);
      } else {
        setImage(image + 1);
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [image]);
  return (
    <section id="Education" className="page-section education-page">
      <div className="image-section">
        <img src={imageList[image]} className="uofk-images" alt="UofK  1" />
      </div>
      <div className="text-section">
        <h1>extension.c</h1>
        <div className="text">
          <span className="span-1">typedef struct</span> education
          <span className="span-1">{"{"}</span> <br />
          {TabChar}
          <span className="span-1">char</span>
          <span className="span-2"> *</span>name; <br />
          {TabChar}
          <span className="span-1">char</span>
          <span className="span-2"> *</span>department; <br />
          {TabChar}
          <span className="span-1">char</span>
          <span className="span-2"> *</span>degree; <br />
          {TabChar}
          <span className="span-1">int</span> from; <br />
          {TabChar}
          <span className="span-1">int</span> to; <br />
          <span className="span-1">{"}"}</span>Edu;
          <br /> <br />
          <span className="span-1">Edu</span> UofK
          <span className="span-1"> = </span>
          <span className="span-1">{"{"}</span> <br />
          {TabChar}.name <span className="span-1"> = </span>
          <span className="span-4">"University Of Khartoum"</span>, <br />
          {TabChar}.department <span className="span-1"> = </span>
          <span className="span-4">"Physics"</span>, <br />
          {TabChar}.degree <span className="span-1"> = </span>
          <span className="span-4">"B.Sc (Honors)"</span>, <br />
          {TabChar}.from <span className="span-1"> = </span>
          <span className="span-5">2012</span>, <br />
          {TabChar}.to <span className="span-1"> = </span>
          <span className="span-5">2017</span>, <br />
          <span className="span-1">{"}"}</span>
        </div>
      </div>
    </section>
  );
};

export default Education;
