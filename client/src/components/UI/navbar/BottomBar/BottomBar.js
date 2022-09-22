import "./style.css";
import { useState, useEffect } from "react";
import Skeleton from '@mui/material/Skeleton';
import PostAddIcon from '@mui/icons-material/PostAdd';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

export default function BottomBar (props) {  

  const [isLoading, setIsLoading] = useState(true)

  const ArraySkeletons = [];
  const ArrayBottomNavigationAction = [];

  const numberOfElements = props.numberOfElements;

  function Skeletons () {

    

    for (let index = 0; index <= numberOfElements; index++) {
      ArraySkeletons.push(<Skeleton variant="circular"  sx={{ bgcolor: '#1d0b3b' }} width={40} height={40} />)
      ArrayBottomNavigationAction.push(<BottomNavigationAction sx={{ backgroundColor: "#2B1354", color: "white" }} label="Informações extras" icon={<PostAddIcon />} />)
    }

    return isLoading ? ArraySkeletons : ArrayBottomNavigationAction;
  }

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2800)
  }, [])

  return (
      <div className="bottomBar">

        <BottomNavigation
                showLabels
                /* value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }} */
              >
                
                {Skeletons}

              </BottomNavigation>
      </div>
  );
}
