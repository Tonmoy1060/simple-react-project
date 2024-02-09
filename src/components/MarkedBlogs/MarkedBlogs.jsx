import PropTypes from "prop-types";
import MarkedBlog from "./MarkedBlog";

const MarkedBlogs = ({ bookMarkBlogs, message }) => {
  return (
    <div className="rounded-md  border-sky-500 p-8 bg-slate-200 ">
      <h1 className="text-2xl  font-bold mb-2">
        Bookmarked Blogs : {bookMarkBlogs.length}
      </h1>
      {bookMarkBlogs.length < 1 ? <p className="text-red-400">Please add blog</p> :  <p className="text-blue-400">{message}</p>}
      <div className="mb-2 mt-6" >
        {bookMarkBlogs.map((singleBlog, indx) => (
          <MarkedBlog key={indx} singleBlog={singleBlog}></MarkedBlog>
        ))}
      </div>
    </div>
  );
};

MarkedBlogs.propTypes = {
  bookMarkBlogs: PropTypes.array,
  message: PropTypes.string
};

export default MarkedBlogs;
