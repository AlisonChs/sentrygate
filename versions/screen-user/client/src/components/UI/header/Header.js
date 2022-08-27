import "./header.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../provider/Auth";

export function Header() {
  const { user, setUser } = useContext(AuthContext)
  const navigate = useNavigate()
  function logoff() {
    setUser({ auth: false })

    navigate('/')
  }

  return (
      <div className="header">
        <div className="logo">
          <Link to="/">
            <h1>
              Sentry <span>Gate</span>
            </h1>
          </Link>
        </div>
        <div className="topics">
            <Link to="/main" className="links">
              Home
            </Link>

            <Link to="/about" className="links">
              Sobre
            </Link>
        <button className="logoff" onClick={logoff} >Desconectar</button>
        </div>
      </div>
  );
}
