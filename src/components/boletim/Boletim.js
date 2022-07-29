import { useState } from "react";
import { Navbar } from "../navbar/Navbar";
import "./style.css";
import { UserCircle } from "phosphor-react";

export function Boletim() {
  const [isNavbar, setIsNavbar] = useState(false);

  return (
    <div className="boletimContainer">
      <div className="navbarDisable" onClick={() => setIsNavbar(true)}>
          sad
        </div>

      {isNavbar ? <Navbar /> : 
      <div className='photo'>
          <UserCircle size={200} weight="fill" />
      </div>
      }

      <div className="boletimContent"></div>
    </div>
  );
}
