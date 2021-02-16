import React from 'react';
import Header from "./components/Header";
import Body from "./components/Body";


export default class Guest extends React.Component {
    constructor(props) {
        super(props);
        console.log("Rendered Guest");
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