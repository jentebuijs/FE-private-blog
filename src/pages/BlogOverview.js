import React from "react";
import posts from "../data/posts.json"
import {Link} from "react-router-dom";

function BlogOverview() {

    return (
        <>
            <p>Aantal blogposts: {posts.length}</p>
            <ul className="title-list">
                {posts.map(({id, title}) => {
                    return (
                        <li key={id}>
                            <Link to={`/blogposts/${id}`}>{title}</Link>
                        </li>
                    )
                })}
            </ul>
        </>
    );
}

export default BlogOverview;