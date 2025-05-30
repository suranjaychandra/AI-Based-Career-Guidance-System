import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-4">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">CareerGuideAI</Link>
        <div className="d-flex gap-3">
          <Link className="nav-link text-white" to="/dashboard">Dashboard</Link>
          <Link className="nav-link text-white" to="/login">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
