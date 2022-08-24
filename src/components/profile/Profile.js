import './style.css'
import { Circle, Student } from 'phosphor-react'
import { Avatar } from "@mui/material";
 
function Subjects({ name, description1, description2 }) {
    return (
        <div className='subjects'>
            <div className='headerSubject'>
                <Circle size={20} color='#FF914D' weight='fill' />
                <p>{name}</p>
            </div>

            <p>{description1}</p>
            <p>{description2}</p>
            <button className='logoff'>Trocar de curso</button>
        </div>
    )
}

export function Profile() {
    return (
        <div className='containerUser'>
            <div className='contentUser'>
                <div className='infoUser'>
                    <h1 className='titleUser'>
                        Perfil do <span>Aluno</span>
                    </h1>

                    <div className='photoUser'>
                        <div className='photo'>
                            <Avatar alt='Victor' src="https://github.com/Victor-HM.png" sx={{ width: 150, height: 150 }} />
                        </div>

                        <div className='nameUser'>
                            <p>Victor Hugo Carvalho Moreira dos Santos</p>
                            <p>ETEC Cidade Tiradentes</p>
                        </div>
                    </div>
                </div>

                <div className='detailsUser'>
                    <p>Habilitação Técnica: <span>Desenvolvimento de Sistemas</span></p>
                    <p>Número do Aluno: <span>1836</span></p>
                    <p>Habilitação Escolar: <span>Ensino Médio</span></p>
                    <p>Número de Mátricula: <span>1288</span></p>
                    <p>Grupo: <span>Turma B</span></p>
                    <p>Período: <span>Manhã</span></p>
                    <p>Situação: <span>Cursando</span></p>
                    <p>Módulo e Série: <span>3º Ano</span></p>
                </div>
            </div>

            <Subjects name='Desenvolvimento de Sistemas' description1='Complemento curricular de genero técnico, para abtenção da habilitação técnica.' description2='Complemento curricular de genero técnico, para abtenção da habilitação técnica.' />
        </div>
    )
}