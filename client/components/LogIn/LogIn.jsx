import React from 'react';

let LogIn = (props) => {

    if (props.loggedIn === true) {
        return (
            <div></div>
        )
    } else if (props.logInSelected === true) {
        return (
            <div id='LogInModal'>
                <input id='LogInModalUserName' onChange={(e) => { props.manageLogIn.logInUsername(e) }} value={props.logInUsername} placeholder='Username' />
                <button id='LogInModalSubmitButton' onClick={() => { props.manageAPICalls.logIn() }}>Log In</button>
                <input id='LogInModalPassword' onChange={(e) => { props.manageLogIn.logInPassword(e) }} value={props.logInPassword} type='password' placeholder='Password' />
                <button id='LogInModalBackButton' onClick={() => { props.manageLogIn.closeLogInSelect() }}>Back</button>
            </div>
        )
    } else if (props.signUpSelected === true) {
        return (
            <div id='LogInModal'>
                <input id='LogInModalUserName' onChange={(e) => { props.manageLogIn.signUpUsername(e) }} value={props.signUpUsername} placeholder='Username' />
                <button id='LogInModalSubmitButton' onClick={() => { props.manageAPICalls.signUp() }}>Sign Up</button>
                <input id='LogInModalPassword' onChange={(e) => { props.manageLogIn.signUpPassword(e) }} value={props.signUpPassword} type='password' placeholder='Password' />
                <button id='LogInModalBackButton' onClick={() => { props.manageLogIn.closeSignUpSelect() }}>Back</button>
            </div>
        )
    } else {
        return (
            <div id='LogInModal' >
                <div id='LogInSelect' onClick={() => { props.manageLogIn.logInSelect() }}>Log In</div>
                <div id='SignUpSelect' onClick={() => { props.manageLogIn.signUpSelect() }}>Sign Up</div>
            </div >
        )

    }

}

export default LogIn;