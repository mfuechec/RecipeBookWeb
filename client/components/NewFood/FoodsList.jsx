import React from 'react';
import FoodListing from './FoodListing.jsx';

let FoodsList = (props) => {
    let list = props.foods;
    return (
        list.map((food, i) => <FoodListing manageAPICalls={props.manageAPICalls} setFood={props.setFood} key={i} food={food} />)
    )
}

export default FoodsList;