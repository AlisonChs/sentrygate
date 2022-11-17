import { Box, CircularProgress, Stack, Typography } from "@mui/material";
import { useState } from "react";

export default function Frequencia () {

    const [frequencia, setFrequencia] = useState(50)

    return (
        <Box sx={{ width: 500, height: 150}}>
            <Stack justifyContent="center" alignItems="center" sx={{ width: 500, height: 150}}>
                <p className='progresso_title'> Frequencia escolar </p>
                <CircularProgress variant="determinate" value={frequencia} sx={{marginTop: 1}}/>
                <Typography variant="caption" component="div" sx={{color: "white"}}>
                {`${frequencia}%`}
                </Typography>
            </Stack>
        </Box>
    )
}