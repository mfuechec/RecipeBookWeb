import React from 'react';
import { Link } from 'react-router-dom';
import IngredientsList from './IngredientsList.jsx';

let DrinkListing = (props) => {
    let drink = props.drink;
    return (
        <div id='ListingContainer'>
            <Link id='ListingContainerView' to='/Drink' onClick={() => props.setDrink(drink)}>
                <div id='ListingImageContainer'>
                    <img id='ListingImage' src={drink.image} />
                </div>
                <div id='ListingDetailsContainer'>
                    <div id='ListingNameContainer'>
                        <div id='ListingNameText'>{drink.name}</div>
                    </div>
                    <div id='ListingIngredientsAndFavContainer'>
                        <Link id='ListingFavContainer' to='/NewDrinks' onClick={() => { props.manageAPICalls.editFavorites(drink, 'POST') }}>
                            <i id='ListingFavStar' className="fas fa-star"></i>
                        </Link>
                        <div id='ListingIngredientsList'>
                            <IngredientsList ingredients={drink.ingredients} />
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default DrinkListing;