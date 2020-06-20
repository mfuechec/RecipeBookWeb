import React, { useState, useEffect } from "react";
import recipeBook from "../../../assets/SplashBackgrounds/recipes.png";

let SplashScreen = (props) => {
  useEffect(() => {
    if (props.firstImagesLoaded && props.secondLoad === false) {
      fadeOut();
    }
  }, [props.firstImagesLoaded]);

  function fadeOut() {
    let element = document.getElementById(`splashContainer`);
    element.style.opacity = 0;
    element.style.backgroundColor = "#86a3c3";
    setTimeout(() => {
      let element2 = document.getElementById(`splashImage`);
      element.style.zIndex = -1;
      element2.style.zIndex = -1;
    }, 750);
  }

  if (props.secondLoad) {
    return <div></div>;
  } else {
    return (
      <div id="splashContainer">
        <img id="splashImage" src={recipeBook} />
      </div>
    );
  }
};

export default SplashScreen;
