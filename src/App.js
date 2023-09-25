import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import ParticlesBackground from './pages/particles';

function App() {
  return (
    <div className='App' width = {5000}>
        <ParticlesBackground />
        <div className='particlesheader'>
          <h1>Particles.js</h1>
        </div>
    </div>
  );
}

export default App