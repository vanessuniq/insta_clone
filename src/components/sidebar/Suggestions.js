import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { getSuggestedProfiles } from "../../services/firebase";

function Suggestions({ userId, following }) {
  const [profiles, setProfiles] = useState(null);
  useEffect(() => {
    async function suggestedProfiles() {
      const result = await getSuggestedProfiles(userId, following);
      console.log({result});
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
        I am the suggestions: { userId }
      </div>
    </div>
  )
};

export default Suggestions;

Suggestions.propTypes = {
  userId: PropTypes.string.isRequired,
  following: PropTypes.array.isRequired
};
