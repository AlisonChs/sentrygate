import { Route, Routes } from "react-router-dom";

import { Header } from "../components/header/Header";
import { Main } from "../components/mainScreen/main/Main";
import { Form } from "../components/formScreen/Form";
import { Register } from "../components/registerScreen/Register";
import { Boletim } from "../components/boletim/Boletim";
import { Navbar } from "../components/navbar/Navbar";
import "./style.css";

export function RouteNavigation() {
  return (
    <>
      <Header />
    <div className="navbarContent">
      <Navbar />

      <div className="components">
        <Routes>
          <Route exact path="/" element={<Form />} />
          <Route exact path="/main" element={<Main />} />
          <Route path="/form" element={<Form />} />
          <Route path="/register" element={<Register />} />
          <Route path="/boletim" element={<Boletim />} />
        </Routes>
      </div>

      {/* <Footer /> */}
    </div>
    </>
  );
}
