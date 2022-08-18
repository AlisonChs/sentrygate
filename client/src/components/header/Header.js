import "./header.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";


export function Header() {

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
        <button className="logoff" >Desconectar</button>
      </div>
    </div>
  );
}
