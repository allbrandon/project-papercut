/** @jsx jsx */

import React, { useState } from "react";
import InputComponent from "../InputComponent/InputComponent";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import SocialsButtonComponent from "../SocialsButtonComponent/SocialsButtonComponent";
import { Link, navigate } from "@reach/router";
import firebase from "../../firebase";

import { fontSize, colors, spacing } from "../../theme";
import { css, jsx } from "@emotion/react";
const Or = css`
  font-size: ${fontSize.xxxs};
  color: #878e95;
  margin: 16px;
`;
export const SignUpComponent = ({}: any) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
      </Link>{" "}
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
      <form onSubmit={(e: any) => e.preventDefault() && false}>
        <InputComponent
          value={name}
          fieldType="Name"
          size=""
          onChange={(e: any) => setName(e.target.value)}
        />
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
        <ButtonComponent buttonType="Sign Up" size="large" onClick={signUp} />
        {/* <Button
						type="submit"
						fullWidth
						variant="contained"
						onClick={signUp}>
						Sign Up
        </Button> */}
      </form>
      {/* <h3 css={Or}>OR</h3> */}
      {/* <SocialsButtonComponent socialType="Google" size="" />
      <SocialsButtonComponent socialType="Facebook" size="" />
      <SocialsButtonComponent socialType="Twitter" size="" /> */}
      {/* <SocialsButtonComponent /> */}
      <h3
        css={css`
          font-size: ${fontSize.xxxs};
          color: #878e95;
          margin-top: ${spacing.s};
        `}
      >
        Already have an account? <a href="/signin">Sign in!</a>
      </h3>
    </div>
  );

  async function signUp() {
    try {
      await firebase.register(name, email, password);
      if (firebase.auth.currentUser != null) {
        firebase.auth.currentUser.sendEmailVerification();
      }
      navigate("/home");
    } catch (error) {
      alert(error.message);
    }
  }
};
//   async function logout() {
// 		await firebase.logout()
// 		props.history.push('/welcome')
//   }
export default SignUpComponent;
// export default withRouter(SignUp);
