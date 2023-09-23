import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBJrN_5Pttp2MaWGYYw-t61wx_xfIXxzkw",
  authDomain: "kurosushi-66605.firebaseapp.com",
  projectId: "kurosushi-66605",
  storageBucket: "kurosushi-66605.appspot.com",
  messagingSenderId: "72570442297",
  appId: "1:72570442297:web:2980e3149173f832f773e8"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
