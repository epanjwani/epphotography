import React from "react";
import CoverImage from "../../images/IMG_8707.jpg";
import "./cover.css";
import NavBar from "./NavBar/NavBar";

const cover = () => {
    return (
        <div>
            <NavBar />
            <div className = "coverPhoto">
                <img src = {CoverImage} alt="" width = "100%"/>
            </div>
        </div>
    );
};

export default cover;