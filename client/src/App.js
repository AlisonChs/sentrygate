import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import  RouteNavigation  from './utils/routes/RouteNavigation';
import { StoreProvider } from './contexts/provider/Provider';


function App() {
  return (

    <Router>
      <StoreProvider>
        <RouteNavigation />
      </StoreProvider>
    </Router>

  );
}

export default App;
