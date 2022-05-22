import React from "react";
import { useHistory } from "react-router-dom";

function LoginPage() {
    const history = useHistory();

    function toOverview() {
        history.push("/blogposts");
    }

    return (
        <button
            type="button"
            onClick={toOverview}
        >Inloggen</button>
    );
}

export default LoginPage;