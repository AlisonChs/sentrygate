import "../style.css";
import "./style.css";
import Lottie from "react-lottie";
import vision from "../../../assets/vision.json";
import rocket from "../../../assets/rocket.json";
import system from "../../../assets/system.json";
import profit from "../../../assets/lucro.json";

export function Vision() {
  const optionVision = {
    loop: true,
    autoplay: true,
    animationData: vision,
  };

  const optionRocket = {
    loop: true,
    autoplay: true,
    animationData: rocket,
  };

  const optionSystem = {
    loop: true,
    autoplay: true,
    animationData: system,
  };

  const optionProfit = {
    loop: true,
    autoplay: true,
    animationData: profit,
  };

  return (
    <div className="containerAbout">
      <div className="titleAbout">
        <h1>Visão</h1>
      </div>

      <div className="mainAbout">
        <div>
          <Lottie
            options={optionVision}
            style={{ width: "50%", height: "50%" }}
          />
        </div>

        <h1>
          <span>Objetivo</span>
        </h1>

        <div className="paragraph">
          <h2>
            Temos como visão levar e fornecer o nosso sistema ao centro Paula
            Souza e principalmente para as escolas particulares.
          </h2>
        </div>

        <div className="period">
          <div className="periodTopics">
          <h1>(<span>2-3</span> meses)</h1>
            <div className="topicsPeriod">
              <div>
                <Lottie
                  options={optionRocket}
                  style={{ width: "50%", height: "50%" }}
                />
              </div>

              <div className="topicsContent">
                <ul>
                  <li>Escolha de imagem</li>
                  <li>Primeiro investimento</li>
                  <li>Pesquisas e estudo</li>
                </ul>
              </div>
            </div>

            <h1>(<span>7-9</span> meses)</h1>
            <div className="topicsPeriod">
              <div>
                <Lottie
                  options={optionSystem}
                  style={{ width: "50%", height: "50%" }}
                />
              </div>

              <div className="topicsContent">
                <ul>
                  <li>Finalização do primeiro sistema completo</li>
                  <li>Implementação da tecnologia NFC</li>
                  <li>Entrada no mercado de software</li>
                </ul>
              </div>
            </div>

            <h1>(<span>1-3</span> anos)</h1>
            <div className="topicsPeriod">
              <div>
                <Lottie
                  options={optionProfit}
                  style={{ width: "50%", height: "50%" }}
                />
              </div>

              <div className="topicsContent">
                <ul>
                  <li>Consolidação no mercado</li>
                  <li>Explorar outras possibilidades de sistemas</li>
                  <li>Aumento dos lucros</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
