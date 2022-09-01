import { useEffect } from "react";

import Lottie from "react-lottie";
import vision from "../../../assets/vision.json";
import airplane from "../../../assets/airplane.png";
import student from "../../../assets/student.json";

import AOS from "aos";
import "aos/dist/aos.css";

export function Vision() {
  const optionStudent = {
    loop: true,
    autoplay: true,
    animationData: student,
  };

  useEffect(() => {
    AOS.init({ duration: 2000 });
  });

  return (
    <>
      <div className="vision" data-aos="fade-left">
        <div className="visionEmpresarial">
          <img src={airplane} alt="" />
          <div className="contentVisionEmpresarial">
            <h2>
              <span>Visão empresarial</span>
            </h2>
            <p>
              Lorem ipsum adipiscing nostra eu proin interdum in ac fames est,
              dui platea aptent torquent semper magna etiam potenti mauris, nisl
              ante suspendisse aliquet rhoncus elementum eleifend quis
              consectetur. ut dapibus elit ipsum semper proin id donec curabitur
              vulputate vel, euismod luctus dapibus etiam porttitor vitae urna
              proin venenatis, class lobortis non ante litora senectus phasellus
              sagittis habitant. aptent phasellus bibendum est risus dictum
              nostra sociosqu, dictum magna dictumst risus lorem posuere erat,
              ullamcorper velit lectus porta per hendrerit. et vulputate neque
              condimentum conubia aenean tincidunt purus, neque senectus hac
              nulla a velit, vehicula taciti vel ut donec conubia.
            </p>
          </div>
        </div>

        <div className="visionEducation">
          <div className="contentVisionEmpresarial">
            <h2>
              <strong>Educacional</strong>
            </h2>
            <p>
              Lorem ipsum adipiscing nostra eu proin interdum in ac fames est,
              dui platea aptent torquent semper magna etiam potenti mauris, nisl
              ante suspendisse aliquet rhoncus elementum eleifend quis
              consectetur. ut dapibus elit ipsum semper proin id donec curabitur
              vulputate vel, euismod luctus dapibus etiam porttitor vitae urna
              proin venenatis, class lobortis non ante litora senectus phasellus
              sagittis habitant. aptent phasellus bibendum est risus dictum
              nostra sociosqu, dictum magna dictumst risus lorem posuere erat,
              ullamcorper velit lectus porta per hendrerit. et vulputate neque
              condimentum conubia aenean tincidunt purus, neque senectus hac
              nulla a velit, vehicula taciti vel ut donec conubia.
            </p>
          </div>
          <Lottie
            options={optionStudent}
            style={{ width: "20rem", height: "20rem" }}
          />
          {/* <img src={airplane} alt="" /> */}
        </div>
      </div>
    </>
  );
}
