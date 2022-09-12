import "./style.css";
import { useState, useEffect } from "react";
import Skeleton from '@mui/material/Skeleton';
import PostAddIcon from '@mui/icons-material/PostAdd';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

export default function BottomBar (props) {  

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2800)
  }, [])

  return (
      <div className="bottomBar">

      {isLoading ? (
        <>
          <Skeleton variant="circular"  sx={{ bgcolor: '#1d0b3b' }} width={40} height={40} />
          <Skeleton variant="circular"  sx={{ bgcolor: '#1d0b3b' }} width={40} height={40} />
          <Skeleton variant="circular"  sx={{ bgcolor: '#1d0b3b' }} width={40} height={40} />
          <Skeleton variant="circular"  sx={{ bgcolor: '#1d0b3b' }} width={40} height={40} />
          <Skeleton variant="circular"  sx={{ bgcolor: '#1d0b3b' }} width={40} height={40} />
        </>
      ) : (
        <BottomNavigation
                showLabels
                /* value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }} */
              >
                
                <BottomNavigationAction sx={{ backgroundColor: "#2B1354", color: "white" }} label="Informações extras" icon={<PostAddIcon />} />

              </BottomNavigation>

              /* Ideias para construir quando conseguir tempo

                Criar um componente separado, e sempre que o bottomBar() for invocado, especificar o número de ferramentas,
                o icone de cada e a label, tudo através das props.

              */
      )}

      
        
        

    
      </div>
  );
}
