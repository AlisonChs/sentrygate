import { Route, Routes } from "react-router-dom";
import { Header } from "../components/header/Header";
import { Main } from "../pages/mainScreen/Main";
import { Form } from "../pages/formScreen/Form";
import { Register } from "../pages/registerScreen/Register";
import { Boletim } from "../pages/boletim/Boletim";
import { Navbar } from "../components/navbar/Navbar";
import "./style.css";
import PrivateRoute from "./PrivateRoute";



export function RouteNavigation() {


  return (

    <div className="components">

      <Routes>
        <Route exact path="/" element={<Form />} />
        <Route path="/form" element={<Form />} />
        <Route path="*" element={<Form />} />
        <Route exact path="/main" element={<Main />} />
        <Route path="/register" element={<Register />} />
        <Route path="/boletim" element={
          <PrivateRoute redirectTo='/form'>
            <Boletim />
          </PrivateRoute>} />
      </Routes>


    </div>

  );
}
