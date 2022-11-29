import { Box,       Collapse,       Grow,       Stack, Typography } from "@mui/material";
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { useState, useEffect } from "react";

export function Card ({curso, materia, hasBimestralFilter, bimestralValue}) {

    const corMateria = {
        matematica: 'white'
    }

    function matFormatted () {

        const formattedText = curso.substring(3, 0).toUpperCase()

        return formattedText;
    }

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen((prev) => !prev);
    };

    const handleClickAway = () => {
        setOpen(false);
    };

    return (
        <Stack
        sx={{ml: 55}}
        >
            <ClickAwayListener
                mouseEvent="onMouseDown"
                touchEvent="onTouchStart"
            >
                <Grow in={true}>
                <Box 
                    onClick={handleClick}
                    height={70} 
                    width={900} 
                    sx={{
                        backgroundColor: 'blueviolet', 
                        margin: 1,
                        borderRadius: 3, 
                        borderLeft: 'inset 10px white',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        boxShadow: '1px 0px 10px 0px #120329'
                    }}
                >

                    <Stack flexDirection="row">

                        <Typography color={corMateria.matematica} sx={{ml: 5, fontWeight: 'bolder'}}>{matFormatted()}</Typography>
                        <Typography color={corMateria.matematica} sx={{ml: 5}}>{materia}</Typography>
                        
                        <Stack flexDirection="row" width={300} sx={{position: 'absolute', ml: 60}}>

                    
                                 <Grow in={hasBimestralFilter && open}>
                                    <Typography color={corMateria.matematica}>Nota: <b>5</b></Typography>
                                </Grow>

                                <Grow in={(hasBimestralFilter && !open) || (!hasBimestralFilter)}>
                                    <Typography sx={{flexDirection: 'row', display: 'flex'}}>
                                        <Typography color={corMateria.matematica} ml={0}>{curso} - </Typography>
                                        <Typography color={corMateria.matematica} sx={{ml: 1, fontWeight: 'bolder'}}>Prof. thay</Typography>
                                    </Typography>
                                </Grow>

                        
                        </Stack>
                        
                    </Stack>

                </Box>

                </Grow>

            </ClickAwayListener>

                <Collapse in={open && !hasBimestralFilter}>
                    <Box sx={{backgroundColor: 'white', width: 900, ml: 1, height: 100}} >
              
                            <p>tem filtro nao kk</p>
                        
                    </Box>
                </Collapse>
            
        </Stack>
    )
}