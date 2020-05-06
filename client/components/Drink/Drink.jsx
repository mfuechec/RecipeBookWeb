import React from 'react';
import { Link } from 'react-router-dom';

const Drink = (props) => {
    let drink = props.drink;
    let image = drink.image;
    let ingredientList = [];
    for (let i = 0; i < 10; i++) {
        if (drink.ingredients[i] !== "" && drink.ingredients[i] !== null) {
            if (drink.measurements[i] !== null) {
                ingredientList.push(`${drink.ingredients[i].charAt(0).toUpperCase() +
                    drink.ingredients[i].slice(1)} (${drink.measurements[i]})`);
            } else {
                ingredientList.push(`${drink.ingredients[i].charAt(0).toUpperCase() +
                    drink.ingredients[i].slice(1)}`)
            }
        } else {
            ingredientList.push(``);
        }
    }
    return (
        <div id='RecipeDetailsContainer'>
            <div id='RecipeDetailsImageContainer'>
                <img id='RecipeDetailsImage' src={image} />
            </div>
            <div id='RecipeDetailsRecipeInfo'>
                <div id='RecipeDetailsNameText'>{drink.name}</div>
                <div id='RecipeDetailsIngredientsContainer'>
                    <div id='RecipeDetailsLeft'>
                        <div id='RecipeDetailsText'>{ingredientList[0]}</div>
                        <div id='RecipeDetailsText'>{ingredientList[1]}</div>
                        <div id='RecipeDetailsText'>{ingredientList[2]}</div>
                        <div id='RecipeDetailsText'>{ingredientList[3]}</div>
                        <div id='RecipeDetailsText'>{ingredientList[4]}</div>
                    </div>
                    <div id='RecipeDetailsRight'>
                        <div id='RecipeDetailsText'>{ingredientList[5]}</div>
                        <div id='RecipeDetailsText'>{ingredientList[6]}</div>
                        <div id='RecipeDetailsText'>{ingredientList[7]}</div>
                        <div id='RecipeDetailsText'>{ingredientList[8]}</div>
                        <div id='RecipeDetailsText'>{ingredientList[9]}</div>
                    </div>
                </div>
            </div>
            <div id='RecipeDetailsInstructionsContainer'>
                <div id='RecipeDetailsInstructionsText'>{drink.instructions}</div>
                <Link id='RecipeDetailsBackButtonLink' to='/NewDrinks'>
                    <div id='RecipeDetailsBackButtonText'>Back</div>
                </Link>
            </div>
        </div>
    )
}

export default Drink;