import React from "react";
import spinner from "../../img/spinner.gif";
const Spinner = () => {
  return (
    <img
      src={spinner}
      style={{ margin: "auto", display: "block", width: "200px" }}
      alt="spinner"
    />
  );
};

export default Spinner;
