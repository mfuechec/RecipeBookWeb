import React from 'react';
import { Link } from 'react-router-dom';

const Drink = (props) => {
    let drink = props.drink;
    let image = drink.image;
    return (
        <div id='DrinkContainer'>
            <div id='DrinkImageContainer'>
                <img id='DrinkImage' src={image} />
            </div>
            <div id='DrinkRecipeInfo'>
                <div id='DrinkNameText'>{drink.name}</div>
                <div id='DrinkIngredientsContainer'>
                    <div id='DrinkMeasurementsLeft'>
                        <div id='DrinkMeasurementsText'>{drink.measurements[0]}</div>
                        <div id='DrinkMeasurementsText'>{drink.measurements[1]}</div>
                        <div id='DrinkMeasurementsText'>{drink.measurements[2]}</div>
                        <div id='DrinkMeasurementsText'>{drink.measurements[3]}</div>
                        <div id='DrinkMeasurementsText'>{drink.measurements[4]}</div>
                    </div>
                    <div id='DrinkIngredientsLeft'>
                        <div id='DrinkIngredientsText'>{drink.ingredients[0]}</div>
                        <div id='DrinkIngredientsText'>{drink.ingredients[1]}</div>
                        <div id='DrinkIngredientsText'>{drink.ingredients[2]}</div>
                        <div id='DrinkIngredientsText'>{drink.ingredients[3]}</div>
                        <div id='DrinkIngredientsText'>{drink.ingredients[4]}</div>
                    </div>
                </div>
            </div>
            <div id='DrinkInstructionsContainer'>
                <div id='DrinkInstructionsText'>{drink.instructions}</div>
                <Link to='/NewDrinks'>
                    <div id='DrinkBackButtonText'>Back</div>
                </Link>
            </div>
        </div>
    )
}

export default Drink;