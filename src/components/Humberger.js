import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import close from '../media/close.png';
import menu from '../media/menu.png';

import '../styles/humberger.css';

const Humberger = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const handelClick = () => {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('show_sidebar');
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    handelClick();
  }, [location]);

  return (
    <button className="humberger" type="button" onClick={handelClick}>
      <img src={open ? close : menu} alt="humberger" />
    </button>
  );
};

export default Humberger;
