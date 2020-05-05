import React from 'react';
import { Link } from 'react-router-dom';

let LandingPage = (props) => {
    return (
        <div id='LandingPageOptionsContainer'>
            <Link id='LandingPageNewFoodLinkContainer' to='NewFood' onClick={() => props.setWhatIsSelected('food')}>
                <img id='LandingPageNewFoodOption' src={'https://recipe-book-images.s3.us-east-2.amazonaws.com/images/foodBackground.jpg'} />
                <div id='LandingPageFoodText'>Food</div>
            </Link>
            <Link id='LandingPageNewDrinksLinkContainer' to='NewDrinks' onClick={() => props.setWhatIsSelected('drinks')}>
                <img id='LandingPageNewDrinksOption' src={'https://recipe-book-images.s3.us-east-2.amazonaws.com/images/drinksBackground.jpg'} />
                <div id='LandingPageDrinkText'>Cocktails</div>
            </Link>
        </div>
    )
};

export default LandingPage;