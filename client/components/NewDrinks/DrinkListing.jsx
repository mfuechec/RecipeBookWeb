import React from 'react';
import { Link } from 'react-router-dom';
import IngredientsList from './IngredientsList.jsx';

let DrinkListing = (props) => {
    let drink = props.drink;
    let color = '';
    let onClick;
    if (props.favDrinkNames.includes(drink.name)) {
        color = 'lightgoldenrodyellow';
        onClick = props.manageAPICalls.editFavorites(drink, 'DELETE');
    } else {
        color = 'lightblue';
        onClick = props.manageAPICalls.editFavorites(drink, 'POST');
    }
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
                        <div id='ListingFavLinkContainer'>
                            <Link id='ListingFavContainer' style={{ color: color }} to='/NewDrinks' onClick={() => { () => { onClick, e.stopPropagation() } }}>
                                <i id='ListingFavStar' className="fas fa-star"></i>
                            </Link>
                        </div>
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