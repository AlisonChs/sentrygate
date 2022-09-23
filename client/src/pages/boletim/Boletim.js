import { useEffect, useState } from "react";
import "./style.css";
import Skeleton from '@mui/material/Skeleton';
import BottomBar from "../../components/UI/navbar/BottomBar/BottomBar";
import TopBar from "../../components/UI/navbar/TopBar/TopBar";
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import PostAddIcon from '@mui/icons-material/PostAdd';
import CommentIcon from '@mui/icons-material/Comment';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

export function Boletim() {

  const [isLoading, setIsLoading] = useState(true)
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [modulo, setModulo] = useState('')
  const [hasObservation, setHasObservation] = useState(true)


  const ArrayActions = [
    {
      label: 'Selecionar módulo',
      icon: <PostAddIcon className='navIcon' sx={{width: '2rem', height: '2rem'}} />,
      event: null,
      showAction: 'flex'
    },
    {
      label: 'Projetar boletim',
      icon: <DownloadForOfflineIcon className='navIcon' sx={{width: '2rem', height: '2rem'}} />,
      event: null,
      showAction: 'flex'
    },
    {
      label: 'Observar informações sobre o docente',
      icon: <CommentIcon className='navIcon' sx={{width: '2rem', height: '2rem'}} />,
      event: handleOpen,
      showAction: hasObservation ? 'flex' : 'none'
    }
  ]

  const styleModalDocente = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000)
  }, [])

  return (

    <>

    <TopBar PageTitle="Boletim" PageSpan="Escolar"></TopBar>

    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box style={styleModalDocente}>
        
      </Box>
    </Modal>

    <div className="boletimContainer">

      <div className="boletimContent">

        { /* <div className="modulo">
          <p>Status - {modulo} Série </p>

          <select name="modulo" id="modulo" onChange={e => setModulo(e.target.value)} >
            <option value="">Selecionar Modulo de Série</option>
            <option value="1">1 Série</option>
            <option value="2">2 Série</option>
            <option value="3">3 Série</option>
          </select>
        </div> 

        <div className="projetar">
          <p>Projetar Boletim</p>
          <DownloadSimple size={30} color="black" weight="light" />
        </div>
  */}
        
      {!isLoading ? (

        <><div className="boletim">

              <table cellSpacing={0}>
                <thead>
                  <tr>
                    <td>Componentes Curriculares</td>
                    <td>1º Bim.</td>
                    <td>2º Bim.</td>
                    <td>3º Bim.</td>
                    <td>4º Bim.</td>
                    <td>Média</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="materia">MATEMÁTICA</td>
                    <td className="nota">B</td>
                    <td className="nota">R</td>
                    <td className="nota">B</td>
                    <td className="nota">I</td>
                    <td className="nota">B</td>
                  </tr>

                  <tr>
                    <td>LÍNGUA PORTUGUESA</td>
                    <td className="nota">B</td>
                    <td className="nota">R</td>
                    <td className="nota">B</td>
                    <td className="nota">I</td>
                    <td className="nota">B</td>
                  </tr>

                  <tr>
                    <td>LÍNGUA ESTRANGEIRA MODERNA</td>
                    <td className="nota">B</td>
                    <td className="nota">R</td>
                    <td className="nota">B</td>
                    <td className="nota">I</td>
                    <td className="nota">B</td>
                  </tr>

                  <tr>
                    <td>DESENVOLVIMENTO DE SISTEMAS</td>
                    <td className="nota">B</td>
                    <td className="nota">R</td>
                    <td className="nota">B</td>
                    <td className="nota">I</td>
                    <td className="nota">B</td>
                  </tr>

                  <tr>
                    <td>SISTEMAS EMBARCADOS</td>
                    <td className="nota">B</td>
                    <td className="nota">R</td>
                    <td className="nota">B</td>
                    <td className="nota">I</td>
                    <td className="nota">B</td>
                  </tr>

                  <tr>
                    <td>QUALIDADE E TESTE DE SOFTWARE</td>
                    <td className="nota">B</td>
                    <td className="nota">R</td>
                    <td className="nota">B</td>
                    <td className="nota">I</td>
                    <td className="nota">B</td>
                  </tr>

                  <tr>
                    <td>FILOSOFIA</td>
                    <td className="nota">B</td>
                    <td className="nota">R</td>
                    <td className="nota">B</td>
                    <td className="nota">I</td>
                    <td className="nota">B</td>
                  </tr>

                  <tr>
                    <td>GEOGRAFIA</td>
                    <td className="nota">B</td>
                    <td className="nota">R</td>
                    <td className="nota">B</td>
                    <td className="nota">I</td>
                    <td className="nota">B</td>
                  </tr>

                  <tr>
                    <td>BIOLOGIA</td>
                    <td className="nota">B</td>
                    <td className="nota">R</td>
                    <td className="nota">B</td>
                    <td className="nota">I</td>
                    <td className="nota">B</td>
                  </tr>

                  <tr>
                    <td>PROGRAMAÇÃO WEB I, II E III</td>
                    <td className="nota">B</td>
                    <td className="nota">R</td>
                    <td className="nota">B</td>
                    <td className="nota">I</td>
                    <td className="nota">B</td>
                  </tr>
                </tbody>
              </table>
            </div><div className="frequencia">
                <table cellSpacing={0}>
                  <thead>
                    <tr>
                      <td>Faltas</td>
                      <td>Frequência</td>
                      <td>Situação</td>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>0</td>
                      <td>100%</td>
                      <td className="nota">APROVADO</td>
                    </tr>

                    <tr>
                      <td>0</td>
                      <td>100%</td>
                      <td className="nota">APROVADO</td>
                    </tr>

                    <tr>
                      <td>0</td>
                      <td>100%</td>
                      <td className="nota">APROVADO</td>
                    </tr>

                    <tr>
                      <td>0</td>
                      <td>100%</td>
                      <td className="nota">APROVADO</td>
                    </tr>

                    <tr>
                      <td>0</td>
                      <td>100%</td>
                      <td className="nota">APROVADO</td>
                    </tr>

                    <tr>
                      <td>0</td>
                      <td>100%</td>
                      <td className="nota">APROVADO</td>
                    </tr>

                    <tr>
                      <td>0</td>
                      <td>100%</td>
                      <td className="nota">APROVADO</td>
                    </tr>

                    <tr>
                      <td>0</td>
                      <td>100%</td>
                      <td className="nota">APROVADO</td>
                    </tr>

                    <tr>
                      <td>0</td>
                      <td>100%</td>
                      <td className="nota">APROVADO</td>
                    </tr>

                    <tr>
                      <td>0</td>
                      <td>100%</td>
                      <td className="nota">APROVADO</td>
                    </tr>
                  </tbody>
                </table>
              </div><div className="observacoes">
                <p>Observação sobre o docente</p>
              </div><div className="registro">
                <p>Registro de Regulamento</p>

                <table cellSpacing={0}>
                  <thead>
                    <tr>
                      <td>Faltas Registra.</td>
                      <td>Faltas Permiti.</td>
                      <td>Aulas Dadas</td>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>26</td>
                      <td>300</td>
                      <td>1.200</td>
                    </tr>
                  </tbody>
                </table>
              </div></>

      ) : (<><Skeleton variant="rounded" width={700} height={300} /><Skeleton variant="rounded" width={500} height={300} /></>)}
        
        
        

        
      </div>
    </div>

    

    <BottomBar objects={ArrayActions} numberOfSkeletons={ArrayActions.length - 1}/>

    </>

  );
}
