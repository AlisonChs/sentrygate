// React imports
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

// Components
import { Main } from "../../pages/main/Main";
import { Form } from "../../pages/login/Form";
import { RegisterStudent } from "../../pages/register/student/Register";
import { RegisterTeacher } from "../../pages/register/teacher/Register";
import { Boletim } from "../../pages/boletim/Boletim";
import { NotFound } from "../../hooks/responses/NotFound";
import { Call } from "../../pages/call/Call"


import LeftBar from "../../components/UI/navbar/LeftBar/LeftBar";

import PrivateRouteTeacher from "./PrivateRouteTeacher"
import PrivateRouteCoordinator from "./PrivateRouteCoordinator";
import PrivateRouteStudent from "./PrivateRouteStudent";

// Global
import { Stack } from "@mui/material";
import { useContext } from "react";
import Context from "../../contexts/Context";
import { InsertActivity } from "../../pages/insertActivity";

export default function RouteNavigation () {

  const location = useLocation();
  const navigate = useNavigate();

  const { auth, setAuth, user, setUser, setTypeUSer } = useContext(Context)
  
  return (
  
    <Stack sx={{flexDirection: 'row', width: '95%'}}>

      { (location.pathname !== `/`) && (auth) ? <LeftBar /> : null}
      
      <Stack sx={{width: '100%', height: 'auto', alignItems: 'center'}}>
        <Routes>

        <Route exact path="/" element={<Form />} />

          <><Route exact path="/main" element={<Main />} /><Route path="/login" element={<Form />} /><Route
              path="/register/student"
              element={<PrivateRouteCoordinator redirectTo="*">
                <RegisterStudent />
              </PrivateRouteCoordinator>} /><Route
                path="/insert/activity"
                element={<PrivateRouteTeacher redirecTo="*">
                  <InsertActivity />
                </PrivateRouteTeacher>} /><Route
                path="/register/teacher"
                element={<PrivateRouteCoordinator redirectTo="*">
                  <RegisterTeacher />
                </PrivateRouteCoordinator>} /><Route
                path="/report"
                element={<PrivateRouteStudent redirectTo="*">
                  <Boletim />
                </PrivateRouteStudent>} /><Route
                path="/quest"
                element={<PrivateRouteTeacher redirectTo="*">
                  <Call />
                </PrivateRouteTeacher>} /></>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Stack>

    </Stack>

  );
}