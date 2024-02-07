import Blogs from "./Blogs/Blogs";
import BookmarkItem from "./BookmarkItem/BookmarkItem";

const Home = () => {
    return (
        <div className="flex items-center justify-between">
            <Blogs ></Blogs>
            <BookmarkItem></BookmarkItem>
        </div>
    );
};

export default Home;