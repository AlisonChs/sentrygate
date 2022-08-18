import { Route, Routes, useLocation } from "react-router-dom";

import "./style.css";
import { useContext } from "react";
import { AuthContext } from "../provider/Auth";

import { Header } from "../components/header/Header";
import { Main } from "../components/mainScreen/main/Main";
import { Form } from "../components/formScreen/Form";
import { Register } from "../components/registerScreen/Register";
import { Boletim } from "../components/boletim/Boletim";
import { Navbar } from "../components/navbar/Navbar";
import { User } from "../components/user/User";

export function RouteNavigation() {
  const { user, setUser } = useContext(AuthContext)
  let location = useLocation()

  return (
    <>
      { location.pathname != '/' ? <> <Header /> <Navbar /> </> : <div></div> }
    <div className="navbarContent">

      <div className="components">
        <Routes>
          <Route exact path="/" element={<Form />} />
          <Route exact path="/main" element={<Main />} />
          <Route path="/form" element={<Form />} />
          <Route path="/register" element={<Register />} />
          <Route path="/boletim" element={<User />} />
        </Routes>
      </div>

      {/* <Footer /> */}
    </div>
    </>
  );
}
