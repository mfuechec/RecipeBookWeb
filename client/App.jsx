import React, { useState, useEffect } from "react";
import axios from "axios";
import APIKeys from "../passwords";
import Drink from "./components/Drink/Drink.jsx";
import DrinkDirections from "./components/DrinkDirections/DrinkDirections.jsx";
import Food from "./components/Food/Food.jsx";
import FoodDirections from "./components/FoodDirections/FoodDirections.jsx";
import SplashScreen from "./components/SplashScreen/SplashScreen.jsx";
import LandingPage from "./components/LandingPage/LandingPage.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import NewDrinks from "./components/NewDrinks/NewDrinks.jsx";
import NewFood from "./components/NewFood/NewFood.jsx";
import Sort from "./components/Sort/Sort.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
let sha256 = require("js-sha256");

const App = () => {
  // Instantiates empty state objects for food and drink recipes
  const [foods, setFoods] = useState([]);
  const [previousFoods, setPreviousFoods] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [previousDrinks, setPreviousDrinks] = useState([]);
  const [food, setFood] = useState({});
  const [drink, setDrink] = useState({});
  const [isModalVisible, setIsModalVisible] = useState([-1, "none"]);
  const [whatIsSelected, setWhatIsSelected] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState("");
  const [lookingAtFavorites, setLookingAtFavorites] = useState(false);
  const [favFoods, setFavFoods] = useState([]);
  const [favDrinks, setFavDrinks] = useState([]);
  const [favFoodNames, setFavFoodNames] = useState("");
  const [favDrinkNames, setFavDrinkNames] = useState("");
  const [restartLanding, setRestartLanding] = useState(true);
  const [secondLoad, setSecondLoad] = useState(false);
  const [firstImagesLoaded, setFirstImagesLoaded] = useState(false);

  // Call the function that will find 10 random recipes from both APIs
  // This function runs only once on component mount
  useEffect(() => {
    manageAPICalls.findRandomRecipes();
  }, []);

  // This object holds all API calls for the app.
  const manageAPICalls = {
    findRandomRecipes: () => {
      axios
        .get(APIKeys.food + "randomselection.php")
        .then((response) => {
          let first = response.data.meals;
          axios
            .get(APIKeys.food + "randomselection.php")
            .then((response) => {
              let second = response.data.meals;
              let combined = first.concat(second);
              axios
                .get(APIKeys.food + "randomselection.php")
                .then((response) => {
                  let third = response.data.meals;
                  let secondCombined = combined.concat(third);
                  axios
                    .get(APIKeys.food + "randomselection.php")
                    .then((response) => {
                      let fourth = response.data.meals;
                      let thirdCombined = secondCombined.concat(fourth);
                      sortAPIResponse.sortFoodRecipes(thirdCombined);
                    });
                });
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          console.log(error);
        });
      axios
        .get(APIKeys.drink + "randomselection.php")
        .then((response) => {
          let first = response.data.drinks;
          axios.get(APIKeys.drink + "randomselection.php").then((response) => {
            let second = response.data.drinks;
            let combined = first.concat(second);
            axios
              .get(APIKeys.drink + "randomselection.php")
              .then((response) => {
                let third = response.data.drinks;
                let secondCombined = combined.concat(third);
                axios
                  .get(APIKeys.drink + "randomselection.php")
                  .then((response) => {
                    let fourth = response.data.drinks;
                    let thirdCombined = secondCombined.concat(fourth);
                    sortAPIResponse.sortDrinkRecipes(thirdCombined);
                  });
              });
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    searchByName: (searchText) => {
      if (whatIsSelected === "food") {
        axios
          .get(APIKeys.food + "search.php?s=" + searchText)
          .then((response) => {
            if (response.data.meals === null) {
              alert("No results found");
            } else {
              setPreviousFoods(foods);
              sortAPIResponse.sortFoodRecipes(response.data.meals);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
      if (whatIsSelected === "drinks") {
        axios
          .get(APIKeys.drink + "search.php?s=" + searchText)
          .then((response) => {
            if (response.data.drinks === null) {
              alert("No results found");
            } else {
              setPreviousDrinks(drinks);
              sortAPIResponse.sortDrinkRecipes(response.data.drinks);
              manageModal.closeModal();
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    searchWithFilter: (selection, filter) => {
      let filterURL = "";
      if (filter === "ingredient") {
        filterURL = "filter.php?i=";
      }
      if (filter === "category") {
        filterURL = "filter.php?c=";
      }
      if (filter === "area") {
        filterURL = "filter.php?a=";
      }

      if (whatIsSelected === "food") {
        axios
          .get(APIKeys.food + filterURL + selection)
          .then((response) => {
            sortAPIResponse.sortFilteredFoodRecipes(response.data.meals);
            manageModal.closeModal();
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        axios
          .get(APIKeys.drink + filterURL + selection)
          .then((response) => {
            sortAPIResponse.sortFilteredDrinkRecipes(response.data.drinks);
            manageModal.closeModal();
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    searchForLatest: () => {
      if (whatIsSelected === "food") {
        axios
          .get(APIKeys.food + "latest.php")
          .then((response) => {
            sortAPIResponse.sortFilteredFoodRecipes(response.data.meals);
            manageModal.closeModal();
          })
          .catch((error) => {
            console.log(error);
          });
      }
      if (whatIsSelected === "drinks") {
        axios
          .get(APIKeys.drink + "latest.php")
          .then((response) => {
            sortAPIResponse.sortFilteredDrinkRecipes(response.data.drinks);
            manageModal.closeModal();
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    signUp: (data) => {
      let signUpUsername = data.username;
      let signUpPassword = data.password;
      let format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
      if (signUpUsername.length < 5) {
        alert("Username must be greater than 4 characters.");
      } else if (signUpPassword.length < 8) {
        alert("Password must be greater than 7 characters.");
      } else if (format.test(signUpUsername)) {
        alert("Username may not contain special characters.");
      } else if (format.test(signUpPassword)) {
        alert("Password may not contain special characters.");
      } else {
        let credentials = {
          username: signUpUsername,
          password: sha256(signUpPassword),
        };
        return fetch("https://mark-recipe-book.herokuapp.com/signup", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(credentials),
        })
          .then((stream) => {
            return stream.text();
          })
          .then((response) => {
            if (response === "Signup successful") {
              setLoggedIn(true);
              setUser(signUpUsername);
              manageAPICalls.getUserFavoriteFoods(signUpUsername);
              manageAPICalls.getUserFavoriteDrinks(signUpUsername);
              clearAll(window);
            } else {
              alert("Username already taken");
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    logIn: (data) => {
      let logInUsername = data.username;
      let credentials = {
        username: logInUsername,
        password: sha256(data.password),
      };
      return fetch("https://mark-recipe-book.herokuapp.com/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      })
        .then((stream) => {
          return stream.text();
        })
        .then((response) => {
          if (response === "Login successful") {
            setLoggedIn(true);
            setUser(logInUsername);
            manageAPICalls.getUserFavoriteFoods(logInUsername);
            manageAPICalls.getUserFavoriteDrinks(logInUsername);
            clearAll(window);
          } else {
            // Empty both inputs
            alert("Login failed");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    addToFavorites: (data) => {
      if (user !== "") {
        data.username = user;
        let url = "https://mark-recipe-book.herokuapp.com/";
        if (whatIsSelected === "food") {
          url += `editFavoriteMeals`;
        } else {
          url += `editFavoriteDrinks`;
        }

        return fetch(url, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((response) => {
            let status = response.statusText;
            sortAPIResponse.appendFavorite(data);
            alert(status);
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        alert("Please log in before adding recipes to favorites");
      }
    },
    deleteFromFavorites: (data) => {
      if (user !== "") {
        data.username = user;
        let url = "https://mark-recipe-book.herokuapp.com/";
        if (whatIsSelected === "food") {
          url += `editFavoriteMeals`;
        } else {
          url += `editFavoriteDrinks`;
        }

        return fetch(url, {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((response) => {
            let status = response.statusText;
            alert(status);
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        alert("Please log in before deleting recipes from favorites");
      }
    },
    getUserFavoriteFoods: (name) => {
      let user = {
        name: name,
      };

      return fetch("https://mark-recipe-book.herokuapp.com/findFavoriteMeals", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((response) => {
          response.json().then((body) => sortAPIResponse.sortFavMeals(body));
        })
        .catch((error) => {
          console.error(error);
        });
    },
    getUserFavoriteDrinks: (name) => {
      let user = {
        name: name,
      };

      return fetch(
        "https://mark-recipe-book.herokuapp.com/findFavoriteDrinks",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }
      )
        .then((response) => {
          response.json().then((body) => sortAPIResponse.sortFavDrinks(body));
        })
        .catch((error) => {
          console.error(error);
        });
    },
    findNewRecipes: () => {
      if (lookingAtFavorites === true) {
        setLookingAtFavorites(false);
      } else {
        manageAPICalls.findRandomRecipes();
      }
    },
  };

  // This object holds functions that format the data received from API calls.
  const sortAPIResponse = {
    sortFoodRecipes: (datum) => {
      let recipes = [];
      for (let i = 0; i < datum.length; i++) {
        let recipe = {
          name: "",
          type: "",
          instructions: "",
          image: "",
          ingredients: [],
          measurements: [],
        };
        let data = datum[i];
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
        ];
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
        ];
        recipes.push(recipe);
      }
      setFoods(recipes);
    },
    sortDrinkRecipes: (datum) => {
      let recipes = [];
      for (let i = 0; i < datum.length; i++) {
        let recipe = {
          name: "",
          type: "",
          instructions: "",
          image: "",
          ingredients: [],
          measurements: [],
        };
        let data = datum[i];
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
        ];
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
        ];
        recipes.push(recipe);
      }
      setDrinks(recipes);
    },
    sortFilteredFoodRecipes: (datum) => {
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
          calls.push(
            axios.get(
              APIKeys.food + "lookup.php?i=" + datum[randomSelection].idMeal
            )
          );
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
        });
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
          calls.push(
            axios.get(
              APIKeys.drink + "lookup.php?i=" + datum[randomSelection].idDrink
            )
          );
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
        });
    },
    sortFavMeals: (datum) => {
      let recipes = [];
      let favRecipes = "";
      for (let i = 0; i < datum.length; i++) {
        let recipe = {
          name: "",
          type: "",
          instructions: "",
          image: "",
          ingredients: [],
          measurements: [],
        };
        let data = datum[i];
        recipe.name = data.name;
        favRecipes += data.name;
        // recipe.type = data.strCategory;
        recipe.instructions = data.instructions;
        recipe.image = data.image;
        recipe.ingredients = [
          data.ingredient1,
          data.ingredient2,
          data.ingredient3,
          data.ingredient4,
          data.ingredient5,
          data.ingredient6,
          data.ingredient7,
          data.ingredient8,
          data.ingredient9,
          data.ingredient10,
          data.ingredient11,
          data.ingredient12,
          data.ingredient13,
          data.ingredient14,
          data.ingredient15,
          data.ingredient16,
          data.ingredient17,
          data.ingredient18,
          data.ingredient19,
          data.ingredient20,
        ];
        recipe.measurements = [
          data.measurement1,
          data.measurement2,
          data.measurement3,
          data.measurement4,
          data.measurement5,
          data.measurement6,
          data.measurement7,
          data.measurement8,
          data.measurement9,
          data.measurement10,
          data.measurement11,
          data.measurement12,
          data.measurement13,
          data.measurement14,
          data.measurement15,
          data.measurement16,
          data.measurement17,
          data.measurement18,
          data.measurement19,
          data.measurement20,
        ];
        recipes.push(recipe);
      }
      setFavFoods(recipes);
      setFavFoodNames(favRecipes);
    },
    sortFavDrinks: (datum) => {
      let recipes = [];
      let favRecipes = "";
      for (let i = 0; i < datum.length; i++) {
        let recipe = {
          name: "",
          type: "",
          instructions: "",
          image: "",
          ingredients: [],
          measurements: [],
        };
        let data = datum[i];
        recipe.name = data.name;
        favRecipes += data.name;
        // recipe.type = data.strCategory;
        recipe.instructions = data.instructions;
        recipe.image = data.image;
        recipe.ingredients = [
          data.ingredient1,
          data.ingredient2,
          data.ingredient3,
          data.ingredient4,
          data.ingredient5,
          data.ingredient6,
          data.ingredient7,
          data.ingredient8,
          data.ingredient9,
          data.ingredient10,
          data.ingredient11,
          data.ingredient12,
          data.ingredient13,
          data.ingredient14,
          data.ingredient15,
          data.ingredient16,
          data.ingredient17,
          data.ingredient18,
          data.ingredient19,
          data.ingredient20,
        ];
        recipe.measurements = [
          data.measurement1,
          data.measurement2,
          data.measurement3,
          data.measurement4,
          data.measurement5,
          data.measurement6,
          data.measurement7,
          data.measurement8,
          data.measurement9,
          data.measurement10,
          data.measurement11,
          data.measurement12,
          data.measurement13,
          data.measurement14,
          data.measurement15,
          data.measurement16,
          data.measurement17,
          data.measurement18,
          data.measurement19,
          data.measurement20,
        ];
        recipes.push(recipe);
      }
      setFavDrinks(recipes);
      setFavDrinkNames(favRecipes);
    },
    appendFavorite: (data) => {
      if (whatIsSelected === "food") {
        setFavFoods(favFoods.concat(data));
      } else {
        setFavDrinks(favDrinks.concat(data));
      }
    },
  };

  // This object contains functions for interacting with the sort form modal
  const manageModal = {
    openModal: () => {
      setIsModalVisible([2, "block"]);
    },
    closeModal: () => {
      setIsModalVisible([-1, "none"]);
      document.body.style.overflow = "hidden";
    },
    searchFoods: () => {
      setWhatIsSelected("food");
      document.body.style.overflow = "scroll";
    },
    searchDrinks: () => {
      setWhatIsSelected("drinks");
      document.body.style.overflow = "scroll";
    },
    previousResults: () => {
      if (whatIsSelected === "food") {
        setFoods(previousFoods);
      } else {
        setDrinks(previousDrinks);
      }
    },
    switchToFavorites: () => {
      if (loggedIn === false) {
        alert("Log in to access favorites");
      } else {
        setLookingAtFavorites(true);
      }
    },
  };

  function clearAll(windowObject) {
    var id = Math.max(
      windowObject.setInterval(noop, 1000),
      windowObject.setTimeout(noop, 1000)
    );

    while (id--) {
      windowObject.clearTimeout(id);
      windowObject.clearInterval(id);
    }

    function noop() {}
  }

  return (
    <Router>
      <div id="MainContainer">
        <Sort
          whatIsSelected={whatIsSelected}
          isModalVisible={isModalVisible}
          manageAPICalls={manageAPICalls}
          manageModal={manageModal}
        />

        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <div>
                <LandingPage
                  whatIsSelected={whatIsSelected}
                  manageAPICalls={manageAPICalls}
                  loggedIn={loggedIn}
                  manageModal={manageModal}
                  foods={foods}
                  drinks={drinks}
                  restartLanding={restartLanding}
                  setRestartLanding={setRestartLanding}
                  setSecondLoad={setSecondLoad}
                  firstImagesLoaded={firstImagesLoaded}
                  setFirstImagesLoaded={setFirstImagesLoaded}
                  clearAll={clearAll}
                />
                <SplashScreen
                  firstImagesLoaded={firstImagesLoaded}
                  secondLoad={secondLoad}
                />
              </div>
            )}
          />

          <Route
            path="/NewFood"
            render={() => (
              <div>
                <NavBar
                  findNewRecipes={manageAPICalls.findNewRecipes}
                  manageModal={manageModal}
                  setRestartLanding={setRestartLanding}
                />
                <NewFood
                  favFoodNames={favFoodNames}
                  manageAPICalls={manageAPICalls}
                  foods={foods}
                  favFoods={favFoods}
                  lookingAtFavorites={lookingAtFavorites}
                  setFood={setFood}
                />
              </div>
            )}
          />

          <Route
            path="/NewDrinks"
            render={() => (
              <div>
                <NavBar
                  findNewRecipes={manageAPICalls.findNewRecipes}
                  manageModal={manageModal}
                  setRestartLanding={setRestartLanding}
                />
                <NewDrinks
                  favDrinkNames={favDrinkNames}
                  manageAPICalls={manageAPICalls}
                  drinks={drinks}
                  favDrinks={favDrinks}
                  lookingAtFavorites={lookingAtFavorites}
                  setDrink={setDrink}
                />
              </div>
            )}
          />

          <Route
            path="/Food"
            render={() => (
              <div>
                <NavBar
                  findNewRecipes={manageAPICalls.findNewRecipes}
                  manageModal={manageModal}
                  setRestartLanding={setRestartLanding}
                />
                <Food food={food} />
              </div>
            )}
          />

          <Route
            path="/Drink"
            render={() => (
              <div>
                <NavBar
                  findNewRecipes={manageAPICalls.findNewRecipes}
                  manageModal={manageModal}
                  setRestartLanding={setRestartLanding}
                />
                <Drink drink={drink} />
              </div>
            )}
          />

          <Route
            path="/DrinkDirections"
            render={() => (
              <div>
                <NavBar
                  findNewRecipes={manageAPICalls.findNewRecipes}
                  manageModal={manageModal}
                  setRestartLanding={setRestartLanding}
                />
                <DrinkDirections drink={drink} />
              </div>
            )}
          />

          <Route
            path="/FoodDirections"
            render={() => (
              <div>
                <NavBar
                  findNewRecipes={manageAPICalls.findNewRecipes}
                  manageModal={manageModal}
                  setRestartLanding={setRestartLanding}
                />
                <FoodDirections food={food} />
              </div>
            )}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
