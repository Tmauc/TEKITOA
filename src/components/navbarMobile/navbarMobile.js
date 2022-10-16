import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation, Link } from 'react-router-dom';

import OnLiveDot from 'components/onLiveDot/onLiveDot';

import { StreamerConsumerHook } from 'stores/streamerStore';

import {
  NavLinkStyle,
  WrapperBorderStyle,
  LogoStyle,
  CloseImgStyle,
  MenuleftStyle,
  MenuLogoStyle,
  MenuIconStyle,
  MenuWrapperStyle,
  WrapperStyle,
  NavBarUlStyle,
  PhraseButtonStyle,
  PlayIconStyle,
} from 'components/navbarMobile/navbarMobile.style.js';

const MenuItems = ({ location, isStreamer, streamer, stream, closeMenu }) => {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/home');
    closeMenu();
  }

  return (
    <MenuWrapper>
      {isStreamer ? (
        <NavBarUl className="navbar">
          <LogoImg
            alt="TE KI TOA logo"
            onClick={handleClick}
            className="logo"
            src={process.env.PUBLIC_URL + '/assets/logo.png'}
          />
          <li>
            <NavLink
              to={'/' + streamer.pseudo}
              state={{ isStreamer: true }}
              isCurrent={'/' + streamer.pseudo === location.pathname}
              onClick={closeMenu}
            >
              {streamer.pseudo}
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/' + streamer.pseudo + '/twitch'}
              state={{ isStreamer: true }}
              isCurrent={
                '/' + streamer.pseudo + '/twitch' === location.pathname
              }
              onClick={closeMenu}
            >
              Twitch
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/' + streamer.pseudo + '/reseaux'}
              state={{ isStreamer: true }}
              isCurrent={
                '/' + streamer.pseudo + '/reseaux' === location.pathname
              }
              onClick={closeMenu}
              disabled
            >
              Réseaux
            </NavLink>
          </li>
          {stream && (
            <li>
              <NavLink
                to={'/' + streamer?.pseudo + '/onlive'}
                state={{ isStreamer: true }}
                isCurrent={
                  '/' + streamer?.pseudo + '/onlive' === location.pathname
                }
                onClick={closeMenu}
              >
                <OnLiveDot small />
                On Live
              </NavLink>
            </li>
          )}
          <CloseImg
            alt="Close icon"
            onClick={closeMenu}
            className="logo"
            src={process.env.PUBLIC_URL + '/assets/icons/Cross.svg'}
          />
        </NavBarUl>
      ) : (
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
              isCurrent={'/about' === location.pathname}
              onClick={closeMenu}
              disabled
            >
              À Propos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/streamers"
              isCurrent={'/streamers' === location.pathname}
              onClick={closeMenu}
            >
              Streamers
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/rediffs"
              isCurrent={'/rediffs' === location.pathname}
              onClick={closeMenu}
              disabled
            >
              Rediffs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/podcast"
              isCurrent={'/podcast' === location.pathname}
              onClick={closeMenu}
              disabled
            >
              Podcast
            </NavLink>
          </li>
          <CloseImg
            alt="Close icon"
            onClick={closeMenu}
            className="logo"
            src={process.env.PUBLIC_URL + '/assets/icons/Cross.svg'}
          />
        </NavBarUl>
      )}
    </MenuWrapper>
  );
};

function NavbarMobile() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isStreamer = location?.state?.isStreamer;
  const [{ streamer, stream }] = StreamerConsumerHook();
  const homePage = '/home' === location.pathname;
  var audio = streamer && new Audio(streamer?.thePhrase);
  var audioTEKITOA = new Audio(process.env.PUBLIC_URL + '/assets/TEKITOA.mp3');

  const onClickAudio = () => {
    if (homePage) {
      audioTEKITOA.play();
    } else {
      audio.play();
    }
  };

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
        {(isStreamer || homePage) && (
          <PhraseButton onClick={onClickAudio}>
            <PlayIcon
              alt="Play icon"
              src={process.env.PUBLIC_URL + '/assets/icons/Play.svg'}
            />
            LA PHRASE
          </PhraseButton>
        )}
      </WrapperBorder>
      {isMenuOpen && (
        <MenuItems
          location={location}
          isStreamer={isStreamer}
          streamer={streamer}
          stream={stream}
          closeMenu={closeMenu}
        />
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${WrapperStyle};
`;

const WrapperBorder = styled.div`
  ${WrapperBorderStyle};
`;

const LogoImg = styled.img`
  ${LogoStyle};
`;

const CloseImg = styled.img`
  ${CloseImgStyle};
`;

const Menuleft = styled.div`
  ${MenuleftStyle};
`;

const MenuLogo = styled.img`
  ${MenuLogoStyle};
`;

const MenuIcon = styled.img`
  ${MenuIconStyle};
`;

const MenuWrapper = styled.div`
  ${MenuWrapperStyle};
`;

const NavBarUl = styled.ul`
  ${NavBarUlStyle};
`;

const NavLink = styled(Link)`
  ${NavLinkStyle};
`;

const PhraseButton = styled.div`
  ${PhraseButtonStyle};
`;

const PlayIcon = styled.img`
  ${PlayIconStyle};
`;

export default NavbarMobile;
