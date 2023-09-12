const Bookmark = ({bookmark}) => {
  return (
    <div className="bg-gray-50 p-4 rounded-lg mx-8 my-5 ">
      <h1 className="text-xl  font-semibold">
       {
        bookmark.title
       }
      </h1>
    </div>
  );
};

export default Bookmark;
