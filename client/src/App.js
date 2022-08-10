import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { RouteNavigation } from './routes/RouteNavigation';


function App() {
  return (
    <Router>
        <RouteNavigation />
    </Router>
  );
}

export default App;
