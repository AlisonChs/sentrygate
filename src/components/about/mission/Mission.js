import '../style.css'
import Lottie from "react-lottie";
import mission from "../../../assets/mission.json";

export function Mission() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: mission,
      };

    return (
        <div className="containerAbout">
            <div className='titleAbout'>
                <h1>Missão</h1>
            </div>

            <div className='mainAbout'>
                <div>
                <Lottie
                  options={defaultOptions}
                  style={{ width: "50%", height: "50%" }}
                />
                </div>

                <div className=''>
                    <h2>Criar um sistema que organizem gestões escolares, colaborando com pais, alunos, professores e outros funcionários a tornar os processos educacionais menos burocráticos e mais seguros.</h2>
                </div>

            </div>
        </div>
    )
}