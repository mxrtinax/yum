import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAZh6OlC1oWMQuXGj0YkI5peJpXT-swXQ8",
    authDomain: "yum-app-e822f.firebaseapp.com",
    projectId: "yum-app-e822f",
    storageBucket: "yum-app-e822f.appspot.com",
    messagingSenderId: "395329643002",
    appId: "1:395329643002:web:02be3e8904af91872f8443",
    measurementId: "G-DDKR28FG02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);