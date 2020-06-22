import React, {Component} from 'react';
import Cover from '../Cover/cover.js';
import Page from '../Page/page.js';

class Layout extends Component{
    state = {
        page: "landing",
    }
    render(){
        return(
            <div>
                <Cover />
                <Page currentPage={this.state.page} />
            </div>
        );
    }
}

export default Layout;