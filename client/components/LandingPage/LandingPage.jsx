import React from 'react';
import { Link } from 'react-router-dom';

let LandingPage = (props) => {
    return (
        <div id='LandingPageOptionsContainer'>
            <div id='LandingPageNewFoodLinkContainer'>
                <Link to='NewFood'>
                    <img id='LandingPageNewFoodOption' src={'https://recipe-book-images.s3.us-east-2.amazonaws.com/images/foodBackground.jpg'} />
                </Link>
            </div>
            <div id='LandingPageNewDrinksLinkContainer'>
                <Link to='NewDrinks'>
                    <img id='LandingPageNewDrinksOption' src={'https://recipe-book-images.s3.us-east-2.amazonaws.com/images/drinksBackground.jpg'} />
                </Link>
            </div>
        </div>
    )
};

export default LandingPage;