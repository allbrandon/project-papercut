/** @jsx jsx */
import React from "react";
import { fontSize } from "../../theme";
import InputComponent from "../InputComponent/InputComponent";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import SocialsButtonComponent from "../SocialsButtonComponent/SocialsButtonComponent";
import { Link } from "react-router-dom";
import { css, jsx } from "@emotion/react";
const Or = css`
  font-size: 0.9rem;
  line-height: 36px;
  color: #878e95;
  margin: 1vh;
`;
export const SignInComponent = ({}: any) => {
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
          font-size: ${fontSize.xs};
          line-height: 36px;
          color: #4a5056;
        `}
      >
        Welcome to Papercut
      </h2>
      <h2
        css={css`
          font-size: 0.9rem;
          line-height: 36px;
          color: #878e95;
          margin: 1vh;
        `}
      >
        The home of your receipts
      </h2>
      <InputComponent fieldType="Email" size="" />
      <InputComponent fieldType="Password" size="" />
      <ButtonComponent buttonType="Sign In" size="large" />
      <h3 css={Or}>OR</h3>
      <SocialsButtonComponent socialType="Google" size="" />
      <SocialsButtonComponent socialType="Facebook" size="" />
      <SocialsButtonComponent socialType="Twitter" size="" />
      {/* <SocialsButtonComponent /> */}
      <h3 css={Or}>
        Not with Papercut yet? <a href="signup">Sign Up!</a>
      </h3>
    </div>
  );
};

export default SignInComponent;
