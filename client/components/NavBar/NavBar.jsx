import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(props) {
    return (
        <div id='NavBarContainer'>
            <div id='NavBarUpperBorder'></div>
            <div id='NavBarButtonContainer'>
                <Link id='NavBarHomeButton' to='/'>
                    Home
                </Link>
            </div>
            <div onClick={() => { props.findRandomRecipes() }} id='NavBarRandomButton'>
                <div id='NavBarText'>
                    New Recipes
                </div>
            </div>
            <div onClick={() => { props.openModal() }} id='NavBarSortList'>
                Sort
            </div>
        </div>
    )
};

export default NavBar;