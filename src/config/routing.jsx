import React from "react";

import {
    BrowserRouter as Router,
    Route,

} from "react-router-dom";

import Home from "../containers/home"
import About from "../containers/about"


export default function AppRouter() {
    return (
        <Router>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/about" component={About} />
        </Router>
    )
}