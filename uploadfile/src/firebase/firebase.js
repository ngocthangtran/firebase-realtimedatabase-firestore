import firebase from 'firebase/app'
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyCylXcB_gWmWG7segUUasaqNu4pYRbpZw8",
    authDomain: "test-fa7d0.firebaseapp.com",
    projectId: "test-fa7d0",
    storageBucket: "test-fa7d0.appspot.com",
    messagingSenderId: "351398061682",
    appId: "1:351398061682:web:53c8414d93d6631d4404eb",
    measurementId: "G-7LPHEVZKSR"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage()
// firebase.analytics();

export {
    storage, firebase as default
}
