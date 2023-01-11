import React from "react";
import Me from '../assets/img/me.png';
import Me_white from '../assets/img/me_white.png' // relative path to image 
import Me_black from '../assets/img/me_black.png' // relative path to image 
import Me_red from '../assets/img/me_red.png' // relative path to image 


const Picture = () => {
    return (
        <div className="picture">
            <img src={Me_red} className="me"/>
            <div>
                <p className="name">
                    Álvaro Taibo Aguza
                </p>
                <p className="tiperwriter">
                    {"<"}Full Stack Developer {"/>"}
                </p>
            </div>
        </div>
    );
}
export default Picture;