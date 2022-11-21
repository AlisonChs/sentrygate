import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

const LightToolTip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme, visibility }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#654C8F',
      visibility: visibility ? 'visible' : 'hidden',
      color: 'white',
      fontSize: 11,
    },
  }));

  export default LightToolTip;