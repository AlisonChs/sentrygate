import "./style.css";
import { useState, useEffect } from "react";
import { Avatar } from "@mui/material";
import OrangeLogo from "../../svg/OrangeLogo";
import IconButton from '@mui/material/IconButton';
// Icones do MATERIAL ICONS

import Skeleton from '@mui/material/Skeleton';
import HomeIcon from "@mui/icons-material/Home"
import Settings from "@mui/icons-material/Settings";
import School from "@mui/icons-material/School";
import NotificationsIcon from '@mui/icons-material/Notifications';
import PostAddIcon from '@mui/icons-material/PostAdd';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export default function LeftBar () {

  const [svgStyle, setSvgStyle] = useState("svg");
  const [leftBarStyle, setLeftBarStyle] = useState("leftBar");
  
  const handleMenu = () => {
    let isOpen = svgStyle === "svg";
    !isOpen ? setSvgStyle("svg") : setSvgStyle("svgOpen");
    !isOpen ? setLeftBarStyle("leftBar") : setLeftBarStyle("leftBarOpen");
  }

  const logoStyle = {
    marginBottom: "5rem",
    marginTop: "1.5rem",
    padding: "0"
  }

  const logoTitleStyle = {
    marginTop: "1.5rem",
    fontWeight: "bold"
  }

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2800)
  }, [])


  return (
    <div className={leftBarStyle}>
      <div className="navbarVertical">
        <div className="divNavbar">
          <div className="iconDiv" style={logoStyle}>
            <IconButton aria-label="open menu" onClick={handleMenu} >
              <OrangeLogo className={svgStyle}/>
            </IconButton> 
            <h2 style={logoTitleStyle}>Sentry <span>Gate</span></h2>
          </div>

          <div className="iconDiv">

            {!isLoading ? (
              <>
              {/* Em vez do avatar, coloquem o icone do MUI */}
                <HomeIcon alt='homepage' sx={{ width: 28, height: 28, color: "white" }} />
                <p>Painel de controle</p>
              </>
            ) : (     
              <Skeleton variant="circular"  sx={{ bgcolor: '#310A6E' }} width={28} height={28} />
            )}

          </div>

          <div className="iconDiv">

          {!isLoading ? (
              <>
              {/* Em vez do avatar, coloquem o icone do MUI */}
                <TrendingUpIcon alt='desempenho' sx={{ width: 28, height: 28, color: "white" }} />
                <p>Desempenho</p>

              </>
            ) : (     
              <Skeleton variant="circular"  sx={{ bgcolor: '#310A6E' }} width={28} height={28} />
            )}

          </div>
        </div>

        <div className="divNavbar">
          <p></p>

          <div className="iconDiv">

          {!isLoading ? (
              <>
              {/* Em vez do avatar, coloquem o icone do MUI */}
                <CalendarMonthIcon alt='calendario de notas' sx={{ width: 28, height: 28, color: "white" }} />
                <p>Calendario de Notas</p>

              </>
            ) : (     
              <Skeleton variant="circular"  sx={{ bgcolor: '#310A6E' }} width={28} height={28} />
            )}
          </div>

          <div className="iconDiv">
          {!isLoading ? (
              <>
              {/* Em vez do avatar, coloquem o icone do MUI */}
                <NotificationsIcon alt='notificações' sx={{ width: 28, height: 28, color: "white"  }} />
                <p>Avisos e notificações</p>

              </>
            ) : (     
              <Skeleton variant="circular"  sx={{ bgcolor: '#310A6E' }} width={28} height={28} />
            )}

          </div>

          <div className="iconDiv">

          {!isLoading ? (
              <>
              {/* Em vez do avatar, coloquem o icone do MUI */}
                <PostAddIcon alt='regulamento escolar' sx={{ width: 28, height: 28, color: "white" }} />
                <p>Regulamento escolar</p>

              </>
            ) : (     
              <Skeleton variant="circular"  sx={{ bgcolor: '#310A6E' }} width={28} height={28} />
            )}
          </div>

          
        </div>

        <div className="divNavbar">
          <p></p>

          <div className="iconDiv">
          {!isLoading ? (
              <>
              {/* Em vez do avatar, coloquem o icone do MUI */}
                <School alt='Tarefas' sx={{ width: 28, height: 28, color:"white" }} />
                <p>Lista de atividades</p>

              </>
            ) : (     
              <Skeleton variant="circular"  sx={{ bgcolor: '#310A6E' }} width={28} height={28} />
            )}
          </div>

          <div className="iconDiv">
            {isLoading ? (
              <Skeleton variant="circular"  sx={{ bgcolor: '#310A6E', marginTop:'2.3rem'  }} width={28} height={28} />
            ) : (
              <>
                <Settings sx={{ width: 28, height: 28, color:"white" }} />
                <p>Averiguação do sistema</p>
              </>
            )}
            { /*  */ }
            
          </div>
          
        </div>
      </div>
    </div>
  );
}
