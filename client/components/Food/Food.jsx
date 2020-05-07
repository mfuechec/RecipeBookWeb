import React from 'react';
import { Link } from 'react-router-dom';

const Food = (props) => {
    let food = props.food;
    let image = food.image;
    let ingredientList = [];
    for (let i = 0; i < 10; i++) {
        if (food.ingredients[i] !== "") {
            ingredientList.push(`${food.ingredients[i].charAt(0).toUpperCase() +
                food.ingredients[i].slice(1)} (${food.measurements[i]})`);
        } else {
            ingredientList.push(``);
        }
    }
    return (
        <div id='RecipeDetailsContainer'>
            <div id='RecipeDetailsNameText'>{food.name}</div>
            <div id='RecipeDetailsRecipeContainer'>
                <img id='RecipeDetailsImage' src={image} />
                <div id='RecipeDetailsIngredientsAndBackButton'>
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
                    <div id='RecipeDetailsInstructionsContainer'>
                        <div id='RecipeDetailsInstructionsText'>{food.instructions}</div>
                    </div>
                    <Link id='RecipeDetailsBackButtonLink' to='/NewFood'>
                        <div id='RecipeDetailsBackButtonText'>Back</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Food;