import LightTooltip from "../../tip/LightToolTip";
import { useEffect, useState } from "react";
import { AppBar, Avatar, Box, Button, IconButton, Modal, Skeleton, Stack, Toolbar, Typography } from "@mui/material";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { Folder } from "../../breadcrump/Folder";


export default function TopBar (props) {  

  const [open, setOpen] = useState(false);

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000)
  }, [])

  return (

    <Box sx={{ flexGrow: 1, width: `100vw` }}>
      
      <AppBar position="static" sx={{backgroundColor:"#2B1354"}}>
        <Toolbar>

          {isLoading ? (
            <>
              <Skeleton width={100} height={50} />
              <Skeleton width={200} height={50} />
            </>

            ) : (
          <Stack sx={{flexDirection: `row`, ml: `5%`}}>
            <Typography variant="h6" component="div" sx={{fontWeight: 'bold'}}>
              {props.PageTitle}
            </Typography>
            
              <Typography variant="h6" component="span" sx={{ flexGrow: 1, fontWeight: 'bold', marginLeft: 1 }}>
              {props.PageSpan}
              </Typography>

          </Stack>
          )}

          {isLoading && (
            <Stack sx={{marginLeft: 30, flexDirection: "row"}}>
              <Skeleton variant="circular" width={30} height={30} sx={{mr: 1, mt: 1}} />
              <Skeleton width={700} height={50} />
            </Stack>
          )}
          
        </Toolbar>
      </AppBar>
      
    </Box>
  );
}