import React from 'react';
import Header from "./components/Header";
import Body from "./components/Body";

import "./dashboard.css";
import "./dashboard.js";

export default class Admin extends React.Component {
    constructor(props) {
        super(props);
        console.log("Rendered Admin");
    }

    render() {
        return (
            <div>
                <Header user={this.props.user} />
                <Body user={this.props.user} />
            </div>
        );
    }
}