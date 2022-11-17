import { Box, Stack } from "@mui/material";

export default function Overall () {

    return (
        <Box sx={{ width: '100%', height: '100%', color: 'white'}}>
            <Stack sx={{ width: '100%', height: '100%'}} justifyContent="center" alignItems="center">
                    <p className='progresso_title'> Análise geral do aluno </p>
            </Stack>
        </Box>
    )
}