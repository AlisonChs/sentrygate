
// React imports
import { Route, Routes } from "react-router-dom";
import { useContext } from "react";

// Components
import { Main } from "../../pages/main/Main";
import { Form } from "../../pages/login/Form";
import { RegisterStudent } from "../../pages/register/student/Register";
import { Boletim } from "../../pages/boletim/Boletim";
import { NotFound } from "../../components/UI/notfound/404";

import PrivateRoute from "./PrivateRoute";

// Global

export default function RouteNavigation () {

  return (
  
      <div className="components">
        <Routes>
          <Route exact path="/" element={<Form />} />
          <Route exact path="/main" element={<Main />} />
          <Route path="/login" element={<Form />} />
          <Route path="/register" element={<RegisterStudent />} />
          <Route path="/boletim" element={<Boletim />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

  );
}
