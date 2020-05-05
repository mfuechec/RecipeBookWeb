import React from 'react';
import { Link } from 'react-router-dom';

const SortNav = (props) => {
    return (
        <div id='SortNavContainer'>
            <div id='SortNavHeader'></div>
            <div id='SortNavButtonContainer'>
                <div id='SortNavCloseButton' onClick={() => { props.manageModal.closeModal() }}>Close</div>
                <Link id='SortNavSearchFoodsButton' to='/NewFood' onClick={() => { props.manageModal.searchFoods() }}>Foods</Link>
                <Link id='SortNavSearchDrinksButton' to='/NewDrinks' onClick={() => { props.manageModal.searchDrinks() }}>Drinks</Link>
            </div>
        </div>
    )
}

export default SortNav;