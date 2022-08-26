import { Route, Routes } from "react-router-dom";

import { Header } from "../components/header/Header";
import { Main } from "../components/mainScreen/main/Main";
import { Form } from "../components/formScreen/Form";
import { Register } from "../components/registerScreen/Register";
import { Boletim } from "../components/boletim/Boletim";
import { Navbar } from "../components/navbar/Navbar";
import "./style.css";
import { useContext } from "react";
import { AuthContext } from "../provider/Auth";
import { RegisterSchool } from "../components/registerSchool";

export function RouteNavigation() {
  const { user, setUser } = useContext(AuthContext)

  return (
    <>
      { user.auth ? <Header /> : <div></div> }
    <div className="navbarContent">
      { user.auth ? <Navbar /> : <div></div> }

      <div className="components">
        <Routes>
          <Route exact path="/" element={<Form />} />
          <Route exact path="/main" element={<Main />} />
          <Route path="/form" element={<Form />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register-school" element={<RegisterSchool />} />
          <Route path="/boletim" element={<Boletim />} />
        </Routes>
      </div>

      {/* <Footer /> */}
    </div>
    </>
  );
}
