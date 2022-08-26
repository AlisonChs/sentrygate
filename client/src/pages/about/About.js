import { useEffect } from "react";

import "./style.css";

import profit from "../../assets/lucro.json";
import Lottie from "react-lottie";

import { CostsAndBenefits } from "./cust/Cust";
import { Vision } from "./vision/Vision";
import { Mission } from "./mission/Mission";

export function About() {
  const optionProfit = {
    loop: true,
    autoplay: true,
    animationData: profit,
  };

  return (
    <div className="mainAbout">
      <CostsAndBenefits />
      <Vision />
      <Mission />
    </div>
  );
}
