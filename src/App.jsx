import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Foodprocessing from './pages/foodprocessing.jsx';
import NutritionAndDietetics from './pages/nutritionandDietetics.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/foodprocessing" element={<Foodprocessing />} />
        <Route path="/nutrition-and-dietetics" element={<NutritionAndDietetics />} /> 
      </Routes>
    </>
  );
}

export default App;
