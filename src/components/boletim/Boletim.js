import { useState } from "react";
import "./style.css";
import { DownloadSimple } from "phosphor-react"

export function Boletim() {
  const [modulo, setModulo] = useState('')

  return (
    <div className="boletimContainer">
      <div className="boletimHeader">
        <h1>Boletim <span>Escolar</span></h1>
      </div>

      <div className="boletimContent">

        <div className="modulo">
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
        
        <div className="boletim">
          <table cellSpacing={0}>
            <thead>
              <tr>
                <td>Componentes Curriculares</td>
                <td>1ºSem</td>
                <td>2ºSem</td>
                <td>3ºSem</td>
                <td>4ºSem</td>
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
        </div>
        <div className="frequencia">
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
                <td>APROVADO</td>
              </tr>

              <tr>
                <td>0</td>
                <td>100%</td>
                <td>APROVADO</td>
              </tr>

              <tr>
                <td>0</td>
                <td>100%</td>
                <td>APROVADO</td>
              </tr>

              <tr>
                <td>0</td>
                <td>100%</td>
                <td>APROVADO</td>
              </tr>

              <tr>
                <td>0</td>
                <td>100%</td>
                <td>APROVADO</td>
              </tr>

              <tr>
                <td>0</td>
                <td>100%</td>
                <td>APROVADO</td>
              </tr>

              <tr>
                <td>0</td>
                <td>100%</td>
                <td>APROVADO</td>
              </tr>

              <tr>
                <td>0</td>
                <td>100%</td>
                <td>APROVADO</td>
              </tr>

              <tr>
                <td>0</td>
                <td>100%</td>
                <td>APROVADO</td>
              </tr>

              <tr>
                <td>0</td>
                <td>100%</td>
                <td>APROVADO</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="observacoes">
          <p>Observação sobre o docente</p>
        </div>
        <div className="registro">
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
        </div>
      </div>
    </div>
  );
}
