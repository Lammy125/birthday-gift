import { Link } from "react-router-dom";
import "./Header.scss";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Header = () => {
  const handleFacebookClick = () => {
    window.open("https://www.facebook.com/toyin.angelo", "_blank");
  };
  const handleTwitterClick = () => {
    window.open("https://www.twitter.com/toyinangelo", "_blank");
  };
  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/ty_gracie01", "_blank");
  };

  return (
    <div className="header">
      <h1>Grace Ogunyemi</h1>
      <nav className="navBar">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <div className="iconDiv">
          <div className="icon">
            <FaFacebookF size={17} onClick={handleFacebookClick} />
          </div>
          <div className="icon">
            <FaTwitter size={18} onClick={handleTwitterClick} />
          </div>
          <div className="icon">
            <FaInstagram size={20} onClick={handleInstagramClick} />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
