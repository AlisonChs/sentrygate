import { useEffect, useState } from "react";
import "./style.css";

import Skeleton from "@mui/material/Skeleton";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import PostAddIcon from "@mui/icons-material/PostAdd";
import CommentIcon from "@mui/icons-material/Comment";
import Modal from "@mui/material/Modal";
import { TableBoletim } from "./TableBoletim";

import TopBar from "../../components/UI/navbar/TopBar/TopBar";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { Button, Divider } from "@mui/material";
import Progresso from "../../components/pages/boletim/Media Bar/Progresso";
import Frequencia from "../../components/pages/boletim/Media Bar/Frequencia";
import Overall from "../../components/pages/boletim/Media Bar/Overall";

import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import { Materia }from "../../components/pages/boletim/Materia Bar/Materia";

export function Boletim() {
  const [isLoading, setIsLoading] = useState(true);

  const [modulo, setModulo] = useState("");
  const [hasObservation, setHasObservation] = useState(true);

  const actions = [
    { icon: <FileCopyIcon />, name: 'Copiar notas' },
    { icon: <SaveIcon />, name: 'Salvar boletim' },
    { icon: <PrintIcon />, name: 'Printar boletim' },
    { icon: <ShareIcon />, name: 'Compartilhe seu boletim' },
  ];

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  const materias = [
    {
      id: 1,
      curso: "A.D.S",
      materia: "Protocolo de internet",
    },
    {
      id: 2,
      curso: "A.D.S",
      materia: "Análise de sistemas",
    },
    {
      id: 3,
      curso: "A.D.S",
      materia: "Sistemas embarcados",
    },
    {
      id: 4,
      curso: "Ensino médio",
      materia: "Matemática",
    },
    {
      id: 5,
      curso: "Ensino médio",
      materia: "Física",
    },
    {
      id: 6,
      curso: "Ensino médio",
      materia: "Química",
    },
  ]

  const [isButtonHover, setIsButtonHover] = useState(false)

  return (
    <Stack>
      <TopBar PageTitle="Boletim" PageSpan="Escolar" />

      {!isLoading ? (
        <>
          <Stack 
            direction="row" 
            sx={{height: 200, width: '100%', backgroundColor: '#442A71'}}
            divider={<Divider sx={{color: 'white'}} orientation="vertical" flexItem />}
          >
            <Progresso />
            <Overall />
            <Frequencia />
          </Stack>

          <Stack sx={{height: 30, color: 'white', justifyContent: 'center', alignItems: 'center', fontSize: 'small'}} >Selecione uma matéria</Stack>

          <Stack 
            direction="row" 
            sx={{height: 100, width: '100%', backgroundColor: '#361F5C'}}
            divider={<Divider sx={{color: 'white'}} orientation="vertical" flexItem />}
          >

          {
            materias.map((index) => {
              return (
                <Materia
                  onHover={() => {setIsButtonHover(!isButtonHover)}}
                  isButtonHover={isButtonHover}
                  key={index.id} 
                  curso={index.curso}
                  materia={index.materia}
                /> 
              )
            })
          }

          </Stack>
        </>
      ) : (
        <>
          <Stack 
            direction="row" 
            sx={{height: 200, width: '100%', backgroundColor: '#442A71'}}
            divider={<Divider sx={{color: 'white'}} orientation="vertical" flexItem />}
          >
            <Skeleton sx={{ width: '100%', height: '100%'}} />
            <Skeleton sx={{ width: '100%', height: '100%'}} />
            <Skeleton sx={{ width: '100%', height: '100%'}} />
          </Stack>

          <Stack 
          direction="row" 
          sx={{height: 100, width: '100%', backgroundColor: '#361F5C'}}
          divider={<Divider sx={{color: 'white'}} orientation="vertical" flexItem />}
          >

          {materias.map(() => <Skeleton sx={{ width: '100%', height: '100%'}} /> )}

          </Stack>
        </>
      )}

      { /*

      <div className="boletimContainer">
        <div className="boletimContent">

          {!isLoading ? (
              <TableBoletim />
          ) : (
            <>
              <Skeleton variant="rounded" width={700} height={300} />
              <Skeleton variant="rounded" width={500} height={300} />
            </>
          )}
        </div>
      </div>

      <BottomBar
        objects={ArrayActions}
        numberOfSkeletons={ArrayActions.length - 1}
          /> */}

    <Box sx={{ color: 'white', position: 'absolute', bottom: 0, right: 30, height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
        <SpeedDial
        
          ariaLabel="Actions buttom"
          icon={<SpeedDialIcon sx={{color: 'white'}}/>}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
            />
          ))}
        </SpeedDial>
      </Box>
          
    </Stack>
  );
}
