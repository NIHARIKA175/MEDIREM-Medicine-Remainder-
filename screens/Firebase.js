import * as firebase from 'firebase';
import 'firebase/firestore'

export const firebaseConfig = {
  apiKey: "AIzaSyA-wqHawpX2QfwFDkL58d57n9i6M6BB_-E",
  authDomain: "medirem-5931a.firebaseapp.com",
  databaseURL: "https://medirem-5931a-default-rtdb.firebaseio.com",
  projectId: "medirem-5931a",
  storageBucket: "medirem-5931a.appspot.com",
  messagingSenderId: "251646931282",
  appId: "1:251646931282:web:2a746cbf1b9729dfd4ca8b",
  measurementId: "G-8JD7T6WJD1"
};
// Initialize Firebase

setTimeout(() => {
  if (!firebase.apps.length) {
      try {
          firebase.initializeApp(firebaseConfig)
      } catch (err) {
          console.log(err)
      }
  }
  
}, 1000)

export default firebase;






