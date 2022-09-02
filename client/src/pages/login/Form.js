import "./form.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { SelectUser } from "./Select";
import { Inputs } from "./Inputs";


export function Form() {

  const [currentUser, setCurrentUser] = useState(null);

  return (
    <div className="flex">
      
       {/* Animação de estrelas do fundo da tela */}
      <div className="stars">
        <div className="starsec"></div>
        <div className="starthird"></div>
        <div className="starfourth"></div>
        <div className="starfifth"></div>
      </div>

      <div className="contentForm">
        <form className="form">
          <div className="screen">
                <div className="contentMid">

            {currentUser === null ? (
              <SelectUser setCurrentUser={setCurrentUser} />
            ) : (
              <Inputs
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            )}
            
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
