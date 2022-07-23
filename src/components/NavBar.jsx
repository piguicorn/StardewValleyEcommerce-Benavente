import React, { useContext } from 'react';
import logo from "../media/stardewvalley-logo.png";
import CartWidget from "./CartWidget";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from '../cartContext';

export default function NavBar() {
  const [, , , , totalItems] = useContext(CartContext);

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
        {totalItems > 0 ? <CartWidget /> : null}
      </nav>
    </header>
  );
}
