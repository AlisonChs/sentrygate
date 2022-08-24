import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useContext, Fragment } from "react";
import { Header } from "../components/header/Header";
import { Main } from "../pages/mainScreen/Main";
import { Form } from "../pages/formScreen/Form";
import { Register } from "../pages/registerScreen/Register";
import { Boletim } from "../pages/boletim/Boletim";
import { Navbar } from "../components/navbar/Navbar";
import useAuth from "../Contexts/hooks/useAuth";
import "./style.css";



export function RouteNavigation() {

  const Private = ({ Item }) => {

    const { signed } = useAuth();
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
