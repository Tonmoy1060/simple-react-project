import MarkedBlogs from "../MarkedBlogs/MarkedBlogs";
import SpentTime from "../SpentTIme/SpentTime";
import PropTypes from "prop-types";

const BookmarkItem = ({bookMarkBlogs, message}) => {

    return (
        <div className="w-2/5 sticky top-3">
            <SpentTime bookMarkBlogs={bookMarkBlogs}></SpentTime>
            <MarkedBlogs bookMarkBlogs={bookMarkBlogs} message={message}></MarkedBlogs>
        </div>
    );
};

BookmarkItem.propTypes = {
    bookMarkBlogs: PropTypes.array, 
    message: PropTypes.string
}

export default BookmarkItem;