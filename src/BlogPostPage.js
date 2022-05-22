import React from "react";
import posts from "./data/posts.json";
import { useParams } from "react-router-dom";

function BlogPostPage() {
    const { blogId } = useParams();

    return (
        posts[blogId - 1].title
    );
}

export default BlogPostPage;