import Bookmark from "../Bookmark/Bookmark";
import Spenttime from "../Spenttime/Spenttime";
const Bookmarks = ({ bookmarks , spentTime }) => {
  return (
    <div className="md:w-1/3">
      <div className="md:ml-5 pb-2 mb-5 rounded-lg bg-gray-200 border-2 border-blue-600">
        <Spenttime spentTime={spentTime} ></Spenttime>
      </div>
      <div className=" md:ml-5 pb-2 rounded-lg bg-gray-200">
        <h2 className=" py-5 pl-8 text-2xl font-bold">
          Bookmarked Blogs : {bookmarks.length}
        </h2>
        {bookmarks.map((bookmark,idx ) => (
          <Bookmark key={idx} bookmark={bookmark}></Bookmark>
        ))}
      </div>
    </div>
  );
};

export default Bookmarks;
