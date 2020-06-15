import React from "react";
import { Link } from "react-router-dom";
import LogIn from "../LogIn/LogIn.jsx";
import FoodGallery from "./FoodGallery.jsx";
import DrinkGallery from "./DrinkGallery.jsx";

let LandingPage = (props) => {
  return (
    <div id="landingPageContainer">
      <Link
        id="landingPageFoodOption"
        to="NewFood"
        tabIndex="1"
        onClick={() => {
          props.setWhatIsSelected("food");
          props.manageLogIn.pageChange();
        }}
      >
        <div id="landingPageFoodText">Food</div>
        <div id="landingPageFoodGallery">
          <FoodGallery foods={props.foods} />
        </div>
      </Link>
      <Link
        id="landingPageDrinkOption"
        to="NewDrinks"
        tabIndex="2"
        onClick={() => {
          props.setWhatIsSelected("drinks");
          props.manageLogIn.pageChange();
        }}
      >
        <div id="landingPageDrinkText">Drinks</div>
        <div id="landingPageDrinkGallery">
          <DrinkGallery drinks={props.drinks} />
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
    // <div id="LandingPageOptionsContainer">
    //   <Link
    //     tabIndex="1"
    //     id="LandingPageNewFoodLinkContainer"
    //     to="NewFood"
    //     onClick={() => {
    //       props.setWhatIsSelected("food");
    //       props.manageLogIn.pageChange();
    //     }}
    //   >
    //     <img
    //       id="LandingPageNewFoodOption"
    //       src={
    //         "https://recipe-book-images.s3.us-east-2.amazonaws.com/images/foodBackground.jpg"
    //       }
    //     />
    //     <div id="LandingPageFoodText">Food</div>
    //   </Link>
    //   <Link
    //     tabIndex="2"
    //     id="LandingPageNewDrinksLinkContainer"
    //     to="NewDrinks"
    //     onClick={() => {
    //       props.setWhatIsSelected("drinks");
    //       props.manageLogIn.pageChange();
    //     }}
    //   >
    //     <img
    //       id="LandingPageNewDrinksOption"
    //       src={
    //         "https://recipe-book-images.s3.us-east-2.amazonaws.com/images/drinksBackground.jpg"
    //       }
    //     />
    //     <div id="LandingPageDrinkText">Cocktails</div>
    //   </Link>
    //   <LogIn
    //     whatIsSelected={props.whatIsSelected}
    //     signUpUsername={props.signUpUsername}
    //     signUpPassword={props.signUpPassword}
    //     logInUsername={props.logInUsername}
    //     logInPassword={props.logInPassword}
    //     manageAPICalls={props.manageAPICalls}
    //     signUpSelected={props.signUpSelected}
    //     logInSelected={props.logInSelected}
    //     loggedIn={props.loggedIn}
    //     manageLogIn={props.manageLogIn}
    //   />
    // </div>
  );
};

export default LandingPage;
