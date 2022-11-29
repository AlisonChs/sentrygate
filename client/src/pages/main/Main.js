import { useContext } from "react";
import Context from "../../contexts/Context";
import "./main.css";
import { MainCoordinator } from "./MainCoordinator";
import { MainStudent } from "./MainStudent";
import { MainTeacher } from "./MainTeacher";

export function Main() {

  const { typeUser } = useContext(Context)

  function contentMain() {
    if(typeUser === 'coordenador') {
      return <MainCoordinator />
    } else if(typeUser === 'professor') {
      return <MainTeacher />
    } else {
      return <MainStudent />
    }
  }

  return (
    contentMain()
  );
}
