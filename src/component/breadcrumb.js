import { Link } from "react-router-dom";

function Breadcrumbs(props) {
  return (
    <div className="breadcrumbs">
      <Link to="/movie" className="text-decoration-none">
        <span data-uk-icon="chevron-left"></span>
        <span style={{fontWeight:"bolder"}}> Movie Catalog </span>
      </Link>
      <span style={{fontSize:"26px"}}> / </span>
      <span>{props.title}</span>
    </div>
  );
}

export default Breadcrumbs;
