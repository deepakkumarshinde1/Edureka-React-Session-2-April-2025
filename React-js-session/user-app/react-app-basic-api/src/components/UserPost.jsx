import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../config/config";

function UserPost() {
  let [posts, setPosts] = useState([]);
  let params = useParams();
  let getPostByUserId = async () => {
    let url = BASE_URL + "/posts?userId=" + params.userId;
    let response = await axios.get(url);
    let data = response.data;
    setPosts(data);
  };
  useEffect(() => {
    getPostByUserId();
  }, []);
  return (
    <div>
      {posts.map((post, index) => {
        return (
          <fieldset key={post.id}>
            <legend>Posts </legend>
            <div className="posts">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          </fieldset>
        );
      })}
    </div>
  );
}

export default UserPost;
