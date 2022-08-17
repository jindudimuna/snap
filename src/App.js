import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from './pages/About';
import Features from './pages/Features';
import Company from './pages/Company';
import Careers from './pages/Careers';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
    <Routes>

          <Route path="/Company" component={Company}></Route>
          <Route path="/Careers" component={Careers}></Route>
          <Route path="/Features" component={Features}></Route>
          <Route path="/About" component={About}></Route>

    </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
