import React from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation, Link } from 'react-router-dom';

import OnLiveDot from 'components/onLiveDot/onLiveDot';

import { StreamerConsumerHook } from 'stores/streamerStore';

import {
  NavLinkStyle,
  WrapperBorderStyle,
  WrapperStyle,
  LogoStyle,
  NavBarUlStyle,
  PhraseButtonStyle,
  PlayIconStyle,
} from 'components/navbar/navbar.style.js';

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const isStreamer = location?.state?.isStreamer;
  const [{ streamer, stream }] = StreamerConsumerHook();
  const homePage = '/home' === location.pathname;
  var audio = streamer && streamer?.thePhrase && new Audio(streamer?.thePhrase);
  var audioTEKITOA = new Audio(process.env.PUBLIC_URL + '/assets/TEKITOA.mp3');

  function handleClick() {
    navigate('/home');
  }

  const onClickAudio = () => {
    if (homePage) {
      audioTEKITOA.play();
    } else {
      audio.play();
    }
  };

  return (
    <Wrapper>
      {isStreamer ? (
        <WrapperBorder>
          <NavBarUl className="navbar">
            <LogoImg
              alt="TE KI TOA logo"
              onClick={handleClick}
              className="logo"
              src={process.env.PUBLIC_URL + '/assets/logo.png'}
            />
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
                isCurrent={
                  '/' + streamer?.pseudo + '/twitch' === location.pathname
                }
              >
                Twitch
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'/' + streamer?.pseudo + '/reseaux'}
                state={{ isStreamer: true }}
                isCurrent={
                  '/' + streamer?.pseudo + '/reseaux' === location.pathname
                }
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
                >
                  <OnLiveDot small />
                  On Live
                </NavLink>
              </li>
            )}
          </NavBarUl>
          {(homePage || audio) &&
            <PhraseButton onClick={onClickAudio} disabled={!homePage && !audio}>
              <PlayIcon
                alt="Play Icon"
                src={process.env.PUBLIC_URL + '/assets/icons/Play.svg'}
              />
              LA PHRASE
            </PhraseButton>
          }
        </WrapperBorder>
      ) : (
        <WrapperBorder homePage={homePage}>
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
              >
                À Propos
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/streamersBrowse"
                isCurrent={'/streamersBrowse' === location.pathname}
              >
                Streamers
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/schedule"
                isCurrent={'/schedule' === location.pathname}
              >
                Calendrier
              </NavLink>
            </li>
            {/*
            <li>
              <NavLink
                to="/rediffs"
                isCurrent={'/rediffs' === location.pathname}
                disabled
              >
                Rediffs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/podcast"
                isCurrent={'/podcast' === location.pathname}
                disabled
              >
                Podcast
              </NavLink>
            </li>
            */}
          </NavBarUl>
          {homePage && (
            <PhraseButton onClick={onClickAudio}>
              <PlayIcon
                alt="Play icon"
                src={process.env.PUBLIC_URL + '/assets/icons/Play.svg'}
              />
              LE SON
            </PhraseButton>
          )}
        </WrapperBorder>
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

export default Navbar;
