import "./style.css";
import { Avatar } from "@mui/material";
import OrangeLogo from "../../svg/OrangeLogo";
import IconButton from '@mui/material/IconButton';

export default function LeftBar () {

  const openBar () = {
    
  }
  

  return (
    <div className="leftBar">
      <div className="navbarVertical">
        <div className="divNavbar">
        <IconButton aria-label="open menu" onClick={openBar}>
        <OrangeLogo className="svg"/>
</IconButton>

          <div className="iconDiv">
            <Avatar
              size={30}
              weight="regular"
              color="white"
            
            />
            <p>Painel de controle</p>
          </div>

          <div className="iconDiv">
            <Avatar
              size={30}
              weight="regular"
              color="white"
            
            />
            <p>Desempenho</p>
          </div>
        </div>

        <div className="divNavbar">
          <p></p>

          <div className="iconDiv">
            <Avatar size={30} weight="regular" color="white" />
            <p>Calendario de Notas</p>
          </div>

          <div className="iconDiv">
            <Avatar
              size={30}
              weight="regular"
              color="white"
            
            />
            <p>Avisos e notificações</p>
          </div>

          <div className="iconDiv">
            <Avatar size={30} weight="regular" color="white" />
            <p>Regulamento escolar</p>
          </div>

          <div className="iconDiv">
            <Avatar size={30} weight="regular" color="white" />
            <p>Lista de atividades</p>
          </div>
        </div>

        <div className="divNavbar">
          <p></p>

          <div className="iconDiv">
            <Avatar size={30} weight="regular" color="white" />
            <p>Averiguação do sistema</p>
          </div>
          
        </div>
      </div>
    </div>
  );
}
