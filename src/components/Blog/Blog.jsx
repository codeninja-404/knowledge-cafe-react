import PropTypes from "prop-types";
const Blog = ({ blog }) => {
  return (
    <div>
      <h1>hwllo from blog</h1>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};
export default Blog;