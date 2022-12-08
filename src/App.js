import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GamePanel from './pages/GamePanel';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* HOME ROUTE */}
        <Route path='/' element={<Home />} />

        {/* 404 (NOT FOUND) ROUTE */}
        <Route path='*' element={<NotFound />} />

        {/* GAME PANEL ROUTE */}
        <Route path='/start/:level' element={<GamePanel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
