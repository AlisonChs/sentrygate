// React imports
import { Route, Routes, useLocation } from "react-router-dom";

// Pages
import { Main } from "../../pages/main/Main";
import Form from "../../pages/login/Form";
import { RegisterStudent } from "../../pages/register/student/Register";
import { RegisterTeacher } from "../../pages/register/teacher/Register";
import { Boletim } from "../../pages/boletim/Boletim";
import { NotFound } from "../../hooks/responses/NotFound";

// Components
import LeftBar from "../../components/UI/navbar/LeftBar/LeftBar";
import { InsertActivity } from "../../pages/insertActivity";

// Private routes
import PrivateRouteCoordinator from "./PrivateRouteCoordinator";
import PrivateRouteStudent from "./PrivateRouteStudent";
import PrivateRouteTeacher from "./PrivateRouteTeacher";

export default function RouteNavigation() {
  return (
    <>
      <LeftBar />
      <Routes>
        <Route exact path="/" element={<Form />} />
        <Route exact path="/main" element={<Main />} />

        <Route path="/login" element={<Form />} />

        <Route
          path="/register/student"
          element={
            <PrivateRouteCoordinator redirectTo="*">
              <RegisterStudent />
            </PrivateRouteCoordinator>
          }
        />

        <Route
          path="/register/teacher"
          element={
            <PrivateRouteCoordinator redirectTo="*">
              <RegisterTeacher />
            </PrivateRouteCoordinator>
          }
        />

        <Route
          path="/boletim"
          element={
            <PrivateRouteStudent redirectTo="*">
              <Boletim />
            </PrivateRouteStudent>
          }
        />

        <Route
          path="/insert/activity"
          element={
            <PrivateRouteTeacher redirectTo="*">
              <InsertActivity />
            </PrivateRouteTeacher>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
