import React from "react";
import { Link } from "react-router-dom";
import LogIn from "../LogIn/LogIn.jsx";
import FoodGallery from "./FoodGallery.jsx";
import DrinkGallery from "./DrinkGallery.jsx";

let LandingPage = (props) => {
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
