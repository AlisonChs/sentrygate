import './verifyEmail.css'
import { useAuthValue } from '../../AuthContext'
import { useState, useEffect } from 'react'
import { auth } from '../data/firebase'
import { sendEmailVerification } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import email from '../../assets/email.json'
import Lottie from 'react-lottie'

export function VerifyEmail() {

  const [time, setTime] = useState(60)
  const {timeActive, setTimeActive} = useAuthValue()
  const {currentUser} = useAuthValue() 
  const navigate = useNavigate()

  useEffect(() => {
    const interval = setInterval(() => {
      currentUser?.reload()
      .then(() => {
        if(currentUser?.emailVerified){
          clearInterval(interval)
          navigate('/main')
        }
      })
      .catch((err) => {
        alert(err.message)
      })
    }, 1000)
  }, [navigate, currentUser])

  useEffect(() => {
    let interval = null
    if(timeActive && time !== 0 ){
      interval = setInterval(() => {
        setTime((time) => time - 1)
      }, 1000)
    }else if(time === 0){
      setTimeActive(false)
      setTime(60)
      clearInterval(interval)
    }
    return () => clearInterval(interval);
  }, [timeActive, time, setTimeActive])

  const resendEmailVerification = () => {
    sendEmailVerification(auth.currentUser)
    .then(() => {
      setTimeActive(true)
    }).catch((err) => {
      alert(err.message)
    })
  }

  const optionEmail = {
    loop: true,
    autoplay: true,
    animationData: email,
  };

  return (
    <div className='center'>
      <div className='verifyEmail'>
        <Lottie
          options={optionEmail}
          style={{ width: "60%", height: "60%" }}
        />
        <h1>Verifique seu endereço de email</h1>
        <p>
          <strong>Um email de autentificação foi enviado para:</strong><br/>
          <span>{currentUser?.email}</span>
        </p>
        <span>Siga as instruções para ter acesso à sua conta</span>
        <button 
          onClick={resendEmailVerification}
          disabled={timeActive}
          ><span>Reenviar Email</span> {timeActive && time}</button>
      </div>
    </div>
  )
}

