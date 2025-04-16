import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout";
import Users from "./components/Users";
import UserPost from "./components/UserPost";
import Comments from "./components/Comments";

function App() {
  let router = createBrowserRouter([
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
          path: "user-post/:userId",
          element: <UserPost />,
        },
        {
          path: "post-comments",
          element: <Comments />,
        },
      ],
    },
    {
      path: "*",
      element: <Navigate to="/" replace />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
