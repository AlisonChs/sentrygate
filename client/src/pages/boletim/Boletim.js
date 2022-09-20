import {useLayoutEffect, useRef, useState, useEffect} from 'react';
import "./style.css";
import { DownloadSimple } from "phosphor-react";
import Skeleton from '@mui/material/Skeleton';
import BottomBar from "../../components/UI/navbar/BottomBar/BottomBar";
import TopBar from "../../components/UI/navbar/TopBar/TopBar";
import PostAddIcon from '@mui/icons-material/PostAdd';
import BarElement from "../../components/UI/navbar/BottomBar/BarElement";

export function Boletim() {

  // const myRef = useRef(null);

  const [isLoading, setIsLoading] = useState(true)

  const [modulo, setModulo] = useState('')

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000)
  }, [])

  return (

    <>

    <TopBar PageTitle="Boletim" PageSpan="escolar"></TopBar>

    

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

        <>

          {/*ref={myRef}*/}
          <div className="boletim">

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

      ) : (
            <>
              <Skeleton

               variant="rounded"
               width={700} 
               height={350}
               sx={{marginLeft: '10rem'}} 
              
              />
              
              <Skeleton 

                variant="rounded" 
                width={350} 
                height={350} 
              
              />

            </>
            
            )
        }
        
        
        

        
      </div>
    </div>

    

    <BottomBar>
      {
        //<BarElement label="Informações extras" />                      
      }

    </BottomBar>

    </>

  );
}
