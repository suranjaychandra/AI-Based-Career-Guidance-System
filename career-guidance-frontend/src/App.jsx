import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    // <BrowserRouter>
    //   <Navbar />
    //   <div className="container mt-4">
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/login" element={<Login />} />
    //       <Route path="/dashboard" element={<Dashboard />} />
    //     </Routes>
    //   </div>
    // </BrowserRouter>
    <div>Hello from App!</div>

  );
}

export default App;
