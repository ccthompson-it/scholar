import React, { useState, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./Home";
import Student from "./Student";
import Teacher from "./Teacher";
import NotFound from "./NotFound";
import Profile from "./Profile";
import Header from "./Header";

export default function App(props) {
    return (
        <Router>
            <Header />
            <main>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/teacher">
                        <Teacher />
                    </Route>
                    <Route exact path="/student">
                        <Student />
                    </Route>
                    <Route exact path="/profile">
                        <Profile />
                    </Route>
                    <Route path="*">
                        <NotFound />
                    </Route>
                </Switch>
            </main>
        </Router>
    );
}
