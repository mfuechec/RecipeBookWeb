import React from 'react';
import { Link } from 'react-router-dom';
import LogIn from '../LogIn/LogIn.jsx';

let LandingPage = (props) => {
    return (
        <div id='LandingPageOptionsContainer'>
            <Link tabIndex='1' id='LandingPageNewFoodLinkContainer' to='NewFood' onClick={() => { props.setWhatIsSelected('food'); props.manageLogIn.pageChange() }}>
                <img id='LandingPageNewFoodOption' src={'https://recipe-book-images.s3.us-east-2.amazonaws.com/images/foodBackground.jpg'} />
                <div id='LandingPageFoodText'>Food</div>
            </Link>
            <Link tabIndex='2' id='LandingPageNewDrinksLinkContainer' to='NewDrinks' onClick={() => { props.setWhatIsSelected('drinks'); props.manageLogIn.pageChange() }}>
                <img id='LandingPageNewDrinksOption' src={'https://recipe-book-images.s3.us-east-2.amazonaws.com/images/drinksBackground.jpg'} />
                <div id='LandingPageDrinkText'>Cocktails</div>
            </Link>
            <LogIn whatIsSelected={props.whatIsSelected} signUpUsername={props.signUpUsername} signUpPassword={props.signUpPassword} logInUsername={props.logInUsername} logInPassword={props.logInPassword} manageAPICalls={props.manageAPICalls} signUpSelected={props.signUpSelected} logInSelected={props.logInSelected} loggedIn={props.loggedIn} manageLogIn={props.manageLogIn} />
        </div>
    )
};

export default LandingPage;