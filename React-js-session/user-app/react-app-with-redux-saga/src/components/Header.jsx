import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
      </ul>
    </>
  );
}

export default Header;
