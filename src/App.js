import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import Main from './components/Main';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Ocrtoqr from './components/Ocrtoqr';
import Createform from './components/Createform';

function App() {
  return (

    <div className="App">
      <Router>
        <Navigation/>
        <Route path="/ocrtoqr" ><Ocrtoqr/></Route>
        <Route path="/rawtoqr"><Main/></Route>
        <Route path="/createfrom"><Createform/></Route>
        
      </Router>
      <div className="footer"><Footer /></div>
      

    </div>

  );
}

export default App;
