import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const navRef = useRef(null);
  const [isResponsive, setIsResponsive] = useState(false);

  const handleNavClick = () => {
    setIsResponsive(!isResponsive);
  };

  return (
    <header>
      <nav className={isResponsive ? 'responsive_nav' : ''} ref={navRef.current}>
        <Link to="/BlogList">Blog List</Link>
        <Link to="/BlogPost/1">Blog Post</Link>
        <Link to="/BlogPost/2">Blog Post 2</Link>
        <Link to="/BlogPost/3">Blog Post 3</Link>
      </nav>
      <button className="nb" onClick={handleNavClick}>
        &#9776;
      </button>
    </header>
  );
}

export { Navbar };

