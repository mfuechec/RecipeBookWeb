import React, { useState } from "react";

let LogIn = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstPress, setFirstPress] = useState(true);

  function openUp() {
    if (firstPress) {
      openLogin();
      setFirstPress(false);
    }
  }

  function logIn() {
    if (firstPress) {
      openLogin();
      setFirstPress(false);
    } else {
      props.manageAPICalls.logIn({ username: username, password: password });
    }
  }

  function signUp() {
    if (firstPress) {
      openLogin();
      setFirstPress(false);
    } else {
      props.manageAPICalls.signUp({ username: username, password: password });
    }
  }

  function openLogin() {
    let loginContainer = document.getElementById("loginContainer");
    let loginUsername = document.getElementById("loginUsername");
    let loginPassword = document.getElementById("loginPassword");
    loginContainer.id = "loginContainerExpanded";
    loginUsername.id = "loginUsernameExpanded";
    loginPassword.id = "loginPasswordExpanded";
  }

  if (props.loggedIn === true) {
    return <div></div>;
  } else {
    return (
      <div id="loginContainer" onClick={openUp}>
        <input
          id="loginUsername"
          placeholder="Username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        ></input>
        <input
          id="loginPassword"
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <button id="loginButton" onClick={logIn}>
          Login
        </button>
        <button id="signUpButton" onClick={signUp}>
          Sign Up
        </button>
      </div>
    );
  }
};

export default LogIn;
