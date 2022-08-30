import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import './components/style.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Error from './components/Error';
import SignleCoctails from './Pages/SignleCoctails';

function App() {
  return (
    <>
      <NavBar />
      <section className="main">
        <Routes>
          <Route path="/Cocktails" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Cocktail/:itemid" element={<SignleCoctails />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </section>
    </>
  );
}

export default App;
