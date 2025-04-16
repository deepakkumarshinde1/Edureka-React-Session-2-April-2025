import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getPostListByUserId } from "../redux/users.slice";

function UserPost() {
  let { userId } = useParams();
  console.log(userId);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPostListByUserId(Number(userId)));
  }, [userId]);
  return <div>UserPost</div>;
}

export default UserPost;
