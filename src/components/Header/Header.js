import { Button } from "react-bootstrap";
import Navs from "../Nav/Nav";
import SignUp from "../SignUp/SignUp";
import SignIn from "../SignIn/SignIn";
import { logOut } from "../../services/firebase";

import "./Header.css";

const handleLogOutClick = async () => {
  try {
    await logOut();
  } catch (err) {
    console.log(err);
  }
};

function Header() {
  return (
    <header className="header_block mb-3 d-flex justify-content-between align-items-center">
      <Navs />
      <div className="header__sign">
        <SignUp />
        <SignIn />
        <Button variant="outline-danger" onClick={handleLogOutClick}>
          Sign out
        </Button>
      </div>
    </header>
  );
}

export default Header;
