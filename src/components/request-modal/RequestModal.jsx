import React from "react";

import { TfiClose } from "react-icons/tfi";

const RequestModal = ({ toggleRequest, showRequest }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={`request-modal ${showRequest ? "show" : ""}`}>
      <TfiClose onClick={toggleRequest} />
      <h2>MAKE REQUEST</h2>
      <form onSubmit={handleSubmit}>
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
        <button onClick={toggleRequest}>SEND</button>
      </form>
    </div>
  );
};

export default RequestModal;
