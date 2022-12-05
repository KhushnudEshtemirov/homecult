import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./top-menu.scss";
import { BsInstagram, BsFacebook } from "react-icons/bs";
import { TfiClose } from "react-icons/tfi";

const TopMenu = () => {
  const [lanEng, setEng] = useState(true);
  const [lanRus, setRus] = useState(false);
  const [lanAu, setAu] = useState(false);

  const changeEng = () => {
    setEng(true);
    setRus(false);
    setAu(false);
  };
  const changeRus = () => {
    setRus(true);
    setEng(false);
    setAu(false);
  };
  const changeAu = () => {
    setAu(true);
    setEng(false);
    setRus(false);
  };

  const [addChange, setChange] = useState(false);
  const [addColor, setColor] = useState(false);

  const showMenu = () => {
    setChange(!addChange);
  };

  const showMenuOther = () => {
    setChange(!addChange);
    setColor(false);
  };

  const showMenuPro = () => {
    setChange(!addChange);
    setColor(true);
  };

  const [showRequest, setShowRequest] = useState(false);

  const showRequestFunc = () => {
    setShowRequest(!showRequest);
  };

  const hideRequestFunc = () => {
    setShowRequest(!showRequest);
  };

  return (
    <div className="top-menu">
      <div className={`navbar ${addChange || addColor ? "color" : ""}`}>
        <div className="left-menu">
          <ul>
            <li onClick={showMenu}>
              <div className="lines">
                <div className={`line ${addChange ? "change" : ""}`}></div>
                <div className={`line ${addChange ? "change" : ""}`}></div>
              </div>
              <p>{addChange ? "CLOSE" : "MENU"}</p>
            </li>
            <li>
              <BsInstagram />
            </li>
            <li>
              <BsFacebook />
            </li>
          </ul>
        </div>
        <div className="middle-menu">
          <p>HOMECULT.</p>
        </div>
        <div className="right-menu">
          <ul>
            <li>
              <div className="lan">
                <div
                  className={`en ${lanEng ? "active" : ""}`}
                  onClick={changeEng}
                >
                  EN
                </div>
                <div
                  className={`rus ${lanRus ? "active" : ""}`}
                  onClick={changeRus}
                >
                  RU
                </div>
                <div
                  className={`au ${lanAu ? "active" : ""}`}
                  onClick={changeAu}
                >
                  AU
                </div>
              </div>
            </li>
            <li>
              <p onClick={showRequestFunc}>DROP REQUEST</p>
            </li>
          </ul>
        </div>
      </div>
      <div className={`modal-menu ${addChange ? "show" : ""}`}>
        <div className="modal-container">
          <div className="home">
            <Link to="/" onClick={showMenuOther}>
              HOME
            </Link>
            <a href="tel:+998975777728">T: +998 97 577 77 28</a>
          </div>
          <div className="projects">
            <Link to="/projects" onClick={showMenuPro}>
              PROJECTS
            </Link>
          </div>
          <div className="/about">
            <Link to="about" onClick={showMenuPro}>
              ABOUT
            </Link>
          </div>
          <div className="contact">
            <Link to="/contact" onClick={showMenuOther}>
              CONTACT
            </Link>
            <a href="mailto:xushnud122997@gmail.com">xushnud122997@gmail.com</a>
          </div>
        </div>
        <div className="modal-circle"></div>
      </div>
      <div className={`request-modal ${showRequest ? "show" : ""}`}>
        <TfiClose onClick={hideRequestFunc} />
        <h2>MAKE REQUEST</h2>
        <form>
          <input type="text" name="name" id="name" placeholder="Name" />
          <br />
          <input type="text" name="phone" id="phone" placeholder="Phone" />
          <br />
          <input type="email" name="email" id="email" placeholder="E-mail" />
          <br />
          <textarea
            name="comment"
            id="comment"
            cols="30"
            rows="2"
            placeholder="Your comment"
          ></textarea>
          <br />
          <button>SEND</button>
        </form>
      </div>
    </div>
  );
};

export default TopMenu;
