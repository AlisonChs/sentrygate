import { Box, Stack } from "@mui/material";
import { useState } from "react";

export default function Overall () {

    const [overAllMedia, setOverAllMedia] = useState(9)

    return (
        <Box sx={{ width: '100%', height: '100%', color: 'white', display: `flex`, alignItems: `center`, flexDirection: `column`, justifyContent: `center`}}>
                    <p className='progresso_title'> Análise geral do aluno </p>
            <Stack sx={{flexDirection: `row`}}>
                <Box sx={{marginRight: 1, width: 40, height: 40, borderRadius: 5, backgroundColor: `#361F5C`, display: `flex`, alignItems: `center`, justifyContent: `center`}}>
                    <span>{overAllMedia - 1}</span>
                </Box>
                <Box sx={{marginRight: 1, width: 50, height: 50, borderRadius: 10, backgroundColor: `#210D41`, display: `flex`, alignItems: `center`, justifyContent: `center`, boxShadow:` 10px 10px 40px 1px rgba(33,13,65,1);` }}>
                    <span>{overAllMedia}</span>
                </Box>
                <Box sx={{marginRight: 1, width: 40, height: 40, borderRadius: 5, backgroundColor: `#120329`, display: `flex`, alignItems: `center`, justifyContent: `center`}}>
                    <span>{overAllMedia + 1}</span>
                </Box>
            </Stack>
        </Box>
    )
}