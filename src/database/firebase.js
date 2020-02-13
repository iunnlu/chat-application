import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCcuCm2KC9dKAc8_YjfOgK-oP_TW7SHROI",
    authDomain: "chat-app-f73a1.firebaseapp.com",
    databaseURL: "https://chat-app-f73a1.firebaseio.com",
    projectId: "chat-app-f73a1",
    storageBucket: "chat-app-f73a1.appspot.com",
    messagingSenderId: "465072343274",
    appId: "1:465072343274:web:53d68da52f9eba3b892f93",
    measurementId: "G-EW760QELND"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
