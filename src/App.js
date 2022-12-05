import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/about/about-app" element={<About />} />
      <Route path="/about/about-author" element={<About />} />
    </Routes>
  );
}

export default App;
