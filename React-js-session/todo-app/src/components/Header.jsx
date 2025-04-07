import { NavLink } from "react-router-dom";

export function Header(props) {
  return (
    <>
      <nav>
        <ul className="flex gap-4">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/todos">Todos</NavLink>
          </li>
        </ul>
      </nav>
      <h1 className="text-3xl text-amber-600 mt-6 mb-3">Todo App</h1>
    </>
  );
}

export default Header;

// JSX rules
// 1. Must have one parent element
// 2. Every element must be closed
// 3. class => className
// 4. for => htmlFor
// 5. i want to run javascript code inside JSX => { }
