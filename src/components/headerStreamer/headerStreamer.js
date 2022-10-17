import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { useDevice } from 'hooks/useDevice';

import {
  HeaderStyle,
  HeaderLeftWrapperStyle,
  TitleLinkStyle,
  HeaderRightWrapperStyle,
  BackIconStyle,
} from 'components/headerStreamer/headerStreamer.style';

function HeaderStreamer({ title, twitchURL }) {
  const navigate = useNavigate();
  const { isMobile } = useDevice();

  function backStreamers() {
    navigate('/streamersBrowse');
  }

  const goToTwitch = () => {
    window.open(twitchURL, '_blank').focus();
  };

  return (
    <Header isMobile={isMobile}>
      <HeaderLeftWrapper isMobile={isMobile}>
        <TitleLink onClick={goToTwitch} isMobile={isMobile}>
          {title}
        </TitleLink>
      </HeaderLeftWrapper>
      <HeaderRightWrapper>
        <BackIcon
          alt="Back icon"
          small={isMobile}
          onClick={backStreamers}
          src={process.env.PUBLIC_URL + '/assets/icons/ArrowLeft.svg'}
        />
      </HeaderRightWrapper>
    </Header>
  );
}

const Header = styled.header`
  ${HeaderStyle};
`;

const HeaderLeftWrapper = styled.div`
  ${HeaderLeftWrapperStyle};
`;

const TitleLink = styled.h1`
  ${TitleLinkStyle};
`;

const HeaderRightWrapper = styled.div`
  ${HeaderRightWrapperStyle};
`;

const BackIcon = styled.img`
  ${BackIconStyle};
`;

export default HeaderStreamer;
