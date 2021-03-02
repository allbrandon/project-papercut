import app from "firebase/app";
import "firebase/firebase-firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAvdVZSemHb7rnZl-KWY6rW-IcLCnu5nIY",
  authDomain: "papercut-ee18f.firebaseapp.com",
  projectId: "papercut-ee18f",
  storageBucket: "papercut-ee18f.appspot.com",
  messagingSenderId: "609274425011",
  appId: "1:609274425011:web:1c680974bed6aa03fe4ac6",
  measurementId: "G-QJVRQT56QC"
};
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
    app.initializeApp(config);
    this.auth = app.auth();
    this.firestore = app.firestore();
  }

  login(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.auth.signOut();
  }

  async register(name, email, password) {
    await this.auth.createUserWithEmailAndPassword(email, password);
    return this.auth.currentUser.updateProfile({
      displayName: name
    });
  }

  isInitialized() {
    return new Promise(resolve => {
      this.auth.onAuthStateChanged(resolve);
    });
  }

  getCurrentUsername() {
    return this.auth.currentUser && this.auth.currentUser.displayName;
  }
}

export default new Firebase();
