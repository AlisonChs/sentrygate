import { useEffect } from "react";

import Lottie from "react-lottie";
import calendar from "../../../assets/calendar.json";

import AOS from "aos";
import "aos/dist/aos.css";

export function Mission() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: calendar,
  };

  useEffect(() => {
    AOS.init({ duration: 2000 });
  });

  return (
    <div className="mission" data-aos="fade-right">
      <div className="">
        <div>
          <h2>
            <span>Missões</span>
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

        <div>
          <Lottie
            options={defaultOptions}
            style={{ width: "80%", height: "80%" }}
          />
        </div>
      </div>

      <div>
        <div className="contentPrazo">
          <h2>
            <strong>Curto</strong>
          </h2>
          <p>
            Lorem ipsum adipiscing nostra eu proin interdum in ac fames est, dui
            platea aptent torquent semper magna etiam potenti mauris, nisl ante
            suspendisse aliquet rhoncus elementum eleifend quis consectetur. ut
            dapibus elit ipsum semper proin id donec curabitur vulputate vel,
            euismod luctus dapibus etiam port
          </p>
        </div>

        <div className="contentPrazo">
          <h2>
            <strong>Médio</strong>
          </h2>
          <p>
            Lorem ipsum adipiscing nostra eu proin interdum in ac fames est, dui
            platea aptent torquent semper magna etiam potenti mauris, nisl ante
            suspendisse aliquet rhoncus elementum eleifend quis consectetur. ut
            dapibus elit ipsum semper proin id donec curabitur vulputate vel,
            euismod luctus dapibus etiam port
          </p>
        </div>

        <div className="contentPrazo">
          <h2>
            <strong>Longo</strong>
          </h2>
          <p>
            Lorem ipsum adipiscing nostra eu proin interdum in ac fames est, dui
            platea aptent torquent semper magna etiam potenti mauris, nisl ante
            suspendisse aliquet rhoncus elementum eleifend quis consectetur. ut
            dapibus elit ipsum semper proin id donec curabitur vulputate vel,
            euismod luctus dapibus etiam port
          </p>
        </div>
      </div>
    </div>
  );
}
