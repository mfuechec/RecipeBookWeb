import React from 'react';
import { Link } from 'react-router-dom';

let LandingPage = (props) => {
    return (
        <div id='LandingPageOptionsContainer'>
            <Link to='/NewFood'>
                <img src={'https://i.pinimg.com/originals/ec/c7/a4/ecc7a4f021aab13bf5197543d291adf7.jpg'} id='LandingPageNewFoodOption' />
            </Link>
            <Link to='/NewDrinks'>
                <img src={'https://cache.desktopnexus.com/thumbseg/2381/2381921-bigthumbnail.jpg'} id='LandingPageNewDrinksOption' />
            </Link>
        </div>
    )
};

export default LandingPage;