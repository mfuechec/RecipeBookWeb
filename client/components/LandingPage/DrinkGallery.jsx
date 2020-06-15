import React from "react";

let DrinkGallery = (props) => {
  let endingIndex = 35;
  let visibleImages = 6;
  if (props.drinks[endingIndex] !== undefined) {
    for (let i = 0; i <= endingIndex; i++) {
      if (i < visibleImages - 2) {
        let element = document.getElementById(`drink${i}`);
        if (element !== null) {
          element.src = props.drinks[i].image;
          setTimeout(() => {
            element.style.opacity = 1;
          }, i * 1500);
        }
      } else if (i < endingIndex - 1) {
        let element = document.getElementById(`drink${i % 6}`);
        if (element !== null) {
          setTimeout(() => {
            element.src = props.drinks[i].image;
            element.style.opacity = 1;
            let nextElement = document.getElementById(`drink${(i + 2) % 6}`);
            nextElement.style.opacity = 0;
            nextElement.style.transition = `all 2.5s ease-in`;
          }, i * 1500);
        }
      } else {
        let element = document.getElementById(`drink${i % 6}`);
        if (element !== null) {
          setTimeout(() => {
            element.src = props.drinks[i].image;
            element.style.opacity = 1;
          }, i * 1500);
        }
      }
    }
  }

  return (
    <div className="gallery">
      <div className="row">
        <img className="image" id="drink0"></img>
        <img className="image" id="drink1"></img>
        <img className="image" id="drink2"></img>
      </div>
      <div className="row">
        <img className="image" id="drink3"></img>
        <img className="image" id="drink4"></img>
        <img className="image" id="drink5"></img>
      </div>
    </div>
  );
};

export default DrinkGallery;
