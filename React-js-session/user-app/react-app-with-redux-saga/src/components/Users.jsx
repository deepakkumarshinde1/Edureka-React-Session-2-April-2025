import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/users.slice";
import { useNavigate } from "react-router-dom";

function Users() {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let { list } = useSelector((state) => state.users);
  useEffect(() => {
    if (list.length === 0) {
      dispatch(getUsers());
    }
  }, []);
  return (
    <>
      <h1>Users</h1>
      <ul>
        {list.map((user) => {
          return (
            <li onClick={() => navigate("/user-post/" + user.id)} key={user.id}>
              {user.name}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Users;
