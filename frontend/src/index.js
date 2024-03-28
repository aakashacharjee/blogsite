import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBgNDljirv-_uKKcrfO2Xk4NDiW-GEwDO8",
  authDomain: "my-react-blog-be30f.firebaseapp.com",
  projectId: "my-react-blog-be30f",
  storageBucket: "my-react-blog-be30f.appspot.com",
  messagingSenderId: "518419870481",
  appId: "1:518419870481:web:62cb39fa13f557211492b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

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
