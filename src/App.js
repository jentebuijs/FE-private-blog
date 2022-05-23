import React, { useState } from 'react';
import './App.css';
import TopMenu from "./components/TopMenu";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import BlogOverview from "./pages/BlogOverview";
import BlogPostPage from "./pages/BlogPostPage";
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
