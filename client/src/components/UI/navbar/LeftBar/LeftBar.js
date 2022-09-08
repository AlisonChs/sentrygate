import "./style.css";
import { useState } from "react";
import { Avatar } from "@mui/material";
import OrangeLogo from "../../svg/OrangeLogo";
import IconButton from '@mui/material/IconButton';

export default function LeftBar () {

  const [svgStyle, setSvgStyle] = useState("svg");
  const [leftBarStyle, setLeftBarStyle] = useState("leftBar");
  
  const handleMenu = () => {
    let isOpen = svgStyle === "svg";
    !isOpen ? setSvgStyle("svg") : setSvgStyle("svgOpen");
    !isOpen ? setLeftBarStyle("leftBar") : setLeftBarStyle("leftBarOpen");
  }

  return (
    <div className={leftBarStyle}>
      <div className="navbarVertical">
        <div className="divNavbar">
        <IconButton aria-label="open menu" onClick={handleMenu}>
        <OrangeLogo className={svgStyle}/>
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
