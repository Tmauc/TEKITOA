import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import './lib.scss';
import StreamersJson from 'assets/streamers.json';

import Home from 'pages/home/home';
import About from 'pages/about/about';
import Streamers from 'pages/streamers/streamers';
import Streamer from 'pages/streamer/streamer';
import Rediffs from 'pages/rediffs/rediffs';
import Podcast from 'pages/podcast/podcast';
import Networks from 'pages/networks/networks';
import Twitch from 'pages/twitch/twitch';
import OnLive from 'pages/onLive/onLive';

import Navbar from 'components/navbar/navbar'
import NavbarMobile from 'components/navbarMobile/navbarMobile'
import { useDevice } from 'hooks/useDevice'

import { StreamerProvider } from 'stores/streamerStore';

function App() {
  const { isMobile } = useDevice();
  return (
    <div className="App">
      <StreamerProvider>
        <Router>
          <Routes>
            <Route exact path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/streamers" element={<Streamers />} />
            <Route path="/rediffs" element={<Rediffs />} />
            <Route path="/podcast" element={<Podcast />} />
            {StreamersJson.streamers.map((streamer, index) => (
              <>
                <Route key={streamer + index} path={'/' + streamer.pseudo} element={<Streamer />} />
                <Route key={streamer + 'twitch' + index} path={'/' + streamer.pseudo + '/' + 'twitch'} element={<Twitch />} />
                <Route key={streamer + 'reseaux' + index} path={'/' + streamer.pseudo + '/' + 'reseaux'} element={<Networks />} />
                <Route key={streamer + 'onlive' + index} path={'/' + streamer.pseudo + '/' + 'onlive'} element={<OnLive />} />
              </>
            ))}
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
          {!isMobile ? <Navbar /> : <NavbarMobile />}
        </Router>
      </StreamerProvider>
    </div>
  );
}

export default App;
