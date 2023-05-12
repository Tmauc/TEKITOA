import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import {
  NavLink,
  WrapperBorder,
  Wrapper,
  LogoImg,
  NavBarUl,
} from 'components/navbar/navbar.style.js';

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const homePage = '/home' === location.pathname;

  function handleClick() {
    navigate('/home');
  }

  return (
    <Wrapper>
      <WrapperBorder homePage={homePage}>
        <LogoImg
          alt="TE KI TOA logo"
          onClick={handleClick}
          className="logo"
          src={process.env.PUBLIC_URL + '/assets/logo.png'}
        />
        <NavBarUl className="navbar">
          <li>
            <NavLink
              to="/about"
              active={location.pathname === '/about' ? 'true' : 'false'}
            >
              À Propos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/streamersBrowse"
              active={location.pathname === '/streamersBrowse' ? 'true' : 'false'}
            >
              Streamers
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/schedule"
              active={location.pathname === '/schedule' ? 'true' : 'false'}
            >
              Calendrier
            </NavLink>
          </li>
        </NavBarUl>
      </WrapperBorder>
    </Wrapper>
  );
}

export default Navbar;
