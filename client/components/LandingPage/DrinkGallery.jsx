import React from "react";

let DrinkGallery = (props) => {
  let endingIndex = 39;
  let visibleImages = 8;
  let animate = () => {
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
          let element = document.getElementById(`drink${i % visibleImages}`);
          if (element !== null) {
            setTimeout(() => {
              element.src = props.drinks[i].image;
              element.style.opacity = 1;
              let nextElement = document.getElementById(
                `drink${(i + 2) % visibleImages}`
              );
              nextElement.style.opacity = 0;
              nextElement.style.transition = `all 2.5s ease-in`;
            }, i * 1500);
          }
        } else {
          let element = document.getElementById(`drink${i % visibleImages}`);
          if (element !== null) {
            setTimeout(() => {
              element.src = props.drinks[i].image;
              element.style.opacity = 1;
              animate();
            }, i * 1500);
          }
        }
      }
    }
  };

  animate();

  return (
    <div className="gallery">
      <img className="image" id="drink0"></img>
      <img className="image" id="drink1"></img>
      <img className="image" id="drink2"></img>
      <img className="image" id="drink3"></img>
      <img className="image" id="drink4"></img>
      <img className="image" id="drink5"></img>
      <img className="image" id="drink6"></img>
      <img className="image" id="drink7"></img>
    </div>
  );
};

export default DrinkGallery;
