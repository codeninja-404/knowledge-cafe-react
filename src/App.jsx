import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [spentTime, setSpentTime] = useState(0);

  const handleAddToBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };

  const handleMarkAsRead = (id, time) => {
    const newSpentTime = spentTime + time;
    setSpentTime(newSpentTime);
    const remainingBookMarks = bookmarks.filter(
      (bookmark) => bookmark.id !== id
    );
    setBookmarks(remainingBookMarks);
  };

  return (
    <>
      <div className="container mx-auto py-6 px-2 lg:px-6">
        <Header></Header>
        <div className="md:flex mt-5">
          <Blogs
            handleMarkAsRead={handleMarkAsRead}
            handleAddToBookmark={handleAddToBookmark}
          >
            {" "}
          </Blogs>
          <Bookmarks spentTime={spentTime} bookmarks={bookmarks}></Bookmarks>
        </div>
      </div>
    </>
  );
}

export default App;
