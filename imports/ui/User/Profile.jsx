import React from 'react';
import { Link } from 'react-router-dom'
import FormHelper from "/lib/FormHelpers";

export default class Profile extends React.Component {
    constructor(props) {

        super(props);
        this.defaultForm = {
            username: "",
            password: ""
        };

        this.Profile = this.Profile.bind(this);
        this.state = {
            ...this.defaultForm,
            processing: false
        };
    }

    Profile() {
        Meteor.loginWithPassword(this.state.username, this.state.password, (data) => {
            console.log("Userdata", data);
        })
    }

    componentDidMount() {
        formHelper.LoadComponent(this);
    }

    render() {
        return (
            <div>
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <div className="card mt-5">
                            <div className="card-header">
                                <h5 className="card-title">Profile</h5>
                            </div>
                            <div className="card-body">
                                <div className="form-group">
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="username"><i className="mdi mdi-account"></i></span>
                                        <input type="text" className="form-control" value={this.username} onChange={formHelper.HandleInputChange} placeholder="Username" id="username" name="username" aria-describedby="username" />
                                    </div>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="password"><i className="mdi mdi-lock"></i></span>
                                        <input type="password" className="form-control" value={this.password} onChange={formHelper.HandleInputChange} placeholder="Password" id="password" name="password" aria-describedby="password" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col col-md-12 text-end">
                                        <Link to="/register" className="link" className="default-link">Sign up here</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                                <div className="row">
                                    <div className="col col-md-6">
                                    </div>
                                    <div className="col col-md-6">
                                        <div className="form-group text-end">
                                            <button className="rounded text-white btn btn-success" onClick={this.Profile}> <i className="mdi mdi-login"></i> Profile </button>
                                        </div>
                                    </div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}