import React from "react";
import { Link, withRouter } from "react-router-dom";
import ProfileHeaderComponent from "../ProfileHeaderComponent/ProfileHeaderComponent";
import ProfileSettingsListComponent from "../ProfileSettingsListComponent/ProfileSettingsListComponent";
import { Button } from "@material-ui/core";
import firebase from "../../firebase";

function AccountProfile(props : any) {

  if(!firebase.getCurrentUsername()) {
		// not logged in!
		props.history.replace('/welcome')
		return null
  }
  
  return firebase.auth.currentUser?.emailVerified !== false ? (
    <div>
      <ProfileHeaderComponent />
      <ProfileSettingsListComponent />
      <Button
					type="submit"
					fullWidth
					variant="contained"
					color="secondary"
					onClick={logout}>
					Logout
      </Button>
      <h1>
					Hello { firebase.getCurrentUsername() }
			</h1>
    </div>
  ) : 
  <div>
    <ProfileHeaderComponent />
    <ProfileSettingsListComponent />
    <h1>
        Hello { firebase.getCurrentUsername() }
    </h1>
    <h2> 
        Please verify your email before continuing!
    </h2>
  </div>

  async function logout() {
		await firebase.logout()
		props.history.push('/welcome')
  }
  
};

export default withRouter(AccountProfile);