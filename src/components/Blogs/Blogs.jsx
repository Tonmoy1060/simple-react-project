import { useEffect } from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import Blog from "./Blog";


const Blogs = ({handleMarkRead, markRead}) => {

    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="w-3/5 bg-red-300 p-3 rounded-md">
            {blogs.map( (blog, indx) => <Blog handleMarkRead={handleMarkRead} key={indx} blog={blog} markRead={markRead}></Blog>)}
        </div>
    );
};

Blogs.propTypes = {
    handleMarkRead: PropTypes.func,
    markRead: PropTypes.func
}

export default Blogs;