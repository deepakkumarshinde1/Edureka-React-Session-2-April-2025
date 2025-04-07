import { Component, useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import { Outlet } from "react-router-dom";
import Header from "./Header";

class Todo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Header />
        <section>
          <Outlet />
        </section>
      </>
    );
  }
}

export default Todo;
