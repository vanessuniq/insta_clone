import usePosts from "../hooks/usePosts";

function Timeline() {
  const posts = usePosts();
  console.log({posts})
  return (
    <div className="container col-span-2">
      I am the timeline
    </div>
  )
};

export default Timeline;
