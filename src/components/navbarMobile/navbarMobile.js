import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import {
  NavLink,
  WrapperBorder,
  LogoImg,
  CloseImg,
  Menuleft,
  MenuLogo,
  MenuIcon,
  MenuWrapper,
  Wrapper,
  NavBarUl,
} from 'components/navbarMobile/navbarMobile.style.js';

const MenuItems = ({ location, closeMenu }) => {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/home');
    closeMenu();
  }

  return (
    <MenuWrapper>
      <NavBarUl className="navbar">
        <LogoImg
          alt="TE KI TOA logo"
          onClick={handleClick}
          className="logo"
          src={process.env.PUBLIC_URL + '/assets/logo.png'}
        />
        <li>
          <NavLink
            to="/about"
            active={location.pathname === '/about' ? 'true' : 'false'}
            onClick={closeMenu}
          >
            À Propos
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/streamersBrowse"
            active={location.pathname === '/streamersBrowse' ? 'true' : 'false'}
            onClick={closeMenu}
          >
            Streamers
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/schedule"
            active={location.pathname === '/schedule' ? 'true' : 'false'}
            onClick={closeMenu}
          >
            Calendrier
          </NavLink>
        </li>
        <CloseImg
          alt="Close icon"
          onClick={closeMenu}
          className="logo"
          src={process.env.PUBLIC_URL + '/assets/icons/Cross.svg'}
        />
      </NavBarUl>
    </MenuWrapper>
  );
};

function NavbarMobile() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const homePage = '/home' === location.pathname;

  function handleClick() {
    navigate('/home');
  }

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  return (
    <Wrapper>
      <WrapperBorder homePage={homePage}>
        <Menuleft>
          <MenuLogo
            alt="TE KI TOA logo"
            onClick={handleClick}
            className="logo"
            src={process.env.PUBLIC_URL + '/assets/logo.png'}
          />
          <MenuIcon
            alt="Menu icon"
            onClick={openMenu}
            className="logo"
            src={process.env.PUBLIC_URL + '/assets/icons/Menu.svg'}
          />
        </Menuleft>
      </WrapperBorder>
      {isMenuOpen && (
        <MenuItems
          location={location}
          closeMenu={closeMenu}
        />
      )}
    </Wrapper>
  );
}

export default NavbarMobile;
