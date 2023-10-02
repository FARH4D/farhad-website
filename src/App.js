import "./App.scss";
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import ParticlesBackground from "./pages/particles";
import Layout from "./pages/Layout";
import Projects from "./pages/Projects";
import AboutMe from "./pages/About";

function App() {
  return (
    <div className="App">
      <ParticlesBackground />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element = {<Home />}/>
            <Route path ="projects" element = {<Projects />}/>
            <Route path ="about" element = {<AboutMe />}/>
          </Route>
        </Routes>
    </div>
  );
}

export default App;