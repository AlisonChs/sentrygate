import "./style.css";
import {
  ChartLineUp,
  Clock,
  File,
  Gear,
  Layout,
  List,
  UserCircle,
  WarningCircle,
  Wrench,
} from "phosphor-react";
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router";

export function Navbar() {

  const navigate = useNavigate()

  function goProfile() {
    navigate('/profile')
  }

  return (
    <div className="navbar">
      <div className="navbarVertical">
        <div className="divNavbar">
          <p></p>
          <div className="iconDiv">
            <Layout size={30} weight="regular" color="white" className="icon" />
            <p>Painel de controle</p>
          </div>

          <div className="iconDiv">
            <ChartLineUp
              size={30}
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
            <Clock size={30} weight="regular" color="white" className="icon" />
            <p>Calendario de Notas</p>
          </div>

          <div className="iconDiv">
            <WarningCircle
              size={30}
              weight="regular"
              color="white"
              className="icon"
            />
            <p>Avisos e notificações</p>
          </div>

          <div className="iconDiv">
            <File size={30} weight="regular" color="white" className="icon" />
            <p>Regulamento escolar</p>
          </div>

          <div className="iconDiv">
            <List size={30} weight="regular" color="white" className="icon" />
            <p>Lista de atividades</p>
          </div>
        </div>

        <div className="divNavbar">
          <p></p>

          <div className="iconDiv">
            <Gear size={30} weight="regular" color="white" className="icon" />
            <p>Averiguação do sistema</p>
          </div>
          <div className="iconDiv" onClick={goProfile}>
            <Avatar alt='Victor' src="https://github.com/Victor-HM.png" sx={{ width: 30, height: 30 }} />
            <p>Perfil</p>
          </div>
        </div>
      </div>
    </div>
  );
}
