import React from 'react';
import Explore from "../Explore/explore.js";
import "./page.css"

let page = (props) => {
    let pageContent = null;
    if (props.currentPage == "landing")
    {
        pageContent = (
            <div className = "landing">
                <Explore classname='Landscape'/>
                <Explore classname='Cityscape'/>
            </div>
        );
    }
    return pageContent;
}

export default page;