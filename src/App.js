import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';

import { createGlobalStyle, keyframes } from 'styled-components';

import Home from 'pages/home/home';
import About from 'pages/about/about';
import StreamersBrowse from 'pages/streamersBrowse/streamersBrowse';
import Schedule from 'pages/scheduleTKT/scheduleTKT';
import Streamer from 'pages/streamer/streamer';
import Rediffs from 'pages/rediffs/rediffs';
import Podcast from 'pages/podcast/podcast';
import Networks from 'pages/networks/networks';
import Twitch from 'pages/twitch/twitch';
import OnLive from 'pages/onLive/onLive';

import StreamersJson from 'streamers.json';

import FooterInfos from 'components/footerInfos/footerInfos'
import Navbar from 'components/navbar/navbar';
import NavbarMobile from 'components/navbarMobile/navbarMobile';
import { useDevice } from 'hooks/useDevice';

import { StreamerProvider } from 'stores/streamerStore';

import { NAVBAR_HEIGHT } from 'components/navbar/navbar.style';
import { NAVBAR_MOBILE_HEIGHT } from 'components/navbarMobile/navbarMobile.style';

function App() {
  const { isMobile } = useDevice();

  return (
    <div className="App">
      <GlobalStyle isMobile={isMobile} />
      <StreamerProvider>
        <Router>
          <Routes>
            <Route exact path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/streamersBrowse" element={<StreamersBrowse />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/rediffs" element={<Rediffs />} />
            <Route path="/podcast" element={<Podcast />} />
            {StreamersJson.streamers.map((streamer, index) => (
              <>
                <Route
                  key={streamer + index}
                  path={'/' + streamer.pseudo}
                  element={<Streamer />}
                />
                <Route
                  key={streamer + 'twitch' + index}
                  path={'/' + streamer.pseudo + '/twitch'}
                  element={<Twitch />}
                />
                <Route
                  key={streamer + 'reseaux' + index}
                  path={'/' + streamer.pseudo + '/reseaux'}
                  element={<Networks />}
                />
                <Route
                  key={streamer + 'onlive' + index}
                  path={'/' + streamer.pseudo + '/onlive'}
                  element={<OnLive />}
                />
              </>
            ))}
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
          {!isMobile ? <Navbar /> : <NavbarMobile />}
          <FooterInfos />
        </Router>
      </StreamerProvider>
    </div>
  );
}

const float = keyframes`
  0% {
		transform: scale(1);
	}
	50% {
		transform: scale(1.03);
	}
	100% {
		transform: scale(1);
	}
`;

const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  list-style-type: none;
}

:root {
  background: linear-gradient(
    90deg,
    #051439 0.44%,
    #3b2570 53.85%,
    #383572 85.16%
  );
}

section {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    90deg,
    #051439 0.44%,
    #3b2570 53.85%,
    #383572 85.16%
  );
  overflow-x: hidden;
  overflow-y: 'scroll';

  h1 {
    font-family: Norwester;
    font-size: 100px;
    color: #f05183;
    text-shadow: 8px 8px 0px #642d5a;
    animation-name: ${float};
    animation-duration: 5s;
    animation-iteration-count: infinite;
  }

  padding: ${(p) => (p.isMobile ? '10px 30px' : '20px 100px')};
  padding-bottom: ${p => p.isMobile ? NAVBAR_MOBILE_HEIGHT + 10 : NAVBAR_HEIGHT + 10}px;
}

::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgba(240, 81, 131, 0.7);
  border-radius: 4px;
  width: 3px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #642d5a;
}

@font-face {
  font-family: 'Norwester';
  src: url(${process.env.PUBLIC_URL + '/assets/fonts/Norwester.woff2'}) format('woff2'),
    url(${process.env.PUBLIC_URL + '/assets/fonts/Norwester.woff'}) format('woff');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Montserrat';
  src: url(${process.env.PUBLIC_URL + '/assets/fonts/Montserrat-Regular.woff2'}) format('woff2'),
    url(${process.env.PUBLIC_URL + '/assets/fonts/Montserrat-Regular.woff'}) format('woff');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
`;

export default App;
