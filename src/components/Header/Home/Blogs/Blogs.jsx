import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="w-3/5 bg-red-300 p-3 rounded-md">
            {blogs.map( (blog, key) => <Blog key={key} blog={blog}></Blog>)}
        </div>
    );
};

export default Blogs;