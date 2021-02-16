import React, { useState, useEffect } from 'react';
import { withTracker } from 'meteor/react-meteor-data'

import Sidebar from "./Sidebar";

import PrivateRoute from "/client/layouts/routing/PrivateRoute";
import PublicRoute from "/client/layouts/routing/PublicRoute";

import FormHelper from "/lib/FormHelpers";

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
class Main extends React.Component {
    constructor(props) {
        super(props);
        formHelper = new FormHelper(this);
    }

    componentDidMount() {
        formHelper.InitializeHelper();
    }

    render() {

        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <Sidebar />

                        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">

                        </main>
                    </div>
                </div>


                <div className="modal fade" id="defaultModal" tabIndex="-1" aria-labelledby="defaultModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="defaultModalLabel">Modal title</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body" id="defaultModalBody">
                                ...
                        </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                    <div className="toast-header">
                        <img src="..." className="rounded me-2" alt="..." />
                        <strong className="me-auto">Bootstrap</strong>
                        <small className="text-muted">11 mins ago</small>
                        <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                    </div>
                    <div className="toast-body">
                        Hello, world! This is a toast message.
                </div>
                </div>

                <div id="defaultToast" className="toast" style={{ position: "absolute", top: "5px", right: "5px" }}>
                    <div className="toast-header">
                        <strong className="me-auto" id="defaultToastTitle">Bootstrap</strong>
                        <small id="defaultToastTimestamp">11 mins ago</small>
                    </div>
                    <div className="toast-body" id="defaultToastBody">
                        Hello, world! This is a toast message.
                </div>
                </div>
            </div>
        )
    }
}


export default withTracker(params => {

    return {
        user: Meteor.user(),
    };
})(Main);