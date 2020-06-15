import React from "react";

let FoodGallery = (props) => {
  let start = 0;
  let endingIndex = 35;
  let visibleImages = 6;
  if (props.foods[endingIndex] !== undefined) {
    for (let i = start; i <= endingIndex; i++) {
      if (i < visibleImages - 2) {
        let element = document.getElementById(`food${i}`);
        if (element !== null) {
          element.src = props.foods[i].image;
          setTimeout(() => {
            element.style.opacity = 1;
          }, i * 1500);
        }
      } else if (i < endingIndex - 1) {
        let element = document.getElementById(`food${i % 6}`);
        if (element !== null) {
          setTimeout(() => {
            element.src = props.foods[i].image;
            element.style.opacity = 1;
            let nextElement = document.getElementById(`food${(i + 2) % 6}`);
            nextElement.style.opacity = 0;
            nextElement.style.transition = `all 2.5s ease-in`;
          }, i * 1500);
        }
      } else {
        let element = document.getElementById(`food${i % 6}`);
        if (element !== null) {
          setTimeout(() => {
            element.src = props.foods[i].image;
            element.style.opacity = 1;
          }, i * 1500);
        }
      }
    }
    props.setRestartLanding(false);
  }

  if (
    document.documentElement.clientWidth < document.documentElement.clientHeight
  ) {
    return (
      <div className="gallery">
        <img className="image" id="food0"></img>
        <img className="image" id="food1"></img>

        <img className="image" id="food2"></img>
        <img className="image" id="food3"></img>

        <img className="image" id="food4"></img>
        <img className="image" id="food5"></img>
      </div>
    );
  } else {
    return (
      <div className="gallery">
        <div className="row">
          <img className="image" id="food0"></img>
          <img className="image" id="food1"></img>
          <img className="image" id="food2"></img>
        </div>
        <div className="row">
          <img className="image" id="food3"></img>
          <img className="image" id="food4"></img>
          <img className="image" id="food5"></img>
        </div>
        <div className="row">
          <img className="image" id="food6"></img>
          <img className="image" id="food7"></img>
          <img className="image" id="food8"></img>
        </div>
        <div className="row">
          <img className="image" id="food9"></img>
          <img className="image" id="food10"></img>
          <img className="image" id="food11"></img>
        </div>
      </div>
    );
  }
};

export default FoodGallery;
