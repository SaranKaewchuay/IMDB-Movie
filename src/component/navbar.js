import { Link } from "react-router-dom";
import "../style/style.css";

function NavBar() {
  return (
    <nav class="navbar">
      <ul class="navbar-list">
        <li class="navbar-item">
          <Link to={"/"} className="text-decoration-none">
            <button class="button">Movie</button>
          </Link>
        </li>
        <li class="navbar-item">
          <Link to={"/tv-show"} className="text-decoration-none">
            <button class="button">TV Show</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
