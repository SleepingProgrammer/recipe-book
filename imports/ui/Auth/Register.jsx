import React from 'react';
import { Link } from 'react-router-dom'

export default class Register extends React.Component {
    constructor(props) {
        super(props);
        this.defaultForm = {
            username: "",
            email: "",
            password: "",
            confirm_password: ""
        };

        this.signUp = this.signUp.bind(this);
        this.validateForm = this.validateForm.bind(this);

        this.state = {
            ...this.defaultForm,
            processing: false
        };
    }

    componentDidMount() {
        formHelper.LoadComponent(this);
    }

    validateForm() {

        if (this.state.username == "") {
            formHelper.Toast("Please enter your username", "Error", "bg-danger");
            return false;
        }

        if (this.state.email == "") {
            formHelper.Toast("Please enter your email", "Error", "bg-danger");
            return false;
        }

        if (!formHelper.ValidateEmail(this.state.email)) {
            formHelper.Toast("Please enter a valid email", "Error", "bg-danger");
            return false;
        }

        if (this.state.password != this.state.confirm_password) {
            formHelper.Toast("Your passwords don't match", "Error", "bg-danger");
            return false;
        }

        return true;
    }

    signUp() {
        if (!this.validateForm()) {
            return;
        }

        this.setState({
            processing: true
        });

        Meteor.call("registerUser", this.state.username, this.state.email, this.state.password, (err, response) => {
            console.log(err);
            console.log(response);

            formHelper.Toast(response.message, response.status, "bg-" + response.alert);
            this.setState({
                processing: false
            });

            if (response.status == "Success") {
                this.setState({
                    ...this.defaultForm
                });
            }

        });
    }

    render() {
        return (
            <div>
                <div className="row justify-content-center">
                    <div className="col col-md-10 col-lg-4 col-xs-12 col-sm-12">
                        <div className="card mt-5">
                            <div className="card-header">
                                <h5 className="card-title">Register</h5>
                            </div>
                            <div className="card-body">
                                <div className="form-group">
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="username"><i className="mdi mdi-account"></i></span>
                                        <input type="text" className="form-control" value={this.username} onChange={formHelper.HandleInputChange} placeholder="Username" id="username" name="username" aria-describedby="username" />
                                    </div>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="email"><i className="mdi mdi-email"></i></span>
                                        <input type="email" className="form-control" value={this.email} onChange={formHelper.HandleInputChange} placeholder="Email" id="email" name="email" aria-describedby="email" />
                                    </div>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="password"><i className="mdi mdi-lock"></i></span>
                                        <input type="password" className="form-control" value={this.password} onChange={formHelper.HandleInputChange} placeholder="Password" id="password" name="password" aria-describedby="password" />
                                    </div>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="confirm_password"><i className="mdi mdi-lock"></i></span>
                                        <input type="password" className="form-control" value={this.confirm_password} onChange={formHelper.HandleInputChange} placeholder="Password" id="confirm_password" name="confirm_password" aria-describedby="confirm_password" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col col-md-12 text-end">
                                        <Link to="/login" className="link" className="default-link">Login here</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                                <div className="row">
                                    <div className="col col-md-6">
                                    </div>
                                    <div className="col col-md-6">
                                        <div className="form-group text-end">
                                            <button className="rounded text-white btn btn-success" onClick={this.signUp} disabled={this.state.processing}> <i className="mdi mdi-login"></i> Sign up </button>
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