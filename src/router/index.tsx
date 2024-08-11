import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from '../pages/test-router/about';

export default function AppRouter() {
  return (
    <Router>
      <Routes >
        <Route index element={<div> Nothing </div>} />
        <Route path='/home' element={<div> Home </div>} />
        <Route path="/about" element={<About />} />
      
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </Router>
  );
}
