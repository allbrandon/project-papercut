import React from "react";
import "./SignUpComponent.scss";
import InputComponent from "../InputComponent/InputComponent";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import SocialsButtonComponent from "../SocialsButtonComponent/SocialsButtonComponent";
import { Link } from "react-router-dom";
export const SignUpComponent = ({}: any) => {
  return (
    <div className="wrapper">
      <Link to="/welcome">
        <img src={process.env.PUBLIC_URL + "assets/papercut.svg"} alt=""></img>
      </Link>{" "}
      <h2 className="greet__a">Welcome to Papercut</h2>
      <h2 className="greet__b">The home of your receipts</h2>
      <InputComponent fieldType="Name" size="" />
      <InputComponent fieldType="Email" size="" />
      <InputComponent fieldType="Password" size="" />
      <ButtonComponent buttonType="Sign Up" size="large" />
      <h3 className="or">OR</h3>
      <SocialsButtonComponent socialType="Google" size="" />
      <SocialsButtonComponent socialType="Facebook" size="" />
      <SocialsButtonComponent socialType="Twitter" size="" />
      {/* <SocialsButtonComponent /> */}
      <h3 className="or">
        Already have an account? <a href="/signin">Sign in!</a>
      </h3>
    </div>
  );
};

export default SignUpComponent;
