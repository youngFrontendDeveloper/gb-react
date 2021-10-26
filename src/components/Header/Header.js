import "./Header.css";

function Header({ header }) {
  return (
    <header className="header_block">
      <h2>{ header }</h2>
    </header>
  );
}

export default Header;