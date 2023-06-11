import { Link } from "react-router-dom";
import "../style/style.css";

function NavBar() {
  return (
    <div>
      <nav class="navbar">
      <div class="navbar-item">
        <img
          src="https://icon-library.com/images/imdb-icon-png/imdb-icon-png-15.jpg"
          className="image-nav"
        />
      </div>
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
    </div>
  );
}

export default NavBar;
