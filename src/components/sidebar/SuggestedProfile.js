import PropTypes from 'prop-types';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import FirebaseContext from '../../context/firebase';

function SuggestedProfile({ profileDocId, username, profileId, currentUserId, currentUserDocId }) {
  const {firebase, FieldValue } = useContext(FirebaseContext);
  const [isFollowing, setIsFollowing] = useState(false)

  async function handleFollowUser(event){
    if (event.target.innerText === "Follow"){
      // Update the following array of the active user
      await firebase
      .firestore()
      .collection("users")
      .doc(currentUserDocId)
      .update({
        following: FieldValue.arrayUnion(profileId)
      });

      // Update the followers array of the suggested user who has been followed
      await firebase
        .firestore()
        .collection("users")
        .doc(profileDocId)
        .update({
          followers: FieldValue.arrayUnion(currentUserId)
        });
      
      setIsFollowing(true);
    } else {
      // Unfollow logic
      // Update the following array of the active user
      await firebase
      .firestore()
      .collection("users")
      .doc(currentUserDocId)
      .update({
        following: FieldValue.arrayRemove(profileId)
      });

      // Update the followers array of the suggested user who has been followed
      await firebase
        .firestore()
        .collection("users")
        .doc(profileDocId)
        .update({
          followers: FieldValue.arrayRemove(currentUserId)
        });
      
      setIsFollowing(false)
    };

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
