import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/pages/home';
import Login from './components/pages/login';
import Signup from './components/pages/signup';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;