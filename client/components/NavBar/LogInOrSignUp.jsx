import React from 'react';

function LogInOrSignUp(props) {
    return (
        <div>
            <div tabIndex='-1' id='LogInModalSelectorHidden'>
                <div tabIndex='-1' id='LogInSelect' onClick={() => { props.manageLogIn.logInSelect() }}>Log In</div>
                <div tabIndex='-1' id='SignUpSelect' onClick={() => { props.manageLogIn.signUpSelect() }}>Sign Up</div>
            </div >
            {/* <div tabIndex='-1' className='signUpModal'>
                <input tabIndex='-1' id='SignUpModalUserName' onChange={(e) => { props.manageLogIn.signUpUsername(e) }} value={props.signUpUsername} placeholder='Username' />
                <button tabIndex='-1' id='SignUpModalSubmitButton' onClick={() => { props.manageAPICalls.signUp() }}>Sign Up</button>
                <input tabIndex='-1' id='SignUpModalPassword' onChange={(e) => { props.manageLogIn.signUpPassword(e) }} value={props.signUpPassword} type='password' placeholder='Password' />
                <button tabIndex='-1' id='SignUpModalBackButton' onClick={() => { props.manageLogIn.closeSignUpSelect() }}>Back</button>
            </div>
            <div tabIndex='-1' className='logInModal'>
                <input tabIndex='-1' id='LogInModalUserName' onChange={(e) => { props.manageLogIn.logInUsername(e) }} value={props.logInUsername} placeholder='Username' />
                <button tabIndex='-1' id='LogInModalSubmitButton' onClick={() => { props.manageAPICalls.logIn() }}>Log In</button>
                <input tabIndex='-1' id='LogInModalPassword' onChange={(e) => { props.manageLogIn.logInPassword(e) }} value={props.logInPassword} type='password' placeholder='Password' />
                <button tabIndex='-1' id='LogInModalBackButton' onClick={() => { props.manageLogIn.closeLogInSelect() }}>Back</button>
            </div> */}
        </div>
    )
}

export default LogInOrSignUp;