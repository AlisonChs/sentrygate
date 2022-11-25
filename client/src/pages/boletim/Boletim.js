import { useEffect, useState } from "react";
import "./style.css";

import Skeleton from "@mui/material/Skeleton";
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import TopBar from "../../components/UI/navbar/TopBar/TopBar";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import {Divider} from "@mui/material";
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
import { Card } from "../../components/pages/boletim/Notas/Card";
import { Folder } from "../../components/UI/breadcrump/Folder";

export function Boletim() {
  const [isLoading, setIsLoading] = useState(true);

  const actions = [
    { icon: <FileCopyIcon />, name: 'Copiar notas' },
    { icon: <SaveIcon />, name: 'Salvar boletim' },
    { icon: <PrintIcon />, name: 'Printar boletim' },
    { icon: <ShareIcon />, name: 'Compartilhe seu boletim' },
  ];

  const [filter, setFilter] = useState(1)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  const materias = [
    {
      id: 1,
      curso: "ADS",
      materia: "Protocolo de internet",
    },
    {
      id: 2,
      curso: "ADS",
      materia: "Análise de sistemas",
    },
    {
      id: 3,
      curso: "ADS",
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

  const [value, setValue] = useState(null);
  
  const [hasBimestralFilter, setHasBimestralFilter] = useState(false)

  const [courseFilter, setCourseFilter] = useState(``);

  useEffect(() => { 
    console.log(value) 
  })

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Stack>
      <TopBar PageTitle="Boletim" PageSpan="Escolar" />

      <Stack sx={{position: `absolute`, mt: 0.5, top: 0, display: `flex`, width: `100%`, alignItems: `center`}}>
        <Folder setMateria={setValue} setCourseFilter={setCourseFilter} setHasBimestralFilter={setHasBimestralFilter}/>
      </Stack>
 
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

           
          <TabContext value={value}>

            <Stack 
              direction="row" 
              justifyContent="space-around"
              alignItems="center" 
              sx={{height: 50, width: '100%', backgroundColor: '#442A71'}}
              divider={<Divider sx={{color: 'white'}} orientation="vertical" flexItem />}
            >
            

            <TabList indicatorColor="secondary" onChange={handleChange}>
            
            
            {
              materias
              .filter(index => index.curso === courseFilter)
              .map((index) => {
                return (
                  <Tab sx={{color: 'white', '&:hover': {color: 'white'}, '&:blur': {color: 'white'}, '&:focus': {color: 'white', '&:focus': {borderBottom: 'white'}}}} label={index.materia} value={index.materia} />
                )
              })
            }
          
        </TabList>

        </Stack>
        {/*
            materias.map((index) => {
              return (
              <TabPanel value="1">Item One</TabPanel>
              )
            })
          */}

        {
          materias
            .filter(index => index.curso === courseFilter)
            .map((index) => {
            return (
              <TabPanel value={index.materia}>
                <Card hasBimestralFilter={hasBimestralFilter} curso={index.curso} materia={index.materia} />
              </TabPanel>
            )
          })
        }

      </TabContext>

        
      
        { 

        // Caso nao tenha filtros de curso, ele retornará todos os cards.
        // Caso tenha filtros de curso, ele retornará todos cards caso o
        // usuario nao tenha selecionado uma materia especifica
        
        courseFilter === null ? (
          materias.map((index) => {
            return (
              <Card hasBimestralFilter={hasBimestralFilter} curso={index.curso} materia={index.materia} />
            )
          })) : (
            value === null && (
            materias
            .filter(index => index.curso === courseFilter)
            .map((index) => {
              return (
                <Card hasBimestralFilter={hasBimestralFilter} curso={index.curso} materia={index.materia} />
              )
            }))
          )
        }


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

          { materias.map(() => {
            return (
              <Skeleton sx={{ width: 900, height: 130, borderRadius: 5}} />
            )
            })}
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
