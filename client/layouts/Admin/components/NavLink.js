import React from 'react';
import { Link, useLocation, withRouter } from 'react-router-dom'


export default class NavLink extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var className = "nav-link";

        if (this.props.active) {
            className += " active";
        }

        return (
            <li className="nav-item">
                <Link className={className} to={this.props.route}>
                    <i className={"mdi mdi-" + this.props.icon}></i> {this.props.text}
                </Link>
            </li>
        )
    }
}