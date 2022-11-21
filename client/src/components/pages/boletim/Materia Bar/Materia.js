import { Box, Button, Typography } from "@mui/material";

export function Materia ({materia, curso, isButtonHover}) {

    return (
        <Box height='100%' width='100%' sx={{backgroundColor: isButtonHover ? '#442A71' : '#361F5C', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: 3   }}>  

           <Typography component='h1'> {curso} </Typography>
           <Typography component='span'> {materia} </Typography>

        </Box>
    )
}