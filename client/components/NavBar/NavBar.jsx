import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(props) {
    return (
        <div id='NavBarContainer'>
            <Link id='NavBarHomeButton' to='/' >
                <p style={{ color: 'white' }}>Home</p>
            </Link>
            <div id='NavBarNewRecipesButton' onClick={() => { props.findRandomRecipes() }}>
                <p style={{ color: 'white' }}>New Recipes</p>
            </div>
            <div id='NavBarSortButton' onClick={() => { props.openModal() }}>
                <p style={{ color: 'white' }}>Sort</p>
            </div>
        </div>
    )
};

export default NavBar;