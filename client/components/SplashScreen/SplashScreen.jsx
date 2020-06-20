import React, { useState, useEffect } from "react";
import web1 from "../../../assets/SplashBackgrounds/Web-Image-1.jpg";
import web2 from "../../../assets/SplashBackgrounds/Web-Image-2.jpg";
import web3 from "../../../assets/SplashBackgrounds/Web-Image-3.jpg";
import web4 from "../../../assets/SplashBackgrounds/Web-Image-4.jpg";
import web5 from "../../../assets/SplashBackgrounds/Web-Image-5.jpg";
import web6 from "../../../assets/SplashBackgrounds/Web-Image-6.jpg";

import mobile1 from "../../../assets/SplashBackgrounds/Mobile-Image-1.jpg";
import mobile2 from "../../../assets/SplashBackgrounds/Mobile-Image-2.jpg";
import mobile3 from "../../../assets/SplashBackgrounds/Mobile-Image-3.jpg";
import mobile4 from "../../../assets/SplashBackgrounds/Mobile-Image-4.jpg";
import mobile5 from "../../../assets/SplashBackgrounds/Mobile-Image-5.jpg";
import mobile6 from "../../../assets/SplashBackgrounds/Mobile-Image-6.jpg";

let SplashScreen = (props) => {
  const [image, setImage] = useState(web1);

  useEffect(() => {
    let numImages = 6;
    let web = [web1, web2, web3, web4, web5, web6];
    let mobile = [mobile1, mobile2, mobile3, mobile4, mobile5, mobile6];

    let index = Math.floor(Math.random() * numImages);
    if (window.innerWidth > window.innerHeight) {
      setImage(web[index]);
    } else {
      setImage(mobile[index]);
    }
  }, []);

  useEffect(() => {
    if (props.firstImagesLoaded) {
      fadeOut();
    }
  }, [props.firstImagesLoaded]);

  if (props.secondLoad) {
    setTimeout(() => {
      fadeOut();
    }, 0);
  }

  function fadeOut() {
    let element = document.getElementById(`splashContainer`);
    element.style.opacity = 0;
    setTimeout(() => {
      let element2 = document.getElementById(`splashImage`);
      element.style.zIndex = -1;
      element2.style.zIndex = -1;
    }, 750);
  }

  return (
    <div id="splashContainer">
      <img id="splashImage" src={image} />
    </div>
  );
};

export default SplashScreen;
