import React from "react";
import './blog.css';
import Cards from "./Card";
import Page from "./Pagination";
const Blog = () => {
    return (<>
        <section className="blogsection">
        <a id ="movetoblog"></a>
            <h4> OUR BLOGS</h4>
            <Cards />
            <Page />
        </section>
    </>);
}
export default Blog;