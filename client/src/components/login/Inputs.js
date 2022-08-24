import './form.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
export function Inputs({ currentUser, setCurrentUser }) {
  return (
    <div>
      <h2 className="formTitle">
        Olá, <span> {currentUser}</span>
      </h2>
      <input type="email" name="email" placeholder="Insira o Email" />
      <input type="password" name="password" placeholder="Insira a senha" />
      <FontAwesomeIcon
        className="backButton"
        onClick={() => setCurrentUser(null)}
        size="xl"
        color="white"
        icon={faAngleLeft}
      />
      <button type="submit" className="button">
        Entrar
      </button>
    </div>
  );
}
