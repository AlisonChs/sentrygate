import "./header.css";
import { Link, useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();
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
        <div className="asd">
          <Link to="/main" className="links">
            Home
          </Link>

          <Link to='/about' className="links" >
            Sobre
          </Link>

          <Link to="/" className="links">
            Contato
          </Link>

        </div>

      </div>
        <button className="logoff">
          Desconectar
        </button>
    </div>
  );
}
