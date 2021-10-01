import PropTypes from 'prop-types';

function SuggestedProfile({ userDocId, username, profileId, currentUserId }) {
  return (
    <div className="">
      SuggestedProfile
    </div>
  );
}

SuggestedProfile.propTypes = {
  userDocId: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  profileId: PropTypes.string.isRequired,
  currentUserId: PropTypes.string.isRequired
};

export default SuggestedProfile;
