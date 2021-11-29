import Navs from "../Nav/Nav";
import SignUp from "../SignUp/SignUp";
import SignIn from "../SignIn/SignIn";

import "./Header.css";

function Header() {
  return (
    <header className="header_block mb-3 d-flex justify-content-between align-items-center">
      <Navs />
      <div className="header__sign">
        <SignUp />
        <SignIn />
      </div>
    </header>
  );
}

export default Header;
