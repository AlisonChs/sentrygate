import { useContext } from "react";
import Context from "../../contexts/Context";
import "./main.css";
import { MainCoordinator } from "./MainCoordinator";
import { MainStudent } from "./MainStudent";

export function Main() {

  const { typeUser } = useContext(Context)

  function contentMain() {
    if(typeUser === 'coordenador') {
      return <MainCoordinator />
    } else if(typeUser === 'professor') {
      return <MainStudent />
    } else {
      return <MainStudent />
    }
  }

  return (
    contentMain()
  );
}
