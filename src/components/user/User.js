import { Circle, Student } from 'phosphor-react'
import './style.css'

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

export function User() {
    return (
        <div className='containerUser'>
            <div className='contentUser'>
                <div className='infoUser'>
                    <h1 className='titleUser'>
                        Perfil do <span>Aluno</span>
                    </h1>

                    <div className='photoUser'>
                        <div className='photo'>
                            <Student size={90} />
                        </div>

                        <div className='nameUser'>
                            <p>Victor Hugo Carvalho Moreira dos Santos</p>
                            <p>ETEC Cidade Tiradentes</p>
                        </div>
                    </div>
                </div>

                <div className='detailsUser'>

                </div>
            </div>

            <Subjects name='Desenvolvimento de Sistemas' description1='Complemento curricular de genero técnico, para abtenção da habilitação técnica.' description2='Complemento curricular de genero técnico, para abtenção da habilitação técnica.' />
        </div>
    )
}