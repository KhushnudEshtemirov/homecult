import React, { useState } from "react";
import { Link } from "react-router-dom";

import RequestModal from "../request-modal/RequestModal";

import "./top-menu.scss";
import { BsInstagram, BsFacebook } from "react-icons/bs";

const TopMenu = () => {
  const [lanEng, setEng] = useState(true);
  const [lanRus, setRus] = useState(false);
  const [lanAu, setAu] = useState(false);
  const [addChange, setChange] = useState(false);
  const [addColor, setColor] = useState(false);
  const [showRequest, setShowRequest] = useState(false);

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

  const toggleRequest = () => {
    setShowRequest(!showRequest);
  };

  // const hideRequestFunc = () => {
  //   setShowRequest(!showRequest);
  // };

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
              <p onClick={toggleRequest}>DROP REQUEST</p>
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
      <RequestModal toggleRequest={toggleRequest} showRequest={showRequest} />
    </div>
  );
};

export default TopMenu;
