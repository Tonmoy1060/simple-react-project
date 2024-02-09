import { PropTypes } from "prop-types";
const SpentTime = ({bookMarkBlog}) => {
//   console.log(bookMarkBlog.bookMarkBlog.bookMarkBlog);
  return (
    <div className="rounded-md border border-sky-500 p-5 bg-violet-200 mb-5">
      <h1 className="text-2xl text-blue-700 font-bold text-center">
        {/* Spent time on read : {bookMarkBlog?.length}{" "} */}
        min
      </h1>
    </div>
  );
};

SpentTime.propTypes = {
  bookMarkBlog: PropTypes.array,
};

export default SpentTime;
