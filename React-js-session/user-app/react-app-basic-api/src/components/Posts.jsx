import { useEffect } from "react";

function Posts() {
  useEffect(() => {
    console.log("post is mounted");
  });
  return <div>Posts</div>;
}

export default Posts;
