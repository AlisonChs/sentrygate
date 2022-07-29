import "./main.css";
import Lottie from "react-lottie";
import computer from "../../../assets/computer.json";
import { ArrowSquareRight } from "phosphor-react";
import { Navigation } from "../navigation/Navigation";

export function Main() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: computer,
  };

  return (
    <>
      <div className="separate">
        <Navigation />
        <div className="main">
          <div className="content">
            <div className="content-left">
              <div className="title">
                <h1>Bem vindo!</h1>
                <h1>
                  <span>Sentry Gate</span>
                </h1>
              </div>

              <div className="description">
                <p>
                  Explore seu Sentry Gate, aqui você poderá saber todas as suas
                  informações escolares.
                </p>
              </div>

              <div className="email">    
                <p>
                  Logado em: <span></span>
                </p>
              </div>

              <div className="buttons">
                <div className="student">
                  <div className="text">
                    <h3>Boletim</h3>
                    <p>Suas notas</p>
                  </div>
                </div>
                <div className="student">
                  <div className="text">
                    <h3>Frequencia</h3>
                    <p>Registro de atividades</p>
                  </div>
                </div>
                <div className="student">
                  <div className="text">
                    <h3>Avisos</h3>
                    <p>Informe-me</p>
                  </div>
                </div>
              </div>
              <div className="moreAbout">
                <div>
                  <p>Descubra mais</p>
                </div>
                <div className="seta">
                  <ArrowSquareRight weight="fill" size={20} />
                </div>
              </div>
            </div>
            <div className="content-right">
              <div>
                <Lottie
                  options={defaultOptions}
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
