import React, { useState } from 'react';

let LogIn = (props) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function logIn() {
        props.manageAPICalls.logIn({username: username, password: password})
    }

    function signUp() {
        props.manageAPICalls.signUp({username: username, password: password})
    }

    if (props.loggedIn === true) {
        return (
            <div></div>
        )
    } else {
        return (
            <div id='loginContainer'>
                <input id='loginUsername' placeholder='Username' onChange={(e)=>{setUsername(e.target.value)}} ></input>
                <input id='loginPassword' type='password' placeholder='Password' onChange={(e) => {setPassword(e.target.value)}} ></input>
                <button id='loginButton' onClick={logIn} >Login</button>
                <button id='signUpButton' onClick={signUp} >Sign Up</button>
            </div>
        )

    }

}

/*
<LogIn
        whatIsSelected={props.whatIsSelected}
        signUpUsername={props.signUpUsername}
        signUpPassword={props.signUpPassword}
        logInUsername={props.logInUsername}
        logInPassword={props.logInPassword}
        manageAPICalls={props.manageAPICalls}
        signUpSelected={props.signUpSelected}
        logInSelected={props.logInSelected}
        loggedIn={props.loggedIn}
        manageLogIn={props.manageLogIn}
      />
      */

export default LogIn;