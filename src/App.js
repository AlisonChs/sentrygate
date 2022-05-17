import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { RouteNavigation } from './route/RouteNavigation';
import { useState, useEffect } from 'react'
import { AuthProvider } from './AuthContext'
import { auth } from './components/data/firebase'
import { onAuthStateChanged } from 'firebase/auth'


function App() {
  const [currentUser, setCurrentUser] = useState(null) 
  const [timeActive, setTimeActive] = useState(false)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
    })
  }, [])

  return (

    <Router>
      <AuthProvider value={{currentUser, timeActive, setTimeActive}}>
        <RouteNavigation />
      </AuthProvider>  
    </Router>
      
  );
}

export default App;
