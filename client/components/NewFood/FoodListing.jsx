import React from 'react';
import { Link } from 'react-router-dom';
import IngredientsList from './IngredientsList.jsx';

let FoodListing = (props) => {
    let food = props.food;
    return (
        <div id='ListingContainer'>
            <div id='ListingContainerView'>
                <Link id='ListingImageContainer' to='/Food' onClick={() => props.setFood(food)}>
                    <img id='ListingImage' src={food.image} />
                </Link>
                <div id='ListingDetailsContainer'>
                    <div id='ListingNameContainer'>
                        <Link to='/Food' onClick={() => props.setFood(food)}>
                            <div id='ListingNameText'>{food.name}</div>
                        </Link>
                    </div>
                    <div id='ListingIngredientsAndFavContainer'>
                        <div id='ListingFavContainer' onClick={() => { props.manageAPICalls.editFavorites(food, 'POST') }}>
                            <i className="fas fa-star"></i>
                        </div>
                        <Link id='ListingIngredientsList' to='/Food' onClick={() => props.setFood(food)}>
                            <IngredientsList ingredients={food.ingredients} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FoodListing;