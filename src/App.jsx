import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
// import Footer from './components/Footer';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Bookings from './pages/Bookings';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Currently showing only Home page */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/bookings" element={<Bookings />} />
      </Routes>

      {/* <Footer /> */}
    </Router>
  );
}
