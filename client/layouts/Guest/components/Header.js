import React from 'react'
import { withTracker } from 'meteor/react-meteor-data'
import { Link } from 'react-router-dom'
import Env from "/imports/Env"


// The Header creates links that can be used to navigate
// between routes.

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.AuthComponent = this.AuthComponent.bind(this);
        this.LoginComponent = this.LoginComponent.bind(this);
        this.LogoutComponent = this.LogoutComponent.bind(this);
    }

    AuthComponent() {
        return (this.props.user) ? this.LogoutComponent() : this.LoginComponent();
    }

    LoginComponent() {
        return (<Link className="nav-link" to="/login">Login</Link>)
    }

    LogoutComponent() {
        return (
            <div className="d-flex">
                <Link className="text-dark default-link mt-2" to="/user/profile">{this.props.user.username}</Link> &nbsp; &nbsp; &nbsp;
                <button type="button" className="btn btn-danger" onClick={() => {
                    Meteor.logout((err) => {
                        if (!err) {
                            console.log("User logged out");
                        }
                        else {
                            console.log(err);
                        }
                    });
                }}><i className="mdi mdi-logout"></i> Logout</button>
            </div>
        )
    }



    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/home">{Env.APP_NAME}</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/home">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">About Us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">Contact Us</Link>
                                </li>
                            </ul>
                            {this.AuthComponent()}
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}

export default withTracker(params => {

    return {
        user: Meteor.user(),
    };
})(Header);