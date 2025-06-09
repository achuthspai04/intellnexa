import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Foodprocessing from './pages/foodprocessing.jsx';
import Navbar from './components/navbar.jsx'; 
import Footer from './components/footer.jsx'; 

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/foodprocessing" element={<Foodprocessing />} />
      </Routes>
    </>
  );
}

export default App;
