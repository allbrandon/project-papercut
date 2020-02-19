// include account settings, support and log out button
import React from "react";
import "./Settings.scss";
import IconComponent from "../IconComponent";

const Settings = () => {
  const small_gap = {
    height: "1.6rem"
  };

  const large_gap = {
    height: "2.4rem"
  };

  const huge_gap = {
    height: "4.0rem"
  };

  return (
    <div className="settings">
      <div style={small_gap} />
      <div className="single-line">
        <IconComponent type="settings" size="" shade={true} text="" />
      </div>
      <div className="single-line-text">ACCOUNT SETTINGS</div>

      <div className="general-options">
        <button className="option-buttons">
          <span className="options">Change email</span>
          <i className="arrow right"></i>
        </button>

        <div style={large_gap} />

        <button className="option-buttons">
          <span className="options">Change password</span>
          <i className="arrow right"></i>
        </button>
      </div>

      <div style={large_gap} />

      <div style={huge_gap} />

      <div className="single-line">
        <IconComponent type="help" size="" shade={true} text="" />
      </div>
      <div className="single-line-text">SUPPORT</div>

      <div className="general-options">
        <button className="option-buttons">
          <span className="options">Contact us</span>
          <i className="arrow right"></i>
        </button>

        <div style={large_gap} />

        <button className="option-buttons">
          <span className="options">Feedback</span>
          <i className="arrow right"></i>
        </button>

        <div style={large_gap} />

        <button className="option-buttons">
          <span className="options">Privacy policy</span>
          <i className="arrow right"></i>
        </button>
      </div>
    </div>
  );
};

export default Settings;
