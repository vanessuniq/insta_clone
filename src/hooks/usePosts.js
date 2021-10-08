import { useEffect, useState } from "react";
import { getFollowedUsersPosts } from "../services/firebase";
import useUser from "./useUser";

function usePosts(){
 const { activeUser: { following } } = useUser();
 const [posts, setPosts] = useState([]);
 useEffect(() => {
  async function getTimelinePosts(){
   const followedUsersPosts = await getFollowedUsersPosts(following);
   setPosts(followedUsersPosts);
  };
  if (following) {
    getTimelinePosts()
  }
 }, [following]);
 
 return posts;
};

export default usePosts;
