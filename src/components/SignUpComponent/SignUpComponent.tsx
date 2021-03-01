/** @jsx jsx */

import React from "react";
import InputComponent from "../InputComponent/InputComponent";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import SocialsButtonComponent from "../SocialsButtonComponent/SocialsButtonComponent";
import { Link } from "@reach/router";

import { fontSize } from "../../theme";
import { css, jsx } from "@emotion/react";
const Or = css`
  font-size: 0.9rem;
  line-height: 17px;
  text-align: center;
  color: #878e95;
`;
export const SignUpComponent = ({}: any) => {
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
      </Link>{" "}
      <h2
        css={css`
          font-weight: bold;
          font-size: ${fontSize.xxxxl};
          line-height: 36px;
          color: #4a5056;
        `}
      >
        Welcome to Papercut
      </h2>
      <h2
        css={css`
          font-size: ${fontSize.xxxxl};
          line-height: 36px;
          color: #878e95;
          margin: 1vh;
        `}
      >
        The home of your receipts
      </h2>
      <InputComponent fieldType="Name" size="" />
      <InputComponent fieldType="Email" size="" />
      <InputComponent fieldType="Password" size="" />
      <ButtonComponent buttonType="Sign Up" size="large" />
      <h3 css={Or}>OR</h3>
      <SocialsButtonComponent socialType="Google" size="" />
      <SocialsButtonComponent socialType="Facebook" size="" />
      <SocialsButtonComponent socialType="Twitter" size="" />
      {/* <SocialsButtonComponent /> */}
      <h3 css={Or}>
        Already have an account? <a href="/signin">Sign in!</a>
      </h3>
    </div>
  );
};

export default SignUpComponent;
