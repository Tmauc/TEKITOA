import React, { useState, useCallback } from 'react'
import styled from 'styled-components';
import { useNavigate, useLocation, Link } from "react-router-dom";
import { NavLinkStyle, WrapperBorderStyle, LogoStyle, CloseImgStyle, MenuIconStyle, MenuWrapperStyle, WrapperStyle, NavBarUlStyle, PhraseButtonStyle, PlayIconStyle } from './navbarMobile.style.js'
import Logo from 'assets/logo.png'
import Play from 'assets/icons/Play.svg'
import Menu from 'assets/icons/Menu.svg'
import Close from 'assets/icons/Cross.svg'


const MenuItems = (location, streamer, onClickMenu) => {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/home');
  }

  return (
    <MenuWrapper>
      {streamer ?
        <NavBarUl className='navbar'>
          <LogoImg onClick={handleClick} className='logo' src={Logo} />
          <li>
            <NavLink
              to={'/' + streamer.pseudo}
              state={{ streamer: streamer }}
              isCurrent={'/' + streamer.pseudo === location.pathname}
            >
              {streamer.pseudo}
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/' + streamer.pseudo + '/twitch'}
              state={{ streamer: streamer }}
              isCurrent={'/' + streamer.pseudo + '/twitch' === location.pathname}
            >
              Twitch
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/' + streamer.pseudo + '/reseaux'}
              state={{ streamer: streamer }}
              isCurrent={'/' + streamer.pseudo + '/reseaux' === location.pathname}
            >
              Réseaux
            </NavLink>
          </li>
          <CloseImg onClick={onClickMenu} className='logo' src={Close} />
        </NavBarUl>
        :
        <NavBarUl className='navbar'>
          <LogoImg onClick={handleClick} className='logo' src={Logo} />
          <li><NavLink to='/about' isCurrent={'/about' === location.pathname}>À Propos</NavLink></li>
          <li><NavLink to='/streamers' isCurrent={'/streamers' === location.pathname}>Streamers</NavLink></li>
          <li><NavLink to='/rediffs' isCurrent={'/rediffs' === location.pathname}>Rediffs</NavLink></li>
          <li><NavLink to='/podcast' isCurrent={'/podcast' === location.pathname}>Podcast</NavLink></li>
          <CloseImg onClick={onClickMenu} className='logo' src={Close} />
        </NavBarUl>
      }
    </MenuWrapper>
  )

}

function NavbarMobile() {
  const location = useLocation()
  const [menuOpen, isMenuOpen] = useState(false);
  const streamer = location?.state?.streamer;
  var audio = streamer && new Audio(streamer?.thePhrase);

  const onClickAudio = () => {
    audio.play()
  };

  const onClickMenu = useCallback(() => {

  }, [isMenuOpen, menuOpen]);

  return (
    <Wrapper>

      <WrapperBorder>
        <MenuIcon onClick={onClickMenu} className='logo' src={Menu} />
        {streamer &&
          <PhraseButton onClick={onClickAudio}>
            <PlayIcon src={Play} />
            LA PHRASE
          </PhraseButton>
        }
      </WrapperBorder>
      {menuOpen &&
        MenuItems(location, streamer, onClickMenu)
      }
    </Wrapper>
  )
}

const Wrapper = styled.div`
  ${WrapperStyle};
`

const WrapperBorder = styled.div`
  ${WrapperBorderStyle};
`

const LogoImg = styled.img`
  ${LogoStyle};
`

const CloseImg = styled.img`
  ${CloseImgStyle};
`

const MenuIcon = styled.img`
  ${MenuIconStyle};
`

const MenuWrapper = styled.div`
  ${MenuWrapperStyle};
`

const NavBarUl = styled.ul`
  ${NavBarUlStyle};
`

const NavLink = styled(Link)`
  ${NavLinkStyle};
`

const PhraseButton = styled.div`
  ${PhraseButtonStyle};
`

const PlayIcon = styled.img`
  ${PlayIconStyle};
`

export default NavbarMobile
