import "./main.css";
import Lottie from "react-lottie";
import computer from "../../_assets/js/computer.json";
import { ArrowSquareRight } from "phosphor-react";
import { useNavigate } from "react-router";

export function Main() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: computer,
  };

  const navigate = useNavigate()

  function goBoletim() {
    navigate('/boletim')
  }

  return (
    <>
      <div className="main">
        <div className="mainContent">
          <div className="content-left">
            <div className="title">
              <h1>Bem vindo! Thiago</h1>
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

            <div className="buttons">
              <div className="student" onClick={goBoletim}>
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
    </>
  );
}
