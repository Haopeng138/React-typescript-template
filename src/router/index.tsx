import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from '@/pages/about';
import Home from '@/pages/home';

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home></Home>} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </Router>
  );
}
