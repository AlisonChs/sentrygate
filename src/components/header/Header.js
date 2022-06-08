import "./header.css";
import { Link, useNavigate } from "react-router-dom";
import { Popover } from "@headlessui/react";
import { signOut } from "firebase/auth";
import { auth } from "../data/firebase";

export function Header() {
  const navigate = useNavigate();

  const logout = (e) => {
    signOut(auth)
      .then(() => {
        navigate("/form");
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="header">
      <div className="logo">
        <Link to="/form">
          <h1>
            Sentry <span>Gate</span>
          </h1>
        </Link>
      </div>
      <div className="topics">
        <Link to="/main" className="links">
          Home
        </Link>

        <div className="relative">
          <button>
            <Link className="links" to='/about'>Sobre</Link>
          </button>
        </div>
        <Link to="/" className="links">
          Contato
        </Link>
        <button className="logoff" onClick={logout}>
          Desconectar
        </button>
      </div>
    </div>
  );
}
