/** @jsx jsx */
import React, { useState } from "react";
import { fontSize, spacing } from "../../theme";
import InputComponent from "../InputComponent/InputComponent";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import SocialsButtonComponent from "../SocialsButtonComponent/SocialsButtonComponent";
import { Link, navigate } from "@reach/router";
import firebase from "../../firebase";
import { css, jsx } from "@emotion/react";

const Or = css`
  font-size: ${fontSize.xxxs};
  color: #878e95;
  margin: 16px;
`;
export const SignInComponent = ({}: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
          font-size: ${fontSize.l};
          line-height: 36px;
          color: #4a5056;
        `}
      >
        Welcome to Papercut
      </h2>
      <h2
        css={css`
          font-size: ${fontSize.xs};
          line-height: 36px;
          color: #878e95;
          margin: 1vh;
        `}
      >
        The home of your receipts
      </h2>
      {/* <h3 css={Or}>OR</h3> */}
      {/* <SocialsButtonComponent socialType="Google" size="" />
      <SocialsButtonComponent socialType="Facebook" size="" />
      <SocialsButtonComponent socialType="Twitter" size="" /> */}
      {/* <SocialsButtonComponent /> */}
      <form onSubmit={(e: any) => e.preventDefault() && false}>
        <InputComponent
          value={email}
          fieldType="Email"
          size=""
          onChange={(e: any) => setEmail(e.target.value)}
        />
        <InputComponent
          value={password}
          fieldType="Password"
          size=""
          onChange={(e: any) => setPassword(e.target.value)}
        />
        <ButtonComponent
          buttonType="Sign In"
          size="large"
          onClick={login}
        ></ButtonComponent>
        {/* <Button
						type="submit"
						fullWidth
						variant="contained"
						onClick={login}>
						Sign in
        </Button> */}
      </form>
      {/* <SocialsButtonComponent socialType="Google" size="" /> */}
      <h3
        css={css`
          font-size: ${fontSize.xxxs};
          color: #878e95;
          margin-top: ${spacing.s};
        `}
      >
        Not with Papercut yet? <Link to="/signup">Sign Up!</Link>
      </h3>
    </div>
  );

  async function login() {
    try {
      await firebase.login(email, password);
      navigate("/home");
    } catch (error) {
      alert(error.message);
    }
  }
};

export default SignInComponent;
// export default withRouter(SignIn);
