import "./style.css";
import { useState, useEffect } from "react";
import Skeleton from '@mui/material/Skeleton';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import LightToolTip from '../../tip/LightToolTip';

export default function BottomBar (props) {  

  const [isLoading, setIsLoading] = useState(true)

  const ArraySkeletons = [];
  const ArrayBottomNavigationAction = [];

  const objects = props.objects;

  

  const numberOfSkeletons = props.numberOfSkeletons;

  function Skeletons () {

    for (let index = 0; index <= numberOfSkeletons; index++) {
      ArraySkeletons.push(<Skeleton variant="circular"  sx={{ bgcolor: '#1d0b3b' }} width={40} height={40} />)
      ArrayBottomNavigationAction.push(<LightToolTip arrow title={objects[index].label}><BottomNavigationAction sx={{ backgroundColor: "#2B1354", fontWeight: 'bold',color: "white", display: 'flex', gap: '0.5rem' }} icon={objects[index].icon} onClick={objects[index].event} /></LightToolTip>)
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
                sx={{backgroundColor: 'transparent', display: 'flex', justifyContent: 'space-around', width: '100vw'}}
                showLabels
                /* value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }} */
              >
                
                {Skeletons()}

              </BottomNavigation>
      </div>
  );
}
