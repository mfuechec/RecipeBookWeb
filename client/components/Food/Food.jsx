import React from 'react';
import { Link } from 'react-router-dom';

const Food = (props) => {
    let food = props.food;
    let image = food.image;
    let ingredientList = [];
    for (let i = 0; i < 10; i++) {
        if (food.ingredients[i] !== "") {
            ingredientList.push(`${food.ingredients[i]} (${food.measurements[i]})`);
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
                <div id='RecipeDetailsNameText'>{food.name}</div>
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
                <div id='RecipeDetailsInstructionsText'>{food.instructions}</div>
                <Link to='/NewFood'>
                    <div id='RecipeDetailsBackButtonText'>Back</div>
                </Link>
            </div>
        </div>
    )
}

// const styles = StyleSheet.create({
//     container: {
//         height: '100%',
//         width: '100%',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center'
//     },
//     imageContainer: {
//         height: '30%',
//         width: '50%',
//         marginTop: '2.5%'
//     },
//     image: {
//         height: '100%',
//         borderRadius: 300
//     },
//     recipeContainer: {
//         width: '100%',
//         height: '100%',
//         alignItems: 'center',

//     },
//     recipeInfo: {
//         height: '15%',
//         width: '80%',
//         marginTop: '1%',
//         alignItems: 'center'
//     },
//     name: {
//         fontSize: 35,
//         marginTop: '25%',
//         color: 'white',
//         width: '50%',
//         textAlign: 'center'
//     },
//     ingredientsContainer: {
//         display: 'flex',
//         flexDirection: 'row',
//         marginTop: '2.5%'
//     },
//     ingredientsLeft: {
//         marginRight: '2.5%'
//     },
//     ingredientsRight: {
//     },
//     measurementsLeft: {
//         marginRight: '1%'
//     },
//     measurementsRight: {
//         marginRight: '1%',
//         marginLeft: '2.5%'
//     },
//     directionsButton: {
//         backgroundColor: '#eeeeee',
//         width: '25%',
//         height: '100%',
//         borderRadius: 30,
//         justifyContent: 'center',
//         borderColor: 'red',
//         borderWidth: 1,
//         marginLeft: '1%',
//         marginRight: '1%'
//     },
//     buttonText: {
//         textAlign: 'center'
//     },
//     buttonContainer: {
//         width: '80%',
//         alignItems: 'center',
//         height: '10%',
//         display: 'flex',
//         flexDirection: 'row-reverse',
//         justifyContent: 'center'
//     },
//     text: {
//         color: 'white',
//         fontSize: 20
//     }
// })

export default Food;