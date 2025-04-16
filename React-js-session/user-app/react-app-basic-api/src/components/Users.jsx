import axios from "axios";
import { BASE_URL } from "../config/config";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Users() {
  let navigate = useNavigate();
  let [users, setUsers] = useState([]);
  let getUsers = async () => {
    let url = BASE_URL + "/users";
    let { data } = await axios.get(url);
    setUsers(data);
    console.log("api was called");
  };

  useEffect(() => {
    if (users.length === 0) {
      getUsers();
    }
  }, []); // mounting

  useEffect(() => {
    return () => {
      console.log("home unmounting");
    };
  }, []);
  // [] is the dependency array  which has state or props
  // a sideeffect happens when the component state/props changes
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Sr. No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <button onClick={() => navigate(`/user-post/${user.id}`)}>
                    View Post
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Users;

// React Lifecycle
// 1. Mounting => once
// 2. Updating => when state or props change
// 3. Unmounting => once
