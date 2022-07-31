import "./style.css";
import {
  ChartLineUp,
  Clock,
  Dog,
  File,
  Gear,
  Layout,
  List,
  UserCircle,
  WarningCircle,
  Wrench,
  XCircle,
} from "phosphor-react";

export function Navbar() {
  return (
    <div className="navbarVertical">

      <div className="divNavbar">
        <p></p>
        <div className="iconDiv">
          <Layout size={25} weight="regular" color="white" className="icon" />
          <p>Painel de controle</p>
        </div>

        <div className="iconDiv">
          <ChartLineUp
            size={25}
            weight="regular"
            color="white"
            className="icon"
          />
          <p>Desempenho</p>
        </div>
      </div>

      <div className="divNavbar">
        <p></p>

        <div className="iconDiv">
          <Clock size={25} weight="regular" color="white" className="icon" />
          <p>Calendario de Notas</p>
        </div>

        <div className="iconDiv">
          <WarningCircle
            size={25}
            weight="regular"
            color="white"
            className="icon"
          />
          <p>Avisos e notificações</p>
        </div>

        <div className="iconDiv">
          <File size={25} weight="regular" color="white" className="icon" />
          <p>Regulamento escolar</p>
        </div>

        <div className="iconDiv">
          <List size={25} weight="regular" color="white" className="icon" />
          <p>Lista de atividades</p>
        </div>
      </div>

      <div className="divNavbar">
        <p></p>
        <div className="iconDiv">
          <Wrench size={25} weight="regular" color="white" className="icon" />
          <p>Solicitação de suporte</p>
        </div>

        <div className="iconDiv">
          <Gear size={25} weight="regular" color="white" className="icon" />
          <p>Averiguação do sistema</p>
        </div>
        <div className="iconDiv">
          <UserCircle size={25} weight="regular" color="white" className="icon" />
          <p>Perfil</p>
        </div>
      </div>
    </div>
  );
}
