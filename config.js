 import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDt_n0QksQ8U_6d9iW9oEtd2cYu4jkZEBo",
  authDomain: "school-attendence-app-5ba72.firebaseapp.com",
  projectId: "school-attendence-app-5ba72",
  storageBucket: "school-attendence-app-5ba72.appspot.com",
  messagingSenderId: "106950052719",
  appId: "1:106950052719:web:58e8d65482dc6b46acb69a"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default  firebase.database()

  