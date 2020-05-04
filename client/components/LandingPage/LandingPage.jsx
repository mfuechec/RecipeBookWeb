import React from 'react';
import { Link } from 'react-router-dom';

let LandingPage = (props) => {
    return (
        <div id='LandingPageOptionsContainer'>
            <Link id='LandingPageLinks' to='/NewFood'>
                <img src={'https://recipe-book-images.s3.us-east-2.amazonaws.com/images/foodBackground.jpg'} id='LandingPageNewFoodOption' />
            </Link>
            <Link id='LandingPageLinks' to='/NewDrinks'>
                <img src={'https://recipe-book-images.s3.us-east-2.amazonaws.com/images/drinksBackground.jpg'} id='LandingPageNewDrinksOption' />
            </Link>
        </div>
    )
};

export default LandingPage;