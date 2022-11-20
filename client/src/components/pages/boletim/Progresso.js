
import './stylesheet/style.css'

import { Slider, Stack } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { styled } from '@mui/material/styles';

const CustomizedSlider = styled(Slider)`

  & .MuiSlider-root {
    width: 300
  }

  span {
    color: inherit
  }


  & .MuiSlider-markLabel {
    color: white;
    font-size: 0.5em
  }

  & .MuiSlider-valueLabel {
    background-color: white;
  }

  & .MuiSlider-thumb {
    border-radius: 5px;
    width: 5px
  }
`;

export default function Progresso () {

    const marks = [
        {
          value: 0,
          label: '0%',
        },
        {
          value: 10,
          label: '10%',
        },
        {
          value: 20,
          label: '20%',
        },
        {
          value: 30,
          label: '30%',
        },
        {
          value: 40,
          label: '40%',
        },
        {
          value: 50,
          label: '50%',
        },
        {
          value: 60,
          label: '60%',
        },
        {
          value: 70,
          label: '70%',
        },
        {
          value: 80,
          label: '80%',
        },
        {
          value: 90,
          label: '90%',
        },
        {
          value: 100,
          label: '100%',
        },
      ];

      const [curso, setCurso] = useState(`Análise e desenvolvimento de sistemas`);
      const [progresso, setProgresso] = useState(57);
      const [progressValue, setProgressValue] = useState(0);

      function valuetext(value) {
        return `${value}%`;
      }

      useEffect(() => {
        setProgressValue(progresso);
      }, []);

      return (
        <Box sx={{ width: '100%', height: '100%'}}>
          <Stack justifyContent="center" alignItems="center" sx={{ width: "100%", height: "100%"}}> 
            <p className='progresso_title'> {curso} - em progresso </p>
              <CustomizedSlider
                aria-label="progresso escolar"
                sx={{width: 400, marginTop: 4}}
                color='secondary'
                value={progressValue}
                getAriaValueText={valuetext}
                step={10}
                marks={marks}
                valueLabelDisplay="on"
              />
            </Stack>
      </Box>
      )

}