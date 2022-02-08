import React, { useState, useEffect } from "react";
import FadeDiv from "../Components/FadeDiv/FadeDiv";
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
      console.log(image);
    }, 5000);
    return () => clearInterval(interval);
  }, [image]);
  return (
    <section id="Education" className="page-section education-page">
      <div className="image-section">
        <img src={imageList[image]} alt="UofK  1" />
      </div>
      <div className="text-section">
        <div className="text">
        {/* <span className="span-4">"University Of Khartoum"</span> */}
           <span className="span-1">typedef struct</span> education
          <span className="span-1">{"{"}</span> <br />
          
          {TabChar}<span className="span-1">char</span><span className="span-2"> *</span>name; <br />
          {TabChar}<span className="span-1">char</span><span className="span-2"> *</span>department; <br />
          {TabChar}<span className="span-1">char</span><span className="span-2"> *</span>degree; <br />
          {TabChar}<span className="span-1">int</span> from; <br />
          {TabChar}<span className="span-1">int</span> to; <br />
          {/* <h3> B.Sc (Honors) in Physics</h3>
          <h6>2012 - 2017</h6> */}
          <span className="span-1">{"}"}</span>Edu;<br /> <br />
          <span className="span-1">Edu</span> UofK<span className="span-1"> = </span><span className="span-1">{"{"}</span> <br />
          {TabChar}.name <span className="span-1"> = </span><span className="span-4">"University Of Khartoum"</span>, <br />
          {TabChar}.department <span className="span-1"> = </span><span className="span-4">"Physics"</span>, <br />
          {TabChar}.degree <span className="span-1"> = </span><span className="span-4">"B.Sc (Honors)"</span>, <br />
          {TabChar}.from <span className="span-1"> = </span><span className="span-5">2012</span>, <br />
          {TabChar}.to <span className="span-1"> = </span><span className="span-5">2017</span>, <br />
          
           <span className="span-1">{"}"}</span>

        </div>
      </div>
    </section>
  );
};

export default Education;
