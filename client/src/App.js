
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepag from './Homepag';
import Login from './Components/api/Login';
import Appdashboard from './Appdashboard';
import Homepage from './Homepage';
import Dashboard from './Components/api/Dashboard';
import Dashboardadmin from './Components/api/Admindash';
function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/Login" element={<Homepag/>} />
        <Route path="/applicant/dashboard" element={<Dashboard/>} />
        <Route path="/applicant/dashboard/admin" element={<Dashboardadmin/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
