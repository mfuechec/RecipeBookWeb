import React from 'react';
import { Link } from 'react-router-dom';

let LandingPage = (props) => {
    return (
        <div>
            <Link to='/NewFood'>New Food</Link>
            <Link to='/NewDrinks'>New Drinks</Link>
        </div>
    )
};

export default LandingPage;