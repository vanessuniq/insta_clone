import { useEffect, useState } from "react";
import { getFollowedUsersPosts } from "../services/firebase";
import useUser from "./useUser";

function usePosts(){
  const { activeUser: { following, userId } } = useUser();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function getTimelinePosts(){
      const followedUsersPosts = await getFollowedUsersPosts(following, userId);
      setPosts(followedUsersPosts);
    };
    if (following && following.length > 0) {
      getTimelinePosts()
    }
  }, [following, userId]);
  
  return posts;
};

export default usePosts;
