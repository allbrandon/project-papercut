/** @jsx jsx */

import React from "react";
import "./WelcomeComponent.scss";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import SocialsButtonComponent from "../SocialsButtonComponent/SocialsButtonComponent";
import { Link, navigate } from "@reach/router";
import { fontSize, colors } from "../../theme";
import firebase from "../../firebase";
import { css, jsx } from "@emotion/react";

export const WelcomeComponent = ({}: any) => {
  if (firebase.getCurrentUsername()) {
    // not logged in!
    navigate("/home");
    return null;
  }
  return (
    <div
      css={css`
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        background: #f8f9fa;
        min-height: 100vh;
        align-items: center;
        padding-top: 7vh;
      `}
    >
      <Link to="/welcome">
        <img src={process.env.PUBLIC_URL + "assets/papercut.svg"} alt=""></img>
      </Link>
      <h2
        css={css`
          font-weight: bold;
          font-size: ${fontSize.l};
          line-height: 36px;
          color: ${colors.headergrey};
        `}
      >
        Welcome to Papercut
      </h2>
      <h2
        css={css`
          font-size: ${fontSize.xs};
          line-height: 36px;
          color: ${colors.subheadergrey};
          margin: 1vh;
        `}
      >
        The home of your receipts
      </h2>
      <ButtonComponent buttonType="Sign In" size="large" />
      <ButtonComponent buttonType="Sign Up" size="large" />
      {/* <h3 className="or">OR</h3> */}
      {/* <SocialsButtonComponent /> */}
      {/* <SocialsButtonComponent socialType="Google" size="" />
      <SocialsButtonComponent socialType="Facebook" size="" />
      <SocialsButtonComponent socialType="Twitter" size="" /> */}
    </div>
  );
};

export default WelcomeComponent;
