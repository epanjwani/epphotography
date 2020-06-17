import React, {Component} from 'react';
import Cover from '../Cover/cover.js'

class Layout extends Component{
    state = {
        page: "landing",
    }
    render(){
        return(
            <div>
                <Cover />
                <p>Header/NavBar</p>
                <p>Current Page</p>
                <p>Footer</p>
            </div>
        );
    }
}

export default Layout;