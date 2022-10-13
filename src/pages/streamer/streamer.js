import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';

import Description from 'components/description/description.js';
import FakeWindow from 'components/fakeWindow/fakeWindow.js';
import ArrowIcon from 'assets/icons/Arrow.svg'

import { StreamerConsumerHook } from 'stores/streamerStore';

import { getUser } from 'core/twitchAPI.js';

import { SectionStyle, HeaderStyle, HeaderLeftWrapperStyle, HeaderRightWrapperStyle, BackIconStyle, StatusStyle, MainStyle, LeftWrapperStyle, RediffWrapperStyle, ImgWrapperStyle, StreamerImgStyle } from './streamer.style.js'

function Streamer() {
  const navigate = useNavigate();
  const [{ streamer, OAuth, id, stream }, dispatch] = StreamerConsumerHook();

  function backStreamers() {
    navigate('/streamers');
  }

  useEffect(() => {
    getUser(dispatch, OAuth, streamer?.pseudoTwitch);
  }, []);

  return (
    <Section className='Streamer'>
      <Header>
        <HeaderLeftWrapper>
          <h1 className='title'>{streamer?.pseudo}</h1>
          <Status onlive={stream} />
        </HeaderLeftWrapper>
        <HeaderRightWrapper>
          <BackIcon onClick={backStreamers} src={ArrowIcon} />
        </HeaderRightWrapper>
      </Header>
      <Main>
        {<LeftWrapper>
          <Description title={'Début'} label={streamer?.start} />
          <Description title={'Langue'} label={streamer?.language} />
          <Description title={'Hobbies'} label={streamer?.hobbies} />
          <Description title={'Catégories'} label={streamer?.categories} />
          <Description title={'Objectifs'} label={streamer?.objectifs} />
          <RediffWrapper>
            <FakeWindow type="Rediff.exe" title={'TKT ' + streamer?.pseudo + ' - ' + streamer?.dateTKT} url={streamer?.rediffTKT} size={[440, 250]} />
          </RediffWrapper>
        </LeftWrapper>}
        <ImgWrapper>
          <StreamerImg src={streamer?.imgPath} />
        </ImgWrapper>
      </Main>
    </Section >
  )
}

const Section = styled.section`
  ${SectionStyle};
`

const Header = styled.header`
  ${HeaderStyle};
`

const HeaderLeftWrapper = styled.div`
  ${HeaderLeftWrapperStyle};
`

const HeaderRightWrapper = styled.div`
  ${HeaderRightWrapperStyle};
`

const BackIcon = styled.img`
  ${BackIconStyle};
`

const Status = styled.div`
  ${StatusStyle};
`

const Main = styled.div`
  ${MainStyle};
`

const LeftWrapper = styled.div`
  ${LeftWrapperStyle};
`

const RediffWrapper = styled.div`
  ${RediffWrapperStyle};
`

const ImgWrapper = styled.div`
  ${ImgWrapperStyle};
`

const StreamerImg = styled.img`
  ${StreamerImgStyle};
`

export default Streamer
