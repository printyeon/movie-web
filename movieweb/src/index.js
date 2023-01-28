import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
//import PropTypes from "prop-types";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
/*
//타입 안맞으면 오류나게 설정
Movie.PropTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

*/
