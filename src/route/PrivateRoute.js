import {Navigate} from 'react-router-dom'
import {useAuthValue} from '../AuthContext'

export default function PrivateRoute({children}) {
  const {currentUser} = useAuthValue()

  if(!currentUser?.emailVerified){
    return <Navigate to='/form' replace/>
  }

  return children
}