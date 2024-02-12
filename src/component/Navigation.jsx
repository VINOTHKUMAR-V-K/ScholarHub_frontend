import React, { useState } from 'react';
import '../style/StudentHome.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCamera, faBell, faMap, faCog, faTimes, faPlus } from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [initialClick, setInitialClick] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();

  const handleToggleClick = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleMouseDown = (e) => {
    setInitialClick({
      x: e.clientX,
      y: e.clientY,
    });
    document.addEventListener('mousemove', handleDrag);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleDrag = (e) => {
    const movementX = e.clientX - initialClick.x;
    const movementY = e.clientY - initialClick.y;

    const nav = document.querySelector('nav');
    const navStyle = window.getComputedStyle(nav);
    const navTop = parseInt(navStyle.top);
    const navHeight = parseInt(navStyle.height);
    const windHeight = window.innerHeight;

    const newTop = navTop + movementY;

    nav.style.transition = 'none';
    nav.style.top = `${Math.min(Math.max(newTop, 1), windHeight - navHeight)}px`;
  };

  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleDrag);
    document.removeEventListener('mouseup', handleMouseUp);

    // Reset transition after mouse up
    const nav = document.querySelector('nav');
    nav.style.transition = 'top 0.3s ease-in-out';
  };

  const handleIconClick = (route) => {
    navigate(route);
  };

  // Define icons with corresponding routes
  const icons = [
    { icon: faHome, route: '/home' },
    { icon: faCamera, route: '/studentform' },
    { icon: faBell, route: '/studentAcdemic' },
    { icon: faMap, route: '/documentsubmission' },
    { icon: faCog, route: '/bank' }
  ];

  return (
    <>
      <nav className={isNavOpen ? 'open' : ''}>
        <div className="nav-content" onMouseDown={handleMouseDown}>
          <div className="toggle-btn" onClick={handleToggleClick}>
            <FontAwesomeIcon icon={isNavOpen ? faTimes : faPlus} />
          </div>
          {/* Render icons */}
          {icons.map((item, index) => (
            <span key={index} style={{ '--i': index }}>
              <a onClick={() => handleIconClick(item.route)}>
                <FontAwesomeIcon icon={item.icon} />
              </a>
            </span>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navigation;
