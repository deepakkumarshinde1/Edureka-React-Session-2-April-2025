import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Todo from "./components/Todo";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { useState } from "react";

function App() {
  let [list, setList] = useState([]);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Todo />,
      children: [
        {
          path: "",
          element: <TodoInput list={list} setList={setList} />,
          index: true,
        },
        {
          path: "/todos",
          element: <TodoList list={list} />,
        },
      ],
    },
  ]);
  return (
    <>
      <section className="flex flex-col items-center">
        <RouterProvider router={router} />
      </section>
    </>
  );
}

export default App;
