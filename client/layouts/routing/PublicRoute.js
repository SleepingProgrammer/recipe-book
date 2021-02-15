import React from "react";
import { Redirect, Route, useLocation } from "react-router-dom";

const PublicRoute = ({ component: Component, ...rest }) => {
    console.log(Meteor.user());
    const location = useLocation();

    return (
        <Route {...rest}>
            {Meteor.user() ?
                <Redirect to={{ pathname: "/admin", state: { from: location } }} />
                :
                <Component />
            }
        </Route>
    );
};

export default PublicRoute;