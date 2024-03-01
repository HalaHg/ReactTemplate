import "../styles/Header.css";
export function Header({ goHome }) {
  return (
    <div className="bgHeader">
      <div onClick={goHome} className="burgerMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="logo">Azure</div>
    </div>
  );
}
