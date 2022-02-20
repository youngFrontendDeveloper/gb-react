import { Link } from "react-router-dom";

function Error() {
  return(
      <>
        <p>Опаньки!</p>
        <p>Похоже, мы заблудились!</p>
        <p>Может, вернемся <Link to="/">Домой</Link>?</p>
      </>
  )
}

export default Error;