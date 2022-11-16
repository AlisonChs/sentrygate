
import './stylesheet/style.css'

import { Slider } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
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

export default function Frequencia () {

    const marks = [
        {
          value: 0,
          label: '0%',
        },
        {
          value: 15,
          label: '15%',
        },
        {
          value: 30,
          label: '30%',
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

      const [frequency, setFrequency] = useState(57);

      function valuetext(value) {
        return `${value}%`;
      }

      return (
        <Box sx={{ width: 500, height: 150, marginLeft: 10}}>
          <b className='progresso_title'>Progresso do seu curso </b>
          <CustomizedSlider
            aria-label="progresso escolar"
            sx={{width: 400, marginTop: 4}}
            color='secondary'
            value={frequency}
            getAriaValueText={valuetext}
            step={10}
            marks={marks}
            valueLabelDisplay="on"
          />
      </Box>
      )

}