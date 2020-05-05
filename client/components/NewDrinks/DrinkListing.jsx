import React from 'react';
import { Link } from 'react-router-dom';
import IngredientsList from './IngredientsList.jsx';

let DrinkListing = (props) => {
    let drink = props.drink;
    return (
        <div id='ListingContainer'>
            <div id='ListingContainerView'>
                <Link id='ListingImageContainer' to='/Drink' onClick={() => props.setDrink(drink)}>
                    <img id='ListingImage' src={drink.image} />
                </Link>
                <div id='ListingDetailsContainer'>
                    <Link id='ListingNameContainer' to='/Drink' onClick={() => props.setDrink(drink)}>
                        <div id='ListingNameText'>{drink.name}</div>
                    </Link>
                    <div id='ListingIngredientsAndFavContainer'>
                        <Link id='ListingIngredientsList' to='/Drink' onClick={() => props.setDrink(drink)}>
                            <IngredientsList ingredients={drink.ingredients} />
                        </Link>
                        <div id='ListingFavContainer' onClick={() => { props.manageAPICalls.editFavorites(drink, 'POST') }}>
                            <i class="fas fa-star"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DrinkListing;