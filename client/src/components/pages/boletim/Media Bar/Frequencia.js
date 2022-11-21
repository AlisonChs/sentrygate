import { Box, CircularProgress, Skeleton, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function Frequencia () {

    const [isLoading, setIsLoading] = useState(true);

    const [frequencia, setFrequencia] = useState(27)
    const [frequencyValue, setFrequencyValue] = useState(0);

    useEffect(() => {
        setFrequencyValue(frequencia)
      }, []);

    return (
        <Box sx={{ width: '100%', height: '100%', color: 'white'}}>
            <Stack sx={{ width: '100%', height: '100%'}} justifyContent="center" alignItems="center">
                    <p className='progresso_title'> Frequência escolar </p>
                <Stack direction='row' spacing={5}>
                    <Stack justifyContent="center" alignItems="center">

                        <CircularProgress
                            variant="determinate" 
                            value={frequencyValue} 
                            size={65} 
                            sx={{
                                color: 
                                    (frequencia >= 70 && ("blueviolet")) || 
                                    (frequencia >= 50 && ("orange")) || 
                                    (frequencia < 50 && ("red"))
                            }}
                        />

                        <Typography variant="caption" component="div" sx={{color: "white", fontSize: `medium`, position: `absolute` }}>
                        {`${frequencyValue}%`}
                        </Typography>
                    </Stack>
                    <Stack>
                        <Typography sx={{fontSize: 'small'}}><b>Aulas dadas: </b> 12</Typography>
                        <Typography sx={{fontSize: 'small'}}><b>Faltas permitidas:</b> 3</Typography>
                        <Typography sx={{fontSize: 'small'}}><b>Faltas totais:</b> 44</Typography>
                    </Stack>
                </Stack>
            </Stack>
        </Box>
    )
}