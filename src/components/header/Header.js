import "./header.css";
import { Link, useNavigate } from "react-router-dom";
import { Popover } from "@headlessui/react";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../data/firebase";

export function Header() {
    const [isShowing, setIsShowing] = useState(false)
    const navigate = useNavigate()

    const logout = e => {
      signOut(auth)
      .then(() => {
        navigate('/')
          })
        .catch(err => alert(err.message))
      
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
        <Link to="/" className="links">
          Home
        </Link>

        <Popover className="relative">
                <Popover.Button>
                    <a className="links">Sobre</a>
                </Popover.Button>

                <Popover.Panel className="popover">
                        <Link to="/mission" className="linkPopover">Missão</Link>
                        <Link to="/vision" className="linkPopover">Visão</Link>
                        <Link to="/about" className="linkPopover">Quem somos?</Link>
                </Popover.Panel>
        </Popover>
        <Link to="/" className="links">
          Contato
        </Link>
        <button  className="logoff"
        onClick={logout}>
          Desconectar
        </button>
      </div>
    </div>
  );
}
