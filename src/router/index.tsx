import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from '../pages/test-router/about';

export default function AppRouter() {
  return (
    <Router>
      <Routes >
        <Route index element={<About />} />
      </Routes>
    </Router>
  );
}
