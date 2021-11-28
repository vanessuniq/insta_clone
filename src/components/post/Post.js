import PropTypes from "prop-types";

function Post({ post }) {
  // TODO: Post needs the following components: (header, user, image, actions, footer)
  return (
    <div>
      Single post
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    docId: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    comments: PropTypes.array.isRequired,
    dateCreated: PropTypes.number.isRequired,
    currentUserLiked: PropTypes.bool.isRequired,
    imageSrc: PropTypes.string.isRequired,
    likes: PropTypes.array.isRequired,
    photoId: PropTypes.number.isRequired,
    userId: PropTypes.string.isRequired
  })
};

export default Post