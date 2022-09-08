import "./style.css";
import { Link } from "react-router-dom";
import Skeleton from '@mui/material/Skeleton';


export default function BottomBar () {  

  return (
      <div className="bottomBar">
        
        <Skeleton variant="circular"  sx={{ bgcolor: '#1d0b3b' }} width={40} height={40} />
        <Skeleton variant="circular"  sx={{ bgcolor: '#1d0b3b' }} width={40} height={40} />
        <Skeleton variant="circular"  sx={{ bgcolor: '#1d0b3b' }} width={40} height={40} />
        <Skeleton variant="circular"  sx={{ bgcolor: '#1d0b3b' }} width={40} height={40} />
        <Skeleton variant="circular"  sx={{ bgcolor: '#1d0b3b' }} width={40} height={40} />

    
      </div>
  );
}
