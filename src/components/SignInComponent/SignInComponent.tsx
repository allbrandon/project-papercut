import React from "react";
import "./SignInComponent.scss";
import InputComponent from "../InputComponent/InputComponent";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import SocialsButtonComponent from "../SocialsButtonComponent/SocialsButtonComponent";
import { Link } from "react-router-dom";

export const SignInComponent = ({}: any) => {
  return (
    <div className="wrapper">
      <Link to="/welcome">
        <img src={process.env.PUBLIC_URL + "assets/papercut.svg"} alt=""></img>
      </Link>{" "}
      <h2 className="greet__a">Welcome to Papercut</h2>
      <h2 className="greet__b">The home of your receipts</h2>
      <InputComponent fieldType="Email" size="" />
      <InputComponent fieldType="Password" size="" />
      <ButtonComponent buttonType="Sign In" size="large" />
      <h3 className="or">OR</h3>
      <SocialsButtonComponent socialType="Google" size="" />
      <SocialsButtonComponent socialType="Facebook" size="" />
      <SocialsButtonComponent socialType="Twitter" size="" />
      {/* <SocialsButtonComponent /> */}
      <h3 className="or">
        Not with Papercut yet? <a href="signup">Sign Up!</a>
      </h3>
    </div>
  );
};

export default SignInComponent;
