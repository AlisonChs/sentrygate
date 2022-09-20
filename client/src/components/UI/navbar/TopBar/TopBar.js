import "./style.css";
import LightTooltip from "../../tip/LightToolTip";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Avatar, Skeleton } from "@mui/material";
import { useNavigate } from "react-router";


export default function TopBar (props) {  

  const navigate = useNavigate()

  function goProfile() {
    navigate('/profile')
  }

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


            {!isLoading ? (
              <LightTooltip title='Minha conta'>
               <Avatar alt='Victor' onClick={goProfile} src="https://github.com/Victor-HM.png" sx={{ width: 30, height: 30 }} />
              </LightTooltip>
              ) : (
                <Skeleton variant="circular"  sx={{ bgcolor: '#310A6E' }} width={40} height={40} />
            )}  

       
        </div>
      </div>
  );
}
