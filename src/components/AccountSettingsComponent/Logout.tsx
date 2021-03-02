import React from "react";
import "./Logout.scss";
import IconComponent from "../IconComponent";
import firebase from "../../firebase";
import { navigate } from "@reach/router";

const Logout = () => {
  async function logout() {
    await firebase.logout();
    navigate("/");
  }
  return (
    <div className="settings">
      <button className="log-out-button" onClick={logout}>
        <span className="log-out-text">Log Out</span>
      </button>
    </div>
  );
};

export default Logout;
