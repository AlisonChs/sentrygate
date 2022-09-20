import "./style.css";
import { useState, useEffect } from "react";
import Skeleton from '@mui/material/Skeleton';
import { Stack } from "@mui/material";

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

        <Stack direction="row" spacing={2}>



        </Stack>

              /* Ideias para construir quando conseguir tempo

                Criar um componente separado, e sempre que o bottomBar() for invocado, especificar o número de ferramentas,
                o icone de cada e a label, tudo através das props.

              */
      )}

      
        
        

    
      </div>
  );
}
