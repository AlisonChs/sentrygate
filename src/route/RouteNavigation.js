import { Route, Routes } from 'react-router-dom'

import { Header } from '../components/header/Header'
import { Main } from "../components/mainScreen/main/Main";
import { Form } from '../components/formScreen/Form';
import { Register } from '../components/registerScreen/Register';
import { VerifyEmail } from '../components/verifyScreen/VerifyEmail'
import { Vision } from '../components/about/vision/Vision';
import { Mission } from '../components/about/mission/Mission';
import { About } from '../components/about/About';
import PrivateRoute from './PrivateRoute';
import { Navigate } from 'react-router';
import { useState, useEffect } from 'react';
import { auth } from '../components/data/firebase';
import { onAuthStateChanged } from '@firebase/auth';

export function RouteNavigation() {
  const [currentUser, setCurrentUser] = useState(null) 

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
    })
  }, [])

  return (
      <>
      <Header />
        <Routes>
          <Route exact path= '/main' element= {
            <PrivateRoute>
              <Main />
            </PrivateRoute>
          }></Route>
          <Route path='/form' element={
            !currentUser?.emailVerified
            ? <Form />
            : <Navigate to='/main' replace/>
          } /> 


          <Route path="/register" element={
            !currentUser?.emailVerified
            ? <Register/>
            : <Navigate to='main' replace/>
          } />
          <Route path="/verify-email" element={<VerifyEmail />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/about" element={<About />} />
        </Routes>
        {/* <Footer /> */}
      </>
  );
}
