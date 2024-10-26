import React from "react";

const Toggle = ({ isDarkMode, toggleMode }) => {
  return (
    <button
      onClick={toggleMode}
      className={`btn ${isDarkMode ? "btn-light" : "btn-dark"}`}
    >
      {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
};

export default Toggle;
