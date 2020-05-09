import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(props) {
    return (
        <div id='NavBarContainer'>
            <Link id='NavBarHomeButton' onClick={() => { props.manageModal.closeModal() }} to='/' >
                <p id='NavBarText'>Home</p>
            </Link>
            <div id='NavBarNewRecipesButton' onClick={() => { props.findNewRecipes() }}>
                <p id='NavBarText'>New Recipes</p>
            </div>
            <div id='NavBarSwitchRecipesButton' onClick={() => { props.manageModal.switchToFavorites() }}>
                <p id='NavBarText'>Favorites</p>
            </div>
            {/* <div id='NavBarSortButton' onClick={() => { props.manageModal.openModal() }}>
                <p id='NavBarText'>Search</p>
            </div> */}
        </div>
    )
};

export default NavBar;