import React from "react";

let FoodGallery = (props) => {
  let endingIndex = 39;
  let visibleImages = 8;
  let animate = () => {
    if (props.foods[endingIndex] !== undefined) {
      for (let i = 0; i <= endingIndex; i++) {
        if (i < visibleImages - 2) {
          let element = document.getElementById(`food${i}`);
          if (element !== null) {
            element.src = props.foods[i].image;
            setTimeout(() => {
              element.style.opacity = 1;
            }, i * 1500);
          }
        } else if (i < endingIndex - 1) {
          let element = document.getElementById(`food${i % visibleImages}`);
          if (element !== null) {
            setTimeout(() => {
              element.src = props.foods[i].image;
              element.style.opacity = 1;
              let nextElement = document.getElementById(
                `food${(i + 2) % visibleImages}`
              );
              nextElement.style.opacity = 0;
              nextElement.style.transition = `all 2.5s ease-in`;
            }, i * 1500);
          }
        } else {
          let element = document.getElementById(`food${i % visibleImages}`);
          if (element !== null) {
            setTimeout(() => {
              element.src = props.foods[i].image;
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
      <img className="image" id="food0"></img>
      <img className="image" id="food1"></img>

      <img className="image" id="food2"></img>
      <img className="image" id="food3"></img>

      <img className="image" id="food4"></img>
      <img className="image" id="food5"></img>

      <img className="image" id="food6"></img>
      <img className="image" id="food7"></img>
    </div>
  );
};

export default FoodGallery;
