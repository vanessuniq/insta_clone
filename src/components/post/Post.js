import PropTypes from "prop-types";

function Post({ post }) {
  return (
    <div>
      Single post
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired
};

export default Post