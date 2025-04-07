import { useState } from "react";

function TodoInput({ list, setList }) {
  let [inputText, setInputText] = useState(""); // number , string, boolean, array, object
  let [completed, setCompleted] = useState(null);

  let handelInput = (event) => {
    setInputText(event.target.value);
  };

  let handelRadio = (event) => {
    Number(event.target.value) ? setCompleted(true) : setCompleted(false);
  };

  let saveNewTodo = () => {
    // create deep copy of array
    let newList = [...list]; // spread operator
    // push method to add new element in array
    newList.unshift({
      name: inputText,
      isCompleted: completed,
    });
    // update the state
    setList(newList);
    // reset a input
    setInputText("");
    setCompleted(null);
  };
  return (
    <>
      <section className="shadow-sm shadow-amber-600 p-5 rounded-2xl w-[30rem]">
        <section className="flex flex-col my-3">
          <label htmlFor="">Todo Name </label>
          <input
            type="text"
            placeholder="Enter Todo"
            onChange={handelInput}
            value={inputText}
          />
        </section>
        <section>
          <label htmlFor="">Task-Status</label>
          <section className="ml-6">
            <section className="flex items-center gap-2">
              <input
                type="radio"
                name="taskStatus"
                id="taskStatusYes"
                value="1"
                onChange={handelRadio}
                checked={completed === true}
              />
              <label
                htmlFor="taskStatusYes"
                className="text-green-500 hover:text-green-700 cursor-pointer"
              >
                Completed
              </label>
            </section>
            <section className="flex items-center gap-2">
              <input
                type="radio"
                name="taskStatus"
                id="taskStatusNo"
                value="0"
                onChange={handelRadio}
                checked={completed === false}
              />
              <label
                htmlFor="taskStatusNo"
                className="text-red-500 hover:text-red-700 cursor-pointer"
              >
                In-Completed
              </label>
            </section>
          </section>
        </section>
        <section className="text-center">
          <button
            onClick={saveNewTodo}
            className="bg-blue-500 text-white p-2 rounded-lg px-6 cursor-pointer hover:bg-blue-600 active:bg-blue-700 transition-all duration-200"
          >
            Save
          </button>
        </section>
      </section>
    </>
  );
}

export default TodoInput;

// state is an object to handel data in a component
// whenever state changes, component re-renders
// hooks are functions which performs a specific & complex task
// useState is a function which returns an array of 2 elements
// 1st element => state
// 2nd element => function which updates that state

// task-name
// task-status (radio)
// task-time input
// task-type (radio)
// task-date input
// task-priority (dropdown)
