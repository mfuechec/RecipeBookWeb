import React from 'react';
import Ingredient from './Ingredient.jsx';

let IngredientsList = (props) => {
    var ingredients = [];
    for (var i = 0; i < 10; i++) {
        if (props.ingredients[i] !== null || props.ingredients[i] !== undefined) {
            ingredients.push(props.ingredients[i])
        }
    }
    return (
        ingredients.map((ingredient, i) => <Ingredient key={i} ingredient={ingredient} />)
    )
}

export default IngredientsList;