import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { getSuggestedProfiles } from "../../services/firebase";
import SuggestedProfile from "./SuggestedProfile";

function Suggestions({ userId, following, userDocId }) {
  const [profiles, setProfiles] = useState(null);
  useEffect(() => {
    async function suggestedProfiles() {
      const response = await getSuggestedProfiles(userId, following);
      setProfiles(response)
    }
    suggestedProfiles();
  }, [userId, following])
  if (!profiles) {
    return (
      <Skeleton count={5} height={150} className="mt-5"/>
    )
  }
  return (
    <div className="rounded flex flex-col">
      <div className="flex items-center align-items justify-between mb-2 text-sm">
        <p className="font-bold text-gray-base">Suggestions for you</p>
      </div>
      <div className="mt-4 grid gap-5">
        {profiles.map(profile => (
          <SuggestedProfile
            key={profile.docId}
            profileDocId={profile.docId}
            username={profile.username}
            profileId={profile.userId}
            currentUserId={userId}
            currentUserDocId={userDocId}
          />
        ))}
      </div>
    </div>
  )
};

Suggestions.propTypes = {
  userId: PropTypes.string.isRequired,
  following: PropTypes.array.isRequired,
  userDocId: PropTypes.string.isRequired
};

export default Suggestions;
