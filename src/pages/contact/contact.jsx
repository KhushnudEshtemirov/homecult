import React from "react";

import "./contact.scss";

const Contact = () => (
  <div className="contact-page">
    <div className="contact-body">
      <div>
        <h2>CONTACT</h2>
        <div className="email-us">
          <p>WRITE TO US</p>
          <p>
            <a href="mailto:info@homecult.com.ua">info@homecult.com.ua</a>
          </p>
        </div>
        <div className="call-us">
          <p>CALL US</p>
          <p>
            <a href="tel:+38 (067) 410 98 88">+38 (067) 410 98 88</a> <br />
            <br />
            <a href="tel:+38 (067) 462 35 60">+38 (067) 462 35 60</a>
          </p>
        </div>
      </div>
      <div></div>
      <div>
        <div className="work-days">
          <p>WORKING HOURS</p>
          <span>
            MON-FRI: <br />
            9:00 to 19:00
          </span>
        </div>
        <div className="social-network">
          <p>SOCIAL NETWORKS</p>
          <a href="#">Facebook</a>
          <br />
          <br />
          <a href="#">Instagram</a>
        </div>
      </div>
    </div>
    <div className="contact-footer">
      <div className="footer-container">
        <p>&copy; 2019. All rights reserved.</p>
        <p>Made by Khushnud Eshtemirov</p>
      </div>
    </div>
  </div>
);

export default Contact;
