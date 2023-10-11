import Topbar from "./components/topbar/Topbar";
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';

function App() {
  return (
    <Router>
      <Topbar />
      <Routes />
    </Router>
  );
}

export default App;