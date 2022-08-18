import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from './pages/About';
import Features from './pages/Features';
import Company from './pages/Company';
import Careers from './pages/Careers';
import Hero from './Components/Hero';
import Footer from './Components/footer';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
    <Routes>
    <Route path="/" element={<Hero />}></Route>
          <Route path="Company" element={<Company />}></Route>
          <Route path="Careers" element={<Careers />}></Route>
          <Route path="Features" element={<Features />}></Route>
          <Route path="About" element={<About />}></Route>

    </Routes>
      </BrowserRouter>
{/* <Hero /> */}
<Footer />
    </div>
  );
}

export default App;
