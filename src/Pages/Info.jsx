import React from "react";
// const TabChar = "\u00A0" + "\u00A0" + "\u00A0" + "\u00A0";
const WhiteSpace = (num) => {
  let whitespace = "";
  for (let i = 0; i < num; i++) {
    whitespace += "\u00A0";
  }
  return whitespace;
};
const Info = () => {
  return (
    <section id="Info" className="page-section info-page">
      <h1 className="rounded-header" style={{ width: "300px" }}>
        Refrences
      </h1>
      <div className="info">
        <div className="card">
          <div className="top-box">
            <h1>Alnadhief Hamed Ahmed Alfedeel</h1>
          </div>
          <div className="main-box">
            <div className="element">
              <span className="header el">
                Position : <span>Assistant Professor </span>
              </span>
            </div>
            <div className="element">
              <span className="header el">
                At : <span>University of Khartoum</span>
              </span>
            </div>
            <div className="element">
              <span className="header el">
                Phone :{" "}
                <a href="tel:+249-124-662-377">
                  <span>+249-124-662-377 </span>
                </a>{" "}
                <a href="tel:+249123816018">
                  <span>+249-123-816-018</span>
                </a>
              </span>
            </div>
            <div className="element">
              <span className="header el">
                E-Mail : <span>alfaln001@uofk.edu, anadief@gmail.com</span>
              </span>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="top-box">
            <h1>Aymen Hamid</h1>
          </div>
          <div className="main-box">
            <div className="element">
              <span className="header el">
                Position : <span>Assistant Professor </span>
              </span>
            </div>
            <div className="element">
              <span className="header el">
                At : <span>University of Khartoum</span>
              </span>
            </div>
            <div className="element">
              <span className="header el">
                Phone :{" "}
                <a href="tel:+249912253710">
                  <span>+249-912-253-710</span>
                </a>
              </span>
            </div>
            <div className="element">
              <span className="header el">
                E-Mail : <span>aymanimh@gmail.com, aihamid@uok.edu</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="contact">
        <h1 className="rounded-header" style={{ width: "300px" }}>
          Contact
        </h1>
        <div className="contact-element">
          <div className="element">
            <span className="header el">
              Phone :{" "}
              <a href="tel:+249994747217">
                <span>+249-994-747-217</span>
              </a>
              <br />
              {WhiteSpace(6)}:{" "}
              <a href="tel:+249121452356">
                <span>+249-121-452-356</span>
              </a>
            </span>
          </div>{" "}
          <div className="element">
            <span className="header el">
              Address : <span>Sudan, Khartoum, </span> <br />
              {WhiteSpace(10)}
              <span>Adbabiker north</span>
            </span>
          </div>
        </div>
        <div className="contact-element">
          <div className="element">
            <span className="header el">
              Phone :{" "}
              <a href="tel:+201556270279">
                <span>+20-155-627-0279</span>
              </a>
            </span>
          </div>{" "}
          <div className="element">
            <span className="header el">
              Address : <span>Egypt, Cairo, Hadayeq El-Maadi </span>
            </span>
          </div>
        </div>
        <div id="Contact" className="contact-links">
          <a
            href="https://github.com/amaali7"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/abdallah-adam-489aab153"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            LinkedIn
          </a>
          <a
            href="https://www.facebook.com/amaali17/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            Facebook
          </a>
          <a
            href="https://t.me/Amaali7"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            Telegram
          </a>
        </div>
      </div>
    </section>
  );
};

export default Info;
