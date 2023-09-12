import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
  const {
    cover,
    title,
    author_img,
    author,
    posted_date,
    reading_time,
    hashtags,
    id,
  } = blog;
  return (
    <div className="border-b lg:border-b-2 border-gray-400 mb-8">
      <div className=" mb-4 card  ">
        <figure className="rounded-lg">
          <img src={cover} alt="Shoes" className=" w-full" />
        </figure>

        <div className=" ">
          <div className="py-4 flex justify-between">
            <div className="flex items-center gap-2">
              <div className="w-11 md:w-14 rounded-full">
                <img src={author_img} />
              </div>
              <div className="flex flex-col">
                <p className="font-bold">{author}</p>
                <p>{posted_date}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <p>{reading_time} min read</p>
              <button
                onClick={() => handleAddToBookmark(blog)}
                className="px-2 py-1  font-medium text-center inline-flex items-center text-gray-700 rounded-full hover:text-green-500 "
              >
                <FaBookmark></FaBookmark>
              </button>
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-xl font-bold">{title}</p>
            <div className="flex gap-2">
              {hashtags.map((tag, idx) => (
                <p key={idx}>#{tag}</p>
              ))}
            </div>
            <button
              className="border-b-2 font-semibold border-blue-600 text-blue-600"
              onClick={() => {
                handleMarkAsRead(id,reading_time);
              }}
            >
              Mark As Read
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func.isRequired,
  handleMarkAsRead: PropTypes.func.isRequired,
};
export default Blog;
