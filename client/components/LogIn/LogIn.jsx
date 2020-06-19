import React, { useState } from 'react';

let LogIn = (props) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstPress, setFirstPress] = useState(true);

    function logIn() {
        if (window.innerHeight > window.innerWidth) {
            if (firstPress) {
                openLogin();
                setFirstPress(false);
            } else {
                props.manageAPICalls.logIn({username: username, password: password})
            }
        } else {
            props.manageAPICalls.logIn({username: username, password: password})
        }
    }

    function signUp() {
        if (window.innerHeight > window.innerWidth) {
            if (firstPress) {
                openLogin();
                setFirstPress(false);
            } else {
                props.manageAPICalls.signUp({username: username, password: password})
            }
        } else {
            props.manageAPICalls.signUp({username: username, password: password})
        }
    }

    function openLogin() {
        let loginContainer = document.getElementById('loginContainer')
        let loginUsername = document.getElementById('loginUsername')
        let loginPassword = document.getElementById('loginPassword')
        let loginClose = document.getElementById('loginClose');
        loginContainer.id = 'loginContainerExpanded';
        loginUsername.id = 'loginUsernameExpanded';
        loginPassword.id = 'loginPasswordExpanded';
        loginClose.id = 'loginCloseExpanded';
    }

    function closeLogin() {
        let loginContainer = document.getElementById('loginContainerExpanded')
        let loginUsername = document.getElementById('loginUsernameExpanded')
        let loginPassword = document.getElementById('loginPasswordExpanded')
        let loginClose = document.getElementById('loginCloseExpanded');
        loginContainer.id = 'loginContainer';
        loginUsername.id = 'loginUsername';
        loginPassword.id = 'loginPassword';
        loginClose.id = 'loginClose';
        setFirstPress(true);
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
                <div id='loginClose' onClick={closeLogin} >X</div>
            </div>
        )

    }

}

export default LogIn;