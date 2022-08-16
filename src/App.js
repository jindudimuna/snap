import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      </BrowserRouter>

    </div>
  );
}

export default App;
