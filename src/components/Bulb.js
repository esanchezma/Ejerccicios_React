import React, { useState } from "react";

const Bulb = ({ isBulbOn, toggleIsOn }) => {
  return (
    <div>
      <div
        className="bulb"
        style={{ background: isBulbOn ? "yellow" : "gray" }}
      ></div>
      <button onClick={toggleIsOn}>Off / On</button>
    </div>
  );
};

export default Bulb;