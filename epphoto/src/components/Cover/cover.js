import React from "react";
import CoverImage from "../../images/IMG_8707.jpg";
import "./cover.css"

const cover = () => {
    return (
        <div className = "coverPhoto">
            <div className = "headBar">
                <div className = "textWrapper">
                    <p className = "headerText">Eashan Panjwani Photography</p>
                </div>
            </div>
            <img src = {CoverImage} alt="" width = "100%"/>
        </div>
    );
};

export default cover;