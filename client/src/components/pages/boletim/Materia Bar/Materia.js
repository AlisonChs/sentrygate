import { Box, Button, Typography } from "@mui/material";
import Tab from '@mui/material/Tab';
import { useState } from "react";

export function Materia ({materia, curso, allyProps}) {
      
      function a11yProps(index) {
        return {
          id: `simple-tab-${index}`,
          'aria-controls': `simple-tabpanel-${index}`,
        };
      }

    return (
          <Tab label={materia} sx={{fontWeight: "bold"}} {...a11yProps(allyProps)} />
    )
}