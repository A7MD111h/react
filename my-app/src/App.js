
// import logo from './logo.svg';
import './App.css';
import Increment from './components/Greet';
import SignupForm from './components/signup';
import Calculator from './components/task2';

import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import DisplayData from "./components/DisplayData";

  function App() {
    const [userData, setUserData] = useState(null);

    const handleLoginSubmit = (data) => {
      setUserData(data);
    };
    return (
      <div className="App">
        <p>task1</p>
        <Increment/>
        <p>task2</p>
        <Calculator/>
        <p>task3</p>
        <SignupForm/>
        <p>task4</p>
        <h1>Login Form Example</h1>
      <LoginForm onSubmit={handleLoginSubmit} />
      {userData && <DisplayData userData={userData} />}

      </div>
      
    );
  }


  export default App;
