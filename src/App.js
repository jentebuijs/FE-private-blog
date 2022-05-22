import React, { useState } from 'react';
import './App.css';
import TopMenu from "./TopMenu";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import BlogOverview from "./BlogOverview";
import BlogPostPage from "./BlogPostPage";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  // We houden in de state bij of iemand is "ingelogd" (simpele versie)
  const [isAuthenticated, toggleIsAuthenticated ] = useState(false);

  return (
    <Router>
        <TopMenu />

        <Switch>
            <Route exact path="/">
                <HomePage />
            </Route>
            <Route path="/login">
                <LoginPage />
            </Route>
            <Route exact path="/blogposts">
                <BlogOverview />
            </Route>
            <Route path="/blogposts/:blogId">
                <BlogPostPage />
            </Route>
        </Switch>
    </Router>
  );
}

export default App;
