import TodoItem from "./TodoItem";

function TodoList({ list }) {
  return (
    <div className="w-3xl">
      <h3 className="text-center text-2xl mt-3 mb-0 text-cyan-900">List</h3>
      <ul className="flex flex-col gap-2 p-4">
        {list.map((todo, index) => {
          return <TodoItem todo={todo} key={index} />;
        })}
      </ul>
    </div>
  );
}

export default TodoList;
