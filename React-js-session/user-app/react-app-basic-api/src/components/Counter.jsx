import { useDispatch, useSelector } from "react-redux";
import { incFun, setCount } from "../redux/counter.slice";

function Counter() {
  let dispatch = useDispatch();
  let { count } = useSelector((state) => state.counter);
  let handelInputKey = (event) => {
    if (event.key === "Enter") {
      dispatch(setCount(event.target.value));
    }
  };
  return (
    <>
      <input type="text" onKeyUp={handelInputKey} />
      <h1>Count {count}</h1>
      <button onClick={() => dispatch(incFun())}>INC</button>
    </>
  );
}

export default Counter;
