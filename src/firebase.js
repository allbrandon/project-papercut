import app from "firebase/app";
import 'firebase/firebase-firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA4WGlbHadT4q38siBQcPnf5vsvdDX94x0",
    authDomain: "project-papercut.firebaseapp.com",
    databaseURL: "https://project-papercut.firebaseio.com",
    projectId: "project-papercut",
    storageBucket: "project-papercut.appspot.com",
    messagingSenderId: "411208169286",
    appId: "1:411208169286:web:ced21649c77aca6f9b5747",
    measurementId: "G-BQC7VN4L2H"
}
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// //   firebase.analytics(); 
// export const firestore = firebase.firestore();
// export const auth = firebase.auth();
// export const provider = new firebase.auth.GoogleAuthProvider();
// export const signInWithGoogle = () => auth.signInWithPopup(provider);

// export const login = (email, password) => auth.signInWithEmailAndPassword(email, password);
// export const signOut = () => auth.signOut();
  
// // Remove this later Start:
// window.firebase = firebase;
// End

class Firebase {
	constructor() {
    app.initializeApp(config)
		this.auth = app.auth()
		this.firestore = app.firestore()
	}

	login(email, password) {
		return this.auth.signInWithEmailAndPassword(email, password)
	}

	logout() {
		return this.auth.signOut()
  	}
  
  	async register(name, email, password) {
		await this.auth.createUserWithEmailAndPassword(email, password)
		return this.auth.currentUser.updateProfile({
			displayName: name
		})
	}	

	isInitialized() {
		return new Promise(resolve => {
			this.auth.onAuthStateChanged(resolve)
		})
	}

	getCurrentUsername() {
		return this.auth.currentUser && this.auth.currentUser.displayName
	}


}

export default new Firebase()


