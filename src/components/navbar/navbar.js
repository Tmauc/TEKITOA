import React from 'react'
import styled from 'styled-components';
import { useNavigate, useLocation, Link } from "react-router-dom";

import OnLiveDot from 'components/onLiveDot/onLiveDot';
import Logo from 'assets/logo.png'
import Play from 'assets/icons/Play.svg'
import TEKITOASound from 'assets/TEKITOA.mp3'

import { StreamerConsumerHook } from 'stores/streamerStore';

import { NavLinkStyle, WrapperBorderStyle, WrapperStyle, NavBarUlStyle, PhraseButtonStyle, PlayIconStyle } from './navbar.style.js'

function Navbar() {
  const location = useLocation()
  const navigate = useNavigate();
  const isStreamer = location?.state?.isStreamer;
  const [{ streamer, stream }] = StreamerConsumerHook();
  const homePage = '/home' === location.pathname;
  var audio = streamer && new Audio(streamer?.thePhrase);
  var audioTEKITOA = TEKITOASound && new Audio(TEKITOASound);

  function handleClick() {
    navigate('/home');
  }

  const onClickAudio = () => {
    if (homePage) {
      audioTEKITOA.play();
    } else {
      audio.play();
    };
  }

  return (
    <Wrapper>
      {isStreamer ?
        <WrapperBorder>
          <NavBarUl className='navbar'>
            <img onClick={handleClick} className='logo' src={Logo} />
            <li>
              <NavLink
                to={'/' + streamer?.pseudo}
                state={{ isStreamer: true }}
                isCurrent={'/' + streamer?.pseudo === location.pathname}
              >
                {streamer?.pseudo}
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'/' + streamer?.pseudo + '/twitch'}
                state={{ isStreamer: true }}
                isCurrent={'/' + streamer?.pseudo + '/twitch' === location.pathname}
              >
                Twitch
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'/' + streamer?.pseudo + '/reseaux'}
                state={{ isStreamer: true }}
                isCurrent={'/' + streamer?.pseudo + '/reseaux' === location.pathname}
                disabled
              >
                Réseaux
              </NavLink>
            </li>
            {stream &&
              <li>
                <NavLink
                  to={'/' + streamer?.pseudo + '/onlive'}
                  state={{ isStreamer: true }}
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
        <WrapperBorder homePage={homePage}>
          <NavBarUl className='navbar'>
            <img onClick={handleClick} className='logo' src={Logo} />
            <li><NavLink to='/about' isCurrent={'/about' === location.pathname} disabled >À Propos</NavLink></li>
            <li><NavLink to='/streamers' isCurrent={'/streamers' === location.pathname}>Streamers</NavLink></li>
            <li><NavLink to='/rediffs' isCurrent={'/rediffs' === location.pathname} disabled>Rediffs</NavLink></li>
            <li><NavLink to='/podcast' isCurrent={'/podcast' === location.pathname} disabled>Podcast</NavLink></li>
          </NavBarUl>
          {homePage &&
            <PhraseButton onClick={onClickAudio}>
              <PlayIcon src={Play} />
              LE SON
            </PhraseButton>
          }
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
