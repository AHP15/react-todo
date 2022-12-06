import { Link, useLocation } from 'react-router-dom';

import '../styles/sidebar.css';

const SideBar = () => {
  const location = useLocation();
  return (
    <aside className="sidebar">
      <div>
        <Link style={{ color: location.pathname === '/' ? 'red' : 'white' }} to="/">Home</Link>
      </div>
      <div>
        <Link style={{ color: location.pathname.includes('about') ? 'red' : 'white' }} to="/about">About</Link>
      </div>
    </aside>
  );
};

export default SideBar;
