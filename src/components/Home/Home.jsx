import { useState } from "react";
import Blogs from "../Blogs/Blogs";
import BookmarkItem from "../BookmarkItem/BookmarkItem";

const Home = () => {
  const [bookMarkBlogs, setBookmarkBlogs] = useState([]);
  const [message, setMessage] = useState("");
  const handleMarkRead = (blog) => {
    if (bookMarkBlogs.some((b) => b.id === blog.id)) {
      setMessage("Blog already exists.");
    } else {
      setBookmarkBlogs([...bookMarkBlogs, blog]);

      setMessage("Blog added");
    }
  };

  const markRead = (id) => {    
    const updatedBlogs = bookMarkBlogs.filter((blog) => blog.id !== id);
    setBookmarkBlogs(updatedBlogs);
  }
  return (
    <div className="flex items-start justify-between gap-3">
      <Blogs handleMarkRead={handleMarkRead} markRead={markRead}></Blogs>
      <BookmarkItem
        bookMarkBlogs={bookMarkBlogs}
        message={message}
      ></BookmarkItem>
    </div>
  );
};

export default Home;
