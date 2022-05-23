import React from "react";
import {NavLink} from "react-router-dom";

function TopMenu() {
    return (
        <ul className="topmenu">
            <li>
                <NavLink activeClassName="active-link" exact to="/">Homepage</NavLink>
            </li>
            <li>
                <NavLink activeClassName="active-link" to="/login">Loginpage</NavLink>
            </li>
            <li>
                <NavLink activeClassName="active-link" to="/blogposts">Blog Overview</NavLink>
            </li>

        </ul>
    );
}

export default TopMenu;