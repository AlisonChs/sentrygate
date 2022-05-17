import '../style.css'
import Lottie from "react-lottie";
import student from "../../../assets/student.json";
import './style.css'
import felipe from '../../../assets/felipe.jpg'
import alison from '../../../assets/alison.jpg'

export function WhoWeAre() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: student,
      };

    return (
        <div className="containerAbout">
            <div className='titleAbout'>
                <h1>Quem somos nós?</h1>
            </div>

            <div className='mainAbout'>
                <div>
                <Lottie
                  options={defaultOptions}
                  style={{ width: "50%", height: "50%" }}
                />
                </div>

                <div className='cardContainer'>
                    <div className='card alison'>
                        <img src={alison} alt="felipe" />

                        <div>
                            <h2>Alison</h2>
                            <p>Gerente</p>
                        </div>

                        <div className='links'>
                            <li>
                                <a href=""></a>
                            </li>
                            <li>
                                <a href=""></a>
                            </li>
                            <li>
                                <a href=""></a>
                            </li>
                        </div>
                    </div>

                    <div className='card bruno'>
                        <p>alisnon</p>
                    </div>

                    <div className='card victor'>
                        <p>alisnon</p>
                    </div>

                    <div className='card kayna'>
                        <p>alisnon</p>
                    </div>
                    <div className='card felipe'>
                        <p>alisnon</p>
                    </div>

                    <div className='card nicolle'>
                        <p>alisnon</p>
                    </div>

                    <div className='card thiago'>
                        <p>alisnon</p>
                    </div>
                </div>

            </div>
        </div>
    )
}