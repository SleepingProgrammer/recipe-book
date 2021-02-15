import React from 'react'
import { Redirect, Switch, Route } from 'react-router-dom'
import { App, Home, About, Contact } from '/imports/ui/App';
import Login from '/imports/ui/Auth/Login';

import PrivateRoute from "../routing/PrivateRoute";
import PublicRoute from "../routing/PublicRoute";

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
    <main>
        <Switch>
            <Route
                exact
                path="/"
                render={() => {
                    return (
                        Meteor.user() ?
                            <Redirect to="/home" /> :
                            <Redirect to="/admin" />
                    )
                }}
            />
            <Route path="/home" component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/login' component={Login} />
            <PrivateRoute path='/admin' component={App} />
        </Switch>
    </main>
)

export default Main
