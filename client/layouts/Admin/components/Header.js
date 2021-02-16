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
            <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
                <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">{Env.APP_NAME}</a>
                <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />
                <ul className="navbar-nav px-3">
                    <li className="nav-item text-nowrap">
                        <a className="nav-link" href="#">Sign out</a>
                    </li>
                </ul>
            </header>
        )
    }
}

export default withTracker(params => {

    return {
        user: Meteor.user(),
    };
})(Header);