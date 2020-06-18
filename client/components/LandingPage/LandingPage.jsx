import React from "react";
import { Link } from "react-router-dom";
import LogIn from "../LogIn/LogIn.jsx";
import FoodGallery from "./FoodGallery.jsx";
import DrinkGallery from "./DrinkGallery.jsx";

let LandingPage = (props) => {
  let endingIndex = 39;
  let visibleImages = 8;

  let animate = () => {
    if (
      props.foods[endingIndex] !== undefined &&
      props.drinks[endingIndex] !== undefined
    ) {
      let foodImages = [];
      let drinkImages = [];
      let selectedFoods = {};
      let selectedDrinks = {};

      // Create a list of unique food and drink images to populate the gallery with

      function makeList() {
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
      }

      // Place those images

      function placeImages(){
        for (let i = 0; i < visibleImages; i++) {
          let foodElement = document.getElementById(`food${i}`);
          foodElement.src = foodImages[i];
          let drinkElement = document.getElementById(`drink${i}`);
          drinkElement.src = drinkImages[i];
        }
      }

      function fadeIn(){
        for (let i = 0; i < visibleImages; i++) {
          let foodElement = document.getElementById(`food${i}`);
          foodElement.style.opacity = 1;
          let drinkElement = document.getElementById(`drink${i}`);
          drinkElement.style.opacity = 1;
        }
      }

      function fadeOut(){
        for (let i = 0; i < visibleImages; i++) {
          let foodElement = document.getElementById(`food${i}`);
          foodElement.style.opacity = 0;
          foodElement.style.transition = `all 1.5s ease-in-out`;
          let drinkElement = document.getElementById(`drink${i}`);
          drinkElement.style.opacity = 0;
          drinkElement.style.transition = `all 1.5s ease-in-out`;
        }
      }

      makeList();
      placeImages();
      setTimeout(()=>{
        fadeIn();
        setTimeout(()=>{
          fadeOut();
        }, 2000);
      }, 500);



      setTimeout(() => {
        animate();
      }, 4000);
    }
  };

  animate();

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
    <div id="landingPageContainer">
      <Link
        id="landingPageFoodOption"
        to="NewFood"
        tabIndex="1"
        onClick={() => {
          props.setWhatIsSelected("food");
          props.manageLogIn.pageChange();
          clearAll(window);
        }}
      >
        <div id="landingPageFoodText">Food</div>
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
          props.setWhatIsSelected("drinks");
          props.manageLogIn.pageChange();
          clearAll(window);
        }}
      >
        <div id="landingPageDrinkText">Drinks</div>
        <div id="landingPageDrinkGallery">
          <DrinkGallery
            restartLanding={props.restartLanding}
            setRestartLanding={props.setRestartLanding}
            drinks={props.drinks}
          />
        </div>
      </Link>
      <LogIn
        whatIsSelected={props.whatIsSelected}
        signUpUsername={props.signUpUsername}
        signUpPassword={props.signUpPassword}
        logInUsername={props.logInUsername}
        logInPassword={props.logInPassword}
        manageAPICalls={props.manageAPICalls}
        signUpSelected={props.signUpSelected}
        logInSelected={props.logInSelected}
        loggedIn={props.loggedIn}
        manageLogIn={props.manageLogIn}
      />
    </div>
  );
};

export default LandingPage;
