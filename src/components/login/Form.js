import "./form.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../provider/Auth";

import { SelectUser } from "./Select";
import { Inputs } from "./Inputs";

export function Form() {
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  const [rm, setRM] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState(null);

  const { user, setUser } = useContext(AuthContext);

  function handleSubmit() {
    setUser({ auth: true });

    navigate("/main");
  }

  return (
    <div className="flex">
      <div className="stars">
        <div className="starsec"></div>
        <div className="starthird"></div>
        <div className="starfourth"></div>
        <div className="starfifth"></div>
      </div>

      <div className="contentForm">
        <form className="form">
          <div className="screen">
            <>
              <>
                <div className="contentMid"></div>
              </>
            </>

            <></>

            {currentUser === null ? (
              <SelectUser setCurrentUser={setCurrentUser} />
            ) : (
              <Inputs
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
