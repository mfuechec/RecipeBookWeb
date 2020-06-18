import React from 'react';
import background from '../../../assets/foodBackground.jpg';

let SplashScreen = () => {

    setTimeout(() => {
        let element = document.getElementById(`splashContainer`);
        element.style.opacity = 0;
    }, 750)

    return (
        <div id='splashContainer'>
            <img id="splashImage" src={background}/>
            <div id='splashText'>Recipe Book</div>
        </div>
    )
}

export default SplashScreen;