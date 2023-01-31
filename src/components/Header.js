import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="topnav">
      <Link className="active" to="/">
        Home
      </Link>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
      <Link to="/about">About</Link>
    </div>
  );
};

export default Header;
