import React from 'react';
import { Link } from 'react-router-dom';

let LandingPage = (props) => {
    return (
        <div id='LandingPageOptionsContainer'>
            <Link to='/NewFood'>
                <div id='LandingPageNewFoodOption' />
            </Link>
            <Link to='/NewDrinks'>
                <div id='LandingPageNewDrinksOption' />
            </Link>
        </div>
    )
};

export default LandingPage;