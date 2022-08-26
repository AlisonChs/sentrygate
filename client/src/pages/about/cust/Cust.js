import { useEffect } from "react";

import profit from "../../../assets/lucro.json";
import Lottie from "react-lottie";

import AOS from "aos";
import "aos/dist/aos.css";

export function CostsAndBenefits() {
  const optionProfit = {
    loop: true,
    autoplay: true,
    animationData: profit,
  };

  useEffect(() => {
    AOS.init({ duration: 2000 });
  });

  return (
    <>
      <div className="valuesAndBeneficy" data-aos="fade-up">
        <div className="contentCust">
          <h2>
            <strong>Valores</strong>
          </h2>
          <p>
            Lorem ipsum adipiscing nostra eu proin interdum in ac fames est, dui
            platea aptent torquent semper magna etiam potenti mauris, nisl ante
            suspendisse aliquet rhoncus elementum eleifend quis consectetur. ut
            dapibus elit ipsum semper proin id donec curabitur vulputate vel,
            euismod luctus dapibus etiam porttitor vitae urna proin venenatis,
            class lobortis non ante litora senectus phasellus sagittis habitant.
            aptent phasellus bibendum est risus dictum nostra sociosqu, dictum
            magna dictumst risus lorem posuere erat, ullamcorper velit lectus
            porta per hendrerit. et vulputate neque condimentum conubia aenean
            tincidunt purus, neque senectus hac nulla a velit, vehicula taciti
            vel ut donec conubia.
          </p>
        </div>

        <div className="contentCust">
          <h2>
            <strong>Beneficios</strong>
          </h2>
          <p>
            Lorem ipsum adipiscing nostra eu proin interdum in ac fames est, dui
            platea aptent torquent semper magna etiam potenti mauris, nisl ante
            suspendisse aliquet rhoncus elementum eleifend quis consectetur. ut
            dapibus elit ipsum semper proin id donec curabitur vulputate vel,
            euismod luctus dapibus etiam porttitor vitae urna proin venenatis,
            class lobortis non ante litora senectus phasellus sagittis habitant.
            aptent phasellus bibendum est risus dictum nostra sociosqu, dictum
            magna dictumst risus lorem posuere erat, ullamcorper velit lectus
            porta per hendrerit. et vulputate neque condimentum conubia aenean
            tincidunt purus, neque senectus hac nulla a velit, vehicula taciti
            vel ut donec conubia.
          </p>
        </div>

        <div className="contentCust">
          <h2>
            <strong>Custos</strong>
          </h2>
          <p>
            Lorem ipsum adipiscing nostra eu proin interdum in ac fames est, dui
            platea aptent torquent semper magna etiam potenti mauris, nisl ante
            suspendisse aliquet rhoncus elementum eleifend quis consectetur. ut
            dapibus elit ipsum semper proin id donec curabitur vulputate vel,
            euismod luctus dapibus etiam porttitor vitae urna proin venenatis,
            class lobortis non ante litora senectus phasellus sagittis habitant.
            aptent phasellus bibendum est risus dictum nostra sociosqu, dictum
            magna dictumst risus lorem posuere erat, ullamcorper velit lectus
            porta per hendrerit. et vulputate neque condimentum conubia aenean
            tincidunt purus, neque senectus hac nulla a velit, vehicula taciti
            vel ut donec conubia.
          </p>
        </div>

        <div className="contentCust">
          <Lottie
            options={optionProfit}
            style={{ width: "20rem", height: "15rem" }}
          />
        </div>
      </div>

      <div></div>
    </>
  );
}
