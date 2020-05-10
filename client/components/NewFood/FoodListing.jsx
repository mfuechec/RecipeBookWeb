import React from 'react';
import { Link } from 'react-router-dom';
import IngredientsList from './IngredientsList.jsx';

let FoodListing = (props) => {
    let food = props.food;
    let color = '';
    if (props.favFoodNames.includes(food.name)) {
        color = 'lightgoldenrodyellow';
    } else {
        color = 'lightblue';
    }
    return (
        <div id='ListingContainer'>
            <Link id='ListingContainerView' to='/Food' onClick={() => props.setFood(food)}>
                <div id='ListingImageContainer'>
                    <img id='ListingImage' src={food.image} />
                </div>
                <div id='ListingDetailsContainer'>
                    <div id='ListingNameContainer'>
                        <div id='ListingNameText'>{food.name}</div>
                    </div>
                    <div id='ListingIngredientsAndFavContainer'>
                        <div id='ListingFavLinkContainer'>
                            <Link id='ListingFavContainer' style={{ color: color }} to='/NewFood' onClick={(e) => { props.manageAPICalls.editFavorites(food, 'POST'); e.stopPropagation() }}>
                                <i id='ListingFavStar' className="fas fa-star"></i>
                            </Link>
                        </div>
                        <div id='ListingIngredientsList'>
                            <IngredientsList ingredients={food.ingredients} />
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default FoodListing;