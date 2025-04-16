import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout";
import Users from "./components/Users";
import Posts from "./components/Posts";
import UserPost from "./components/UserPost";
import Counter from "./components/Counter";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Users />,
          index: true,
        },
        {
          path: "posts",
          element: <Posts />,
        },
        {
          path: "user-post/:userId",
          element: <UserPost />,
        },
      ],
    },
    {
      path: "*",
      element: <Navigate to="/" replace />,
    },
  ]);
  return <Counter />;
}

export default App;
