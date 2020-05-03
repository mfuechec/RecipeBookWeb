import React from 'react';
import {Link} from 'react-router-dom';

let FoodListing = (props) => {
    let food = props.food;
    return (
        <div id='FoodListingContainer'>
            <Link to='/Food' onClick={() => props.setFood(food)}>
                {props.food.name}
            </Link>
        </div>
    )
}

export default FoodListing;