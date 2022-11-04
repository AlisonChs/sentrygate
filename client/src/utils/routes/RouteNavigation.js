// React imports
import { Route, Routes } from "react-router-dom";
import { useContext } from "react";

// Components
import { Main } from "../../pages/main/Main";
import { Form } from "../../pages/login/Form";
import { RegisterStudent } from "../../pages/register/student/Register";
import { RegisterTeacher } from "../../pages/register/teacher/Register";
import { Boletim } from "../../pages/boletim/Boletim";
import { NotFound } from "../../components/UI/notfound/404";

import PrivateRoute from "./PrivateRoute";
import LeftBar from "../../components/UI/navbar/LeftBar/LeftBar";
import { InsertActivity } from "../../pages/insertActivity";

// Global

export default function RouteNavigation() {
  return (
    <>
      <LeftBar />
      <Routes>
        <Route exact path="/" element={<Form />} />
        <Route exact path="/main" element={<Main />} />
        <Route path="/login" element={<Form />} />
        <Route path="/register/student" element={<RegisterStudent />} />
        <Route path="/register/teacher" element={<RegisterTeacher />} />
        <Route path="/boletim" element={<Boletim />} />
        <Route path="/insert/activity" element={<InsertActivity />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
