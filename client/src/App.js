import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { RouteNavigation } from './routes/RouteNavigation';
import { AuthProvider } from './provider/Auth';


function App() {
  return (
    <AuthProvider>
      <Router>
        <RouteNavigation />
      </Router>
    </AuthProvider>

  );
}

export default App;
