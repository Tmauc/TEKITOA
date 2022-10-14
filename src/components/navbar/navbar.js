import React from 'react'
import styled from 'styled-components';
import { useNavigate, useLocation, Link } from "react-router-dom";

import OnLiveDot from 'components/onLiveDot/onLiveDot';
import Logo from 'assets/logo.png'
import Play from 'assets/icons/Play.svg'

import { StreamerConsumerHook } from 'stores/streamerStore';

import { NavLinkStyle, WrapperBorderStyle, WrapperStyle, NavBarUlStyle, PhraseButtonStyle, PlayIconStyle } from './navbar.style.js'

function Navbar() {
  const location = useLocation()
  const navigate = useNavigate();
  const isStreamer = location?.state?.streamer;
  const [{ streamer, stream }] = StreamerConsumerHook();
  var audio = streamer && new Audio(streamer?.thePhrase);

  function handleClick() {
    navigate('/home');
  }

  const onClickAudio = () => {
    audio.play()
  };

  return (
    <Wrapper>

      {isStreamer ?
        <WrapperBorder>
          <NavBarUl className='navbar'>
            <img onClick={handleClick} className='logo' src={Logo} />
            <li>
              <NavLink
                to={'/' + streamer?.pseudo}
                state={{ streamer: true }}
                isCurrent={'/' + streamer?.pseudo === location.pathname}
              >
                {streamer?.pseudo}
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'/' + streamer?.pseudo + '/twitch'}
                state={{ streamer: true }}
                isCurrent={'/' + streamer?.pseudo + '/twitch' === location.pathname}
              >
                Twitch
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'/' + streamer?.pseudo + '/reseaux'}
                state={{ streamer: true }}
                isCurrent={'/' + streamer?.pseudo + '/reseaux' === location.pathname}
              >
                Réseaux
              </NavLink>
            </li>
            {stream &&
              <li>
                <NavLink
                  to={'/' + streamer?.pseudo + '/onlive'}
                  state={{ streamer: true }}
                  isCurrent={'/' + streamer?.pseudo + '/onlive' === location.pathname}
                >
                  <OnLiveDot small />
                  On Live
                </NavLink>
              </li>
            }
          </NavBarUl>
          <PhraseButton onClick={onClickAudio}>
            <PlayIcon src={Play} />
            LA PHRASE
          </PhraseButton>
        </WrapperBorder>
        :
        <WrapperBorder>
          <NavBarUl className='navbar'>
            <img onClick={handleClick} className='logo' src={Logo} />
            <li><NavLink to='/about' isCurrent={'/about' === location.pathname}>À Propos</NavLink></li>
            <li><NavLink to='/streamers' isCurrent={'/streamers' === location.pathname}>Streamers</NavLink></li>
            <li><NavLink to='/rediffs' isCurrent={'/rediffs' === location.pathname}>Rediffs</NavLink></li>
            <li><NavLink to='/podcast' isCurrent={'/podcast' === location.pathname}>Podcast</NavLink></li>
          </NavBarUl>
        </WrapperBorder>
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

export default Navbar
