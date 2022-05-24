import { Route, Routes } from 'react-router-dom'

import { Header } from '../components/header/Header'
import { Main } from "../components/mainScreen/main/Main";
import { Form } from '../components/formScreen/Form';
import { Register } from '../components/registerScreen/Register';
import { VerifyEmail } from '../components/verifyScreen/VerifyEmail'
import { Vision } from '../components/about/vision/Vision';
import { Mission } from '../components/about/mission/Mission';
import { WhoWeAre } from '../components/about/who/WhoWeAre';
import { About } from '../components/about/About';
//import PrivateRoute from './PrivateRoute';

export function RouteNavigation() {
  return (
      <>
      <Header />
        <Routes>
          <Route path='/' element={<Form />} /> 
          <Route path="/main" element={<Main />} />
          <Route path="/register" element={<Register />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/about" element={<About />} />
        </Routes>
        {/* <Footer /> */}
      </>
  );
}
