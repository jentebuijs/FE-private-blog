import React from "react";
import posts from "./data/posts.json"
import { Link } from "react-router-dom";

function BlogOverview() {
    const blogPostNumber = posts.length;
    const blogPostTitles = posts.map(({ id, title }) => {
        return (
            <li key={id}>
                <Link to={`/blogposts/${id}`}
                >{title}</Link>
            </li>
        )
        });

    return (
        <>
            <p>Aantal blogposts: {blogPostNumber}</p>
            <ol className="title-list">
                {blogPostTitles}
            </ol>
        </>
    );
}

export default BlogOverview;