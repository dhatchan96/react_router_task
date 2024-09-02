import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import All from './components/All';
import FullStackDevelopment from './components/FullStackDevelopment';
import DataScience from './components/DataScience';
import CyberSecurity from './components/CyberSecurity';
import Career from './components/Career';
import './App.css'; // Create a CSS file to style the navigation

function App() {
  return (
    <Router>
      <div>
        <nav className="nav">
          <NavLink to="/" exact activeClassName="active">
            All
          </NavLink>
          <NavLink to="/fullstack" activeClassName="active">
            Full Stack Development
          </NavLink>
          <NavLink to="/datascience" activeClassName="active">
            Data Science
          </NavLink>
          <NavLink to="/cybersecurity" activeClassName="active">
            Cyber Security
          </NavLink>
          <NavLink to="/career" activeClassName="active">
            Career
          </NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<All />} exact />
          <Route path="/fullstack" element={<FullStackDevelopment />} />
          <Route path="/datascience" element={<DataScience />} />
          <Route path="/cybersecurity" element={<CyberSecurity />} />
          <Route path="/career" element={<Career />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
