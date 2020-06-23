import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import LogIn from "../LogIn/LogIn.jsx";
import FoodGallery from "./FoodGallery.jsx";
import DrinkGallery from "./DrinkGallery.jsx";

let LandingPage = (props) => {
  let endingIndex = 39;
  let visibleImages = 8;
  let foodImages = [];
  let drinkImages = [];
  let selectedFoods = {};
  let selectedDrinks = {};
  let counter = 0;

  useEffect(() => {
    if (props.loggedIn) {
      let foodElement = document.getElementById("landingPageFoodOption");
      let drinkElement = document.getElementById("landingPageDrinkOption");
      foodElement.style.bottom = "30%";
      drinkElement.style.bottom = "30%";
    }
  }, [props.loggedIn]);

  if (props.foods[endingIndex] && props.drinks[endingIndex]) {
    props.clearAll(window);
    setTimeout(() => {
      makeList();
    }, 0);
  }

  function makeList() {
    foodImages = [];
    drinkImages = [];
    selectedFoods = {};
    selectedDrinks = {};
    for (let i = 0; i < visibleImages; i++) {
      let num = Math.floor(Math.random() * endingIndex);
      if (selectedFoods[num] !== 1) {
        foodImages.push(props.foods[num].image);
        selectedFoods[num] = 1;
      } else {
        i--;
      }
    }

    for (let i = 0; i < visibleImages; i++) {
      let num = Math.floor(Math.random() * endingIndex);
      if (selectedDrinks[num] !== 1) {
        drinkImages.push(props.drinks[num].image);
        selectedDrinks[num] = 1;
      } else {
        i--;
      }
    }

    placeImages();
  }

  function placeImages() {
    for (let i = 0; i < visibleImages; i++) {
      let foodElement = document.getElementById(`food${i}`);
      foodElement.src = foodImages[i];
      foodElement.onload = () => counter++;
      let drinkElement = document.getElementById(`drink${i}`);
      drinkElement.src = drinkImages[i];
      drinkElement.onload = () => counter++;
    }
    fadeIn();
  }

  function fadeIn() {
    if (counter < 16) {
      if (!props.firstImagesLoaded) {
        props.setFirstImagesLoaded(true);
      }
      setTimeout(() => {
        fadeIn();
      }, 100);
    } else {
      let elements = document.getElementsByClassName("gallery");
      for (let i = 0; i < elements.length; i++) {
        elements[i].style.opacity = 1;
      }
      setTimeout(() => {
        fadeOut();
        counter = 0;
      }, 1500);
    }
  }

  function fadeOut() {
    let elements = document.getElementsByClassName("gallery");
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.opacity = 0;
    }
    setTimeout(() => {
      makeList();
    }, 1500);
  }

  return (
    <div id="landingPageContainer">
      <Link
        id="landingPageFoodOption"
        to="NewFood"
        tabIndex="1"
        onClick={() => {
          props.manageModal.searchFoods();
          props.setSecondLoad(true);
          props.clearAll(window);
        }}
      >
        <div id="landingPageFoodText">Food Recipes</div>
        <div id="landingPageFoodGallery">
          <FoodGallery
            restartLanding={props.restartLanding}
            setRestartLanding={props.setRestartLanding}
            foods={props.foods}
          />
        </div>
      </Link>
      <Link
        id="landingPageDrinkOption"
        to="NewDrinks"
        tabIndex="2"
        onClick={() => {
          props.manageModal.searchDrinks();
          props.setSecondLoad(true);
          props.clearAll(window);
        }}
      >
        <div id="landingPageDrinkText">Cocktail Recipes</div>
        <div id="landingPageDrinkGallery">
          <DrinkGallery
            restartLanding={props.restartLanding}
            setRestartLanding={props.setRestartLanding}
            drinks={props.drinks}
          />
        </div>
      </Link>
      <LogIn
        clearAll={props.clearAll}
        manageAPICalls={props.manageAPICalls}
        loggedIn={props.loggedIn}
      />
    </div>
  );
};

export default LandingPage;
