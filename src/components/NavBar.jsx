import logo from "../media/stardewvalley-logo.png";
import CartWidget from "./CartWidget";
import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <header>
      <Link to="/">
        <button className="logo">
          <img src={logo} alt="stardew valley logo" />
        </button>
      </Link>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/category/general"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              <button>General</button>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/category/spring"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              <button>Spring</button>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/category/summer"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              <button>Summer</button>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/category/autumn"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              <button>Autumn</button>
            </NavLink>
          </li>
        </ul>
        <CartWidget />
      </nav>
    </header>
  );
}
