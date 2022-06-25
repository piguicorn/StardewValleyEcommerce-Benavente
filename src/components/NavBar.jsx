import logo from "../media/stardewvalley-logo.png";
import CartWidget from "./CartWidget";

export default function NavBar() {
  return (
    <header>
      <img src={logo} className="logo" alt="stardew valley logo" />
      <nav>
        <ul>
          <li>
            <p>General</p>
          </li>
          <li>
            <p>Spring</p>
          </li>
          <li>
            <p>Summer</p>
          </li>
          <li>
            <p>Autumn</p>
          </li>
        </ul>
        <CartWidget/>
      </nav>
    </header>
  );
}
