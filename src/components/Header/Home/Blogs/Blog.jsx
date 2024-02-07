import PropTypes from "prop-types";
import { FcBookmark } from "react-icons/fc";

const Blog = ({ blog }) => {
  const { title, name, img, date, author_img, time, hashtags } = blog;

  return (
    <div className=" bg-white rounded-md mb-3">
      <img className="rounded-t-md" src={img} alt="" />
      <div className="flex  items-center p-4  justify-between">
        <div className="flex items-center">
          <img
            className="mix-blend-multiply w-20 mr-5"
            src={author_img}
            alt=""
          />
          <div>
            <h3 className="text-xl font-semibold mb-2">{name}</h3>
            <p className="text-sm"> {date}</p>
          </div>
        </div>
        <div className="flex items-center">
          {time <= 9 ? (
            <p className="text-sm mr-3">0{time} min read</p>
          ) : (
            <p className="text-sm mr-3">{time} min read</p>
          )}

        
          <FcBookmark className="fill-black text-xl text-blue cursor-pointer" />
        </div>
      </div>
      <div className="px-4 pb-6">
        <h1 className="text-3xl font-bold">{title}</h1>
        <div className="flex py-2 pb-3">
          {hashtags.map((hashtag, indx) => (
            <p key={indx} className="mr-3">
              {" "}
              #{hashtag}
            </p>
          ))}
        </div>
        <span className=" underline underline-offset-1 text-blue-600 cursor-pointer">
          Mark as read
        </span>
      </div>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object,
};

export default Blog;
