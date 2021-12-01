import { useSelector } from "react-redux";
import { Navigate, Route } from "react-router";
import { selectAuth } from "../../store/profile/selectors";

const PrivateRoute = ({ children }) => {
  const authed = useSelector(selectAuth);

  return authed ? children : <Navigate to="/warning" replace />;
};

export default PrivateRoute;
