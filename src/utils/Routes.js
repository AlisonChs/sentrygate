
// React imports
import { Route, Routes } from "react-router-dom";
import { useContext } from "react";

// Components
import { Header } from "../components/UI/header/Header";
import { Main } from "../components/main/Main";
import { Form } from "../components/login/Form";
import { RegisterStudent } from "../components/register/student/Register";
import { Boletim } from "../components/boletim/Boletim";
import { Navbar } from "../components/UI/navbar/Navbar";
import { NotFound } from "../components/UI/notfound/404";

// Global
import { AuthContext } from "../provider/Auth";

export default function Routess() {
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
          <Route path="/register" element={<RegisterStudent />} />
          <Route path="/boletim" element={<Boletim />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

    </div>
    </>
  );
}
