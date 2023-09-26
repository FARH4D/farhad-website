import "./App.scss";
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import ParticlesBackground from "./pages/particles";
import NavMenu from "./pages/NavMenu";

function App() {
  return (
    <div className="App">
      <ParticlesBackground />
      <NavMenu />
    </div>
  );
}

export default App;