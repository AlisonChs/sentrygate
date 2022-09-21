import "./style.css";
import LightTooltip from "../../tip/LightToolTip";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Avatar, Skeleton } from "@mui/material";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function TopBar (props) {  

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000)
  }, [])

  return (
      <div className="topBar">
        <div className="logo">

            {!isLoading ? (<h1>{props.PageTitle} <span> {props.PageSpan} </span></h1>) : ( <Skeleton width={300} height={70}/> ) }
            
        </div>
        <div className="topics">

        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose}>Perfil</MenuItem>
        <MenuItem onClick={handleClose}>Minhas Informações</MenuItem>
        <MenuItem onClick={handleClose} sx={{color: 'red'}}>Sair da conta</MenuItem>
      </Menu>


            {!isLoading ? (
              <LightTooltip followCursor title='Minha conta'>
               <Avatar 
                id="demo-positioned-button"
                aria-controls={open ? 'demo-positioned-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                alt='Victor'
                sx={{ width: 30, height: 30 }} 
                />
              </LightTooltip>
              ) : (
                <Skeleton variant="circular"  sx={{ bgcolor: '#310A6E' }} width={40} height={40} />
            )}  

       
        </div>
      </div>
  );
}
