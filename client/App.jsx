import React, { useState, useEffect } from 'react';
import axios from 'axios';
import APIKeys from '../passwords';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import Drink from './components/Drink/Drink.jsx';
import DrinkDirections from './components/DrinkDirections/DrinkDirections.jsx';
import Food from './components/Food/Food.jsx';
import FoodDirections from './components/FoodDirections/FoodDirections.jsx';
import LandingPage from './components/LandingPage/LandingPage.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import NewDrinks from './components/NewDrinks/NewDrinks.jsx';
import NewFood from './components/NewFood/NewFood.jsx';
import Sort from './components/Sort/Sort.jsx';

const App = () => {

    // Instantiates empty state objects for food and drink recipes
    const [foods, setFoods] = useState([]);
    const [drinks, setDrinks] = useState([]);
    const [food, setFood] = useState({});
    const [drink, setDrink] = useState({});
    const [isModalVisible, setIsModalVisible] = useState([-1, 'none']);
    const [whatIsSelected, setWhatIsSelected] = useState('');

    // Call the function that will find 10 random recipes from both APIs
    // This function runs only once on component mount
    useEffect(() => {
        manageAPICalls.findRandomRecipes()
    }, [])

    // This object holds all API calls for the app.
    const manageAPICalls = {
        findRandomRecipes: () => {
            axios.get(APIKeys.food + 'randomselection.php')
                .then((response) => {
                    let first = response.data.meals;
                    axios.get(APIKeys.food + 'randomselection.php')
                        .then((response) => {
                            let second = response.data.meals;
                            let combined = first.concat(second);
                            sortAPIResponse.sortFoodRecipes(combined)
                        })
                        .catch((error) => {
                            console.log(error)
                        })
                })
                .catch((error) => {
                    console.log(error)
                })
            axios.get(APIKeys.drink + 'randomselection.php')
                .then((response) => {
                    let first = response.data.drinks;
                    axios.get(APIKeys.drink + 'randomselection.php')
                        .then((response) => {
                            let second = response.data.drinks;
                            let combined = first.concat(second);
                            sortAPIResponse.sortDrinkRecipes(combined);
                        })
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        searchByName: (searchText) => {
            if (whatIsSelected === 'food') {
                axios.get(APIKeys.food + 'search.php?s=' + searchText)
                    .then((response) => {
                        sortAPIResponse.sortFoodRecipes(response.data.meals);
                        manageModal.closeModal();
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            }
            if (whatIsSelected === 'drinks') {
                axios.get(APIKeys.drink + 'search.php?s=' + searchText)
                    .then((response) => {
                        sortAPIResponse.sortDrinkRecipes(response.data.drinks);
                        manageModal.closeModal();
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            }
        },
        searchWithFilter: (selection, filter) => {
            let filterURL = '';
            if (filter === 'ingredient') {
                filterURL = 'filter.php?i=';
            }
            if (filter === 'category') {
                filterURL = 'filter.php?c=';
            }
            if (filter === 'area') {
                filterURL = 'filter.php?a=';
            }

            if (whatIsSelected === 'food') {
                axios.get(APIKeys.food + filterURL + selection)
                    .then((response) => {
                        sortAPIResponse.sortFilteredFoodRecipes(response.data.meals);
                        manageModal.closeModal();
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            } else {
                axios.get(APIKeys.drink + filterURL + selection)
                    .then((response) => {
                        sortAPIResponse.sortFilteredDrinkRecipes(response.data.drinks);
                        manageModal.closeModal();
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            }
        },
        searchForLatest: () => {
            if (whatIsSelected === 'food') {
                axios.get(APIKeys.food + 'latest.php')
                    .then((response) => {
                        sortAPIResponse.sortFilteredFoodRecipes(response.data.meals);
                        manageModal.closeModal();
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            }
            if (whatIsSelected === 'drinks') {
                axios.get(APIKeys.drink + 'latest.php')
                    .then((response) => {
                        sortAPIResponse.sortFilteredDrinkRecipes(response.data.drinks);
                        manageModal.closeModal();
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            }
        },
        editFavorites: (data, method) => {
            let url = 'http://recipebookserver-env.eba-peu3pu5p.us-east-2.elasticbeanstalk.com/';
            if (whatIsSelected === 'food') {
                url += `editFavoriteMeals`;
            } else {
                url += `editFavoriteDrinks`;
            }

            return fetch(url, {
                method: method,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })
                .then(response => console.log(response.json()))
                .catch((error) => {
                    console.error(error);
                })
        }
    }

    // This object holds functions that format the data received from API calls.
    const sortAPIResponse = {
        sortFoodRecipes: (datum) => {
            var recipes = [];
            for (var i = 0; i < datum.length; i++) {
                var recipe = {
                    name: '',
                    type: '',
                    instructions: '',
                    image: '',
                    ingredients: [],
                    measurements: []
                };
                var data = datum[i]
                recipe.name = data.strMeal;
                recipe.type = data.strCategory;
                recipe.instructions = data.strInstructions;
                recipe.image = data.strMealThumb;
                recipe.ingredients = [
                    data.strIngredient1,
                    data.strIngredient2,
                    data.strIngredient3,
                    data.strIngredient4,
                    data.strIngredient5,
                    data.strIngredient6,
                    data.strIngredient7,
                    data.strIngredient8,
                    data.strIngredient9,
                    data.strIngredient10,
                    data.strIngredient11,
                    data.strIngredient12,
                    data.strIngredient13,
                    data.strIngredient14,
                    data.strIngredient15,
                    data.strIngredient16,
                    data.strIngredient17,
                    data.strIngredient18,
                    data.strIngredient19,
                    data.strIngredient20,
                ]
                recipe.measurements = [
                    data.strMeasure1,
                    data.strMeasure2,
                    data.strMeasure3,
                    data.strMeasure4,
                    data.strMeasure5,
                    data.strMeasure6,
                    data.strMeasure7,
                    data.strMeasure8,
                    data.strMeasure9,
                    data.strMeasure10,
                    data.strMeasure11,
                    data.strMeasure12,
                    data.strMeasure13,
                    data.strMeasure14,
                    data.strMeasure15,
                    data.strMeasure16,
                    data.strMeasure17,
                    data.strMeasure18,
                    data.strMeasure19,
                    data.strMeasure20,
                ]
                recipes.push(recipe)
            }
            setFoods(recipes);
        },
        sortDrinkRecipes: (datum) => {
            var recipes = [];
            for (var i = 0; i < datum.length; i++) {
                var recipe = {
                    name: '',
                    type: '',
                    instructions: '',
                    image: '',
                    ingredients: [],
                    measurements: []
                };
                var data = datum[i]
                recipe.name = data.strDrink;
                recipe.type = data.strCategory;
                recipe.instructions = data.strInstructions;
                recipe.image = data.strDrinkThumb;
                recipe.ingredients = [
                    data.strIngredient1,
                    data.strIngredient2,
                    data.strIngredient3,
                    data.strIngredient4,
                    data.strIngredient5,
                    data.strIngredient6,
                    data.strIngredient7,
                    data.strIngredient8,
                    data.strIngredient9,
                    data.strIngredient10,
                    data.strIngredient11,
                    data.strIngredient12,
                    data.strIngredient13,
                    data.strIngredient14,
                    data.strIngredient15,
                    data.strIngredient16,
                    data.strIngredient17,
                    data.strIngredient18,
                    data.strIngredient19,
                    data.strIngredient20,
                ]
                recipe.measurements = [
                    data.strMeasure1,
                    data.strMeasure2,
                    data.strMeasure3,
                    data.strMeasure4,
                    data.strMeasure5,
                    data.strMeasure6,
                    data.strMeasure7,
                    data.strMeasure8,
                    data.strMeasure9,
                    data.strMeasure10,
                    data.strMeasure11,
                    data.strMeasure12,
                    data.strMeasure13,
                    data.strMeasure14,
                    data.strMeasure15,
                    data.strMeasure16,
                    data.strMeasure17,
                    data.strMeasure18,
                    data.strMeasure19,
                    data.strMeasure20,
                ]
                recipes.push(recipe)
            }
            setDrinks(recipes);
        },
        sortFilteredFoodRecipes: (datum) => {
            let newDatum = [];
            let calls = [];
            let iterations = 0;
            if (datum.length > 25) {
                iterations = 25
            } else {
                iterations = datum.length;
            }

            let prevChosen = [];

            for (let i = 0; i < iterations; i++) {
                // Chooses a random number between 0 and datum.length - ensures a new selection
                let randomSelection = Math.floor(Math.random() * datum.length);
                // Ensures no duplicates
                if (!prevChosen.includes(randomSelection)) {
                    calls.push(axios.get(APIKeys.food + 'lookup.php?i=' + datum[randomSelection].idMeal));
                    prevChosen.push(randomSelection);
                } else {
                    i--;
                }
            }

            Promise.all(calls)
                .then((values) => {
                    for (let i = 0; i < values.length; i++) {
                        newDatum.push(values[i].data.meals[0]);
                    }
                    sortAPIResponse.sortFoodRecipes(newDatum);
                })
                .catch((error) => {
                    console.log(error);
                })
        },
        sortFilteredDrinkRecipes: (datum) => {
            let newDatum = [];
            let calls = [];
            let iterations = 0;
            if (datum.length > 25) {
                iterations = 25;
            } else {
                iterations = datum.length;
            }

            let prevChosen = [];

            for (let i = 0; i < iterations; i++) {
                // Chooses a random number between 0 and datum.length - ensures a new selection
                let randomSelection = Math.floor(Math.random() * datum.length);
                // Ensures no duplicates
                if (!prevChosen.includes(randomSelection)) {
                    calls.push(axios.get(APIKeys.drink + 'lookup.php?i=' + datum[randomSelection].idDrink));
                    prevChosen.push(randomSelection);
                } else {
                    i--;
                }
            }

            Promise.all(calls)
                .then((values) => {
                    for (let i = 0; i < values.length; i++) {
                        newDatum.push(values[i].data.drinks[0]);
                    }
                    sortAPIResponse.sortDrinkRecipes(newDatum);
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    }

    // This object contains functions for interacting with the sort form modal
    const manageModal = {
        openModal: () => { setIsModalVisible([1, 'block']) },
        closeModal: () => { setIsModalVisible([-1, 'none']) },
        searchFoods: () => { setWhatIsSelected('food') },
        searchDrinks: () => { setWhatIsSelected('drinks') }
    }

    return (
        <Router>

            <div id='MainContainer'>
                <Sort whatIsSelected={whatIsSelected} isModalVisible={isModalVisible} manageAPICalls={manageAPICalls} manageModal={manageModal} />

                <Switch>
                    <Route
                        exact path='/'
                        render={() => <LandingPage setWhatIsSelected={setWhatIsSelected} manageModal={manageModal} />} />

                    <Route
                        path='/NewFood'
                        render={() =>
                            <div>
                                <NavBar findRandomRecipes={manageAPICalls.findRandomRecipes} openModal={manageModal.openModal} />
                                <NewFood manageAPICalls={manageAPICalls} foods={foods} setFood={setFood} />
                            </div>} />

                    <Route
                        path='/NewDrinks'
                        render={() =>
                            <div>
                                <NavBar findRandomRecipes={manageAPICalls.findRandomRecipes} openModal={manageModal.openModal} />
                                <NewDrinks manageAPICalls={manageAPICalls} drinks={drinks} setDrink={setDrink} />
                            </div>} />

                    <Route
                        path='/Food'
                        render={() =>
                            <div>
                                <NavBar findRandomRecipes={manageAPICalls.findRandomRecipes} openModal={manageModal.openModal} />
                                <Food food={food} />
                            </div>} />

                    <Route
                        path='/Drink'
                        render={() =>
                            <div>
                                <NavBar findRandomRecipes={manageAPICalls.findRandomRecipes} openModal={manageModal.openModal} />
                                <Drink drink={drink} />
                            </div>} />

                    <Route
                        path='/DrinkDirections'
                        render={() =>
                            <div>
                                <NavBar findRandomRecipes={manageAPICalls.findRandomRecipes} openModal={manageModal.openModal} />
                                <DrinkDirections drink={drink} />
                            </div>} />

                    <Route
                        path='/FoodDirections'
                        render={() =>
                            <div>
                                <NavBar findRandomRecipes={manageAPICalls.findRandomRecipes} openModal={manageModal.openModal} />
                                <FoodDirections food={food} />
                            </div>} />
                </Switch>
            </div>

        </Router>
    )

}

export default App;