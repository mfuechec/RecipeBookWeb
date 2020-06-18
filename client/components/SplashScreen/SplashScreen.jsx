import React from 'react';
import background from '../../../assets/foodBackground.jpg';

let SplashScreen = (props) => {

    if (props.secondLoad) {
        setTimeout(() => {
            let element = document.getElementById(`splashContainer`);
            element.style.opacity = 0;
            setTimeout(() => {
                let element2 = document.getElementById(`splashImage`);
                let element3 = document.getElementById(`splashText`);
                element.style.zIndex = -1;
                element2.style.zIndex = -1;
                element3.style.zIndex = -1;
            }, 750)
        }, 0)
    } else {
        setTimeout(() => {
            let element = document.getElementById(`splashContainer`);
            element.style.opacity = 0;
            setTimeout(() => {
                let element2 = document.getElementById(`splashImage`);
                let element3 = document.getElementById(`splashText`);
                element.style.zIndex = -1;
                element2.style.zIndex = -1;
                element3.style.zIndex = -1;
            }, 750)
        }, 750)
    }

    return (
        <div id='splashContainer'>
            <img id="splashImage" src={background}/>
            <div id='splashText'>Recipe Book</div>
        </div>
    )
}

export default SplashScreen;