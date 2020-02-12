import React from "react";
import "./Logout.scss";
import IconComponent from "../IconComponent";

const Logout = () => {
  return (
    <div>
      <button className="log-out-button">
        <div className="single-line">
          <div className="log-out-1">
            <IconComponent type="logout_1" size="" shade={false} text="" />
          </div>
        </div>
        <div className="single-line">
          <div className="log-out-2">
            <IconComponent type="logout_2" size="" shade={false} text="" />
          </div>
        </div>
        <span className="log-out-text">Log Out</span>
      </button>
    </div>
  );
};

export default Logout;
