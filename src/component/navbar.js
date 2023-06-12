import { Link } from "react-router-dom";
import "../style/style.css";

const handleLinkClick = () => {
  setTimeout(() => {
    window.location.reload();
  }, 3000); // Delay the reload by 3 seconds (3000 milliseconds)
};
const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-item">
        <img
          src="https://icon-library.com/images/imdb-icon-png/imdb-icon-png-15.jpg"
          className="image-nav"
          alt="IMDb Icon"
        />
      </div>
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="text-decoration-none" onClick={handleLinkClick}>
            <button className="button">Movie</button>
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/tv-show" className="text-decoration-none" onClick={handleLinkClick}>
            <button className="button">TV Show</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;
