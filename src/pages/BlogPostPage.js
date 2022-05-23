import React from "react";
import posts from "../data/posts.json";
import { useParams } from "react-router-dom";

function BlogPostPage() {
    const { blogId } = useParams();
    const blogPost = posts.find((post) => {
        return post.id === blogId;
    })
    return (
        <>
            <h1>{blogPost.title}</h1>
            <p>{blogPost.content}</p>
            <p>Posted on: {blogPost.date}</p>
        </>
    );
}

export default BlogPostPage;