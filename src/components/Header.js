import "../styles/Header.css";
import { Link } from 'react-router-dom';
export function Header() {
  return (
    <div className="bgHeader">
      <Link to="">
      <div className="burgerMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
      </Link>
      <div className="logo">TEMPLATE</div>
    </div>
  );
}
