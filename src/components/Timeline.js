import { Instagram } from "react-content-loader"
import usePosts from "../hooks/usePosts";
import Post from "./post/Post";

function Timeline() {
  const posts = usePosts();
  console.log({posts})
  return (
    <div className="container col-span-2">
      { !posts ? (
        <Instagram />
      ) : posts?.length === 0 ? (
        <p className="text-center text-2xl">Start following Insta people to see posts on your timeline.</p>
      ) : (
        <div>
          <div>
            {posts.map(post => <Post key={post.docId} post={post}/>)}
          </div>
        </div>
      )}
    </div>
  )
 
};

export default Timeline;
