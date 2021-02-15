import React from 'react';

export default class Login extends React.Component {
    constructor(props) {

        super(props);
        this.defaultForm = {
            username: "",
            password: ""
        };

        this.state = {
            ...this.defaultForm,
            processing: false
        };
    }

    render() {
        return (
            <div>
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <div className="card mt-5">
                            <div className="card-header">
                                <h5 className="card-title">Login</h5>
                            </div>
                            <div className="card-body">
                                <div className="form-group">
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="username">Username</span>
                                        <input type="text" className="form-control" id="username" aria-describedby="username" />
                                    </div>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="password">Password</span>
                                        <input type="password" className="form-control" id="password" aria-describedby="password" />
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                                <div className="form-group text-end">
                                    <button className="rounded text-white bg-success"> Login </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}