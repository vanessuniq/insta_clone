import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { updateCurrentUserFollowing, updateSuggestedUserFollowers } from '../../services/firebase';

function SuggestedProfile({ profileDocId, username, profileId, currentUserId, currentUserDocId }) {
  const [isFollowing, setIsFollowing] = useState(false)

  async function handleFollowUser(){
   // Update the following array of the active user
   await updateCurrentUserFollowing(currentUserDocId, profileId, isFollowing);

   // Update the followers array of the suggested user who has been followed
   await updateSuggestedUserFollowers(profileDocId, currentUserId, isFollowing);

   setIsFollowing(!isFollowing);
  };
  return (
    <div className="flex flex-row items-center align-items justify-between">
      <Link to={`/p/${username}`}>
        <div className="flex items-center justify-between">
          <img className="rounded-full w-8 flex mr-3"
            src={`/images/avatars/${username}.jpg`}
            alt="Suggested profile"
            onError={error => {error.target.src = "/images/avatars/default.png"}}
          />
          <p className="font-bold text-sm">{username}</p>
        </div>
      </Link>
      <button className={`font-bold text-sm ${isFollowing ? "text-red-primary" : "text-blue-medium" }`} 
        type="button"
        onClick={handleFollowUser}
      >
        {isFollowing ? "Unfollow" : "Follow"}
      </button>
    </div>
  );
}

SuggestedProfile.propTypes = {
  profileDocId: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  profileId: PropTypes.string.isRequired,
  currentUserId: PropTypes.string.isRequired,
  currentUserDocId: PropTypes.string.isRequired
};

export default SuggestedProfile;
