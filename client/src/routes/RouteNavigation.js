import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useContext, Fragment } from "react";
import { Header } from "../components/header/Header";
import { Main } from "../components/mainScreen/main/Main";
import { Form } from "../components/formScreen/Form";
import { Register } from "../components/registerScreen/Register";
import { Boletim } from "../components/boletim/Boletim";
import { Navbar } from "../components/navbar/Navbar";
import "./style.css";

import { AuthContext } from "../provider/Auth";

export function RouteNavigation() {

  const Private = ({ Item }) => {

    const signed = false;
    return signed > 0 ? <Item /> : <Form />

  };


  return (

    <div className="components">
      <Routes>
        <Route exact path="/" element={<Form />} />
        <Route exact path="/main" element={<Private Item={Main} />} />
        <Route path="/form" element={<Form />} />
        <Route path="/register" element={<Register />} />
        <Route path="/boletim" element={<Boletim />} />
      </Routes>
    </div>

  );
}
