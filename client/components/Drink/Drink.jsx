import React from 'react';
import { Link } from 'react-router-dom';

const Drink = (props) => {
    let drink = props.drink;
    let image = drink.image;
    return (
        <div id='RecipeDetailsContainer'>
            <div id='RecipeDetailsImageContainer'>
                <img id='RecipeDetailsImage' src={image} />
            </div>
            <div id='RecipeDetailsRecipeInfo'>
                <div id='RecipeDetailsNameText'>{drink.name}</div>
                <div id='RecipeDetailsIngredientsContainer'>
                    <div id='RecipeDetailsMeasurementsLeft'>
                        <div id='RecipeDetailsMeasurementsText'>{drink.measurements[0]}</div>
                        <div id='RecipeDetailsMeasurementsText'>{drink.measurements[1]}</div>
                        <div id='RecipeDetailsMeasurementsText'>{drink.measurements[2]}</div>
                        <div id='RecipeDetailsMeasurementsText'>{drink.measurements[3]}</div>
                        <div id='RecipeDetailsMeasurementsText'>{drink.measurements[4]}</div>
                    </div>
                    <div id='RecipeDetailsIngredientsLeft'>
                        <div id='RecipeDetailsIngredientsText'>{drink.ingredients[0]}</div>
                        <div id='RecipeDetailsIngredientsText'>{drink.ingredients[1]}</div>
                        <div id='RecipeDetailsIngredientsText'>{drink.ingredients[2]}</div>
                        <div id='RecipeDetailsIngredientsText'>{drink.ingredients[3]}</div>
                        <div id='RecipeDetailsIngredientsText'>{drink.ingredients[4]}</div>
                    </div>
                </div>
            </div>
            <div id='RecipeDetailsInstructionsContainer'>
                <div id='RecipeDetailsInstructionsText'>{drink.instructions}</div>
                <Link to='/NewDrinks'>
                    <div id='RecipeDetailsBackButtonText'>Back</div>
                </Link>
            </div>
        </div>
    )
}

export default Drink;