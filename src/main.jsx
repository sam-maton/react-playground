import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import './index.css';
import App from './pages/App.jsx';
import UseEffectEvents from './pages/use-effect-events/UseEffectEvents.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/use-effect-events" element={<UseEffectEvents />} />
    </Routes>
  </BrowserRouter>
);
