import { Route, Routes } from 'react-router-dom'

import { Header } from '../components/header/Header'
import { Main } from "../components/mainScreen/main/Main";
import { Form } from '../components/formScreen/Form';
<<<<<<< HEAD
import { About } from '../components/about/About';
import { Register } from '../components/registerScreen/Register';
import { VerifyEmail } from '../components/verifyScreen/VerifyEmail'
//import PrivateRoute from './PrivateRoute';
=======
import { WhoWeAre } from '../components/about/who/WhoWeAre';
import { Mission } from '../components/about/mission/Mission';
import { Vision } from '../components/about/vision/Vision';
import { Footer } from '../components/footer/Footer';
>>>>>>> 03a1b8cf235dfba3a725b86b78ffad2f43fff584

export function RouteNavigation() {
  return (
      <>
      <Header />
        <Routes>
          <Route path='/' element={<Form />} /> 
          <Route path="/main" element={<Main />} />
<<<<<<< HEAD
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
=======
          <Route path="/about" element={<WhoWeAre />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/vision" element={<Vision />} />
>>>>>>> 03a1b8cf235dfba3a725b86b78ffad2f43fff584
        </Routes>
        {/* <Footer /> */}
      </>
  );
}
