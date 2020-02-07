import React, {useState} from "react";
import "./SignInComponent.scss";
import InputComponent from "../InputComponent/InputComponent";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import SocialsButtonComponent from "../SocialsButtonComponent/SocialsButtonComponent";
import { Button } from '@material-ui/core'
import { Link, withRouter } from "react-router-dom";
import firebase from "../../firebase";

function SignIn(props : any) {
  const { classes } = props

	const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  return (
    <div className="wrapper">
      <Link to="/welcome">
        <img src={process.env.PUBLIC_URL + "assets/papercut.svg"} alt=""></img>
      </Link>{" "}
      <h2 className="greet__a">Welcome to Papercut</h2>
      <h2 className="greet__b">The home of your receipts</h2>
      <form onSubmit={(e : any) => e.preventDefault() && false}>
        <InputComponent value={email} fieldType="Email" size="" onChange={(e : any) => setEmail(e.target.value)}/>
        <InputComponent value={password} fieldType="Password" size="" onChange={(e :any) => setPassword(e.target.value)} />
        <ButtonComponent buttonType="Sign In" size="large" />
        <Button
						type="submit"
						fullWidth
						variant="contained"
						onClick={login}>
						Sign in
        </Button>
      </form>
      <h3 className="or">OR</h3>
      <SocialsButtonComponent socialType="Google" size="" />
      <SocialsButtonComponent socialType="Facebook" size="" />
      <SocialsButtonComponent socialType="Twitter" size="" />
    </div>
  );

  async function login() {
		try {
			await firebase.login(email, password)
			props.history.replace('/profile')
		} catch(error) {
			alert(error.message)
    }
  }
  
};

export default withRouter(SignIn);
