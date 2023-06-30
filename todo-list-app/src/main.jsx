import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCKerT4J9TQsIbNuMGfZE1xJjvpW2MXmEE",
  authDomain: "todo-f7f23.firebaseapp.com",
  projectId: "todo-f7f23",
  storageBucket: "todo-f7f23.appspot.com",
  messagingSenderId: "434465287912",
  appId: "1:434465287912:web:5d458eeec49f663da3a35d",
  measurementId: "G-HK19HBT7K6"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className="main">
    <App />
  </div>
)
