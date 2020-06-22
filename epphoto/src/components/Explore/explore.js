import React from 'react';
import LandscapeImage from "../../images/IMG_8888.jpg";
import CityscapeImage from "../../images/freedom2.jpg";

let explore = (props) => {
    let image = null;
    if (props.classname == "Landscape")
        image = LandscapeImage;
    else
        image = CityscapeImage;
    return(
        <div className = {props.classname}>
            <p>Explore {props.classname}</p>
            <img src = {image} alt = "" width = "100%"/>
        </div>
    );
};

export default explore;