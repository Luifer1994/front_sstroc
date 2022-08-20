import firebase from "firebase/compat/app";
import "firebase/compat/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAyeZJoGnXcOp8rW-S-8AV3B25SqDa_33o",
    authDomain: "sstroc-55097.firebaseapp.com",
    projectId: "sstroc-55097",
    storageBucket: "sstroc-55097.appspot.com",
    messagingSenderId: "997409419606",
    appId: "1:997409419606:web:07e2b03fe4ac893e4ce6f7",
    measurementId: "G-G6KB4NBDTP"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const defaultStorage = firebase.storage();

export const UploadFile = (file) => {
  return new Promise((resolve) => {
    let customRef = defaultStorage.ref("responses-files");
    let task = customRef.child(file.name).put(file);
    task.on(
      "state_changed",
      function() {
        //console.log(snapshot);
      },
      function(error) {
          console.log(error);
        //noty(error.message, "error");
      },
      function() {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        task.snapshot.ref.getDownloadURL().then(function(downloadURL) {
          resolve(downloadURL);
          //console.log('File available at', downloadURL);
        });
      }
    );
  });
};