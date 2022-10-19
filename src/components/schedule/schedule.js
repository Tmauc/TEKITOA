import React, { useState } from 'react'
import styled from 'styled-components'
import { generatePath, useNavigate } from 'react-router';

import { getMonthString } from 'utils/parseJsonSchedule'
import { useDevice } from 'hooks/useDevice';

import { WrapperStyle, ScheduleMainWrapperStyle, MonthLabelStyle, ScheduleWrapperStyle, ArrowDisabledStyle, ArrowStyle, DayWrapperStyle, DayHeaderWrapperStyle, DateLabelStyle, PseudoLabelStyle, MainWrapperStyle, StreamerImageStyle } from 'components/schedule/schedule.style'

function ScheduleDay({ day, isMobile }) {
  const navigate = useNavigate();

  const onClickDay = () => {
    var generateStreamerPath = generatePath('/:streamer', {
      streamer: day?.pseudo,
    });
    navigate(generateStreamerPath, { state: { isStreamer: true } });
  };

  return (
    <DayWrapper onClick={onClickDay}>
      <DayHeaderWrapper isMobile={isMobile}>
        <DateLabel>{day?.dateTKT}</DateLabel>
        <PseudoLabel>{day?.pseudo}</PseudoLabel>
      </DayHeaderWrapper>
      {!isMobile &&
        <MainWrapper>
          <StreamerImage src={day?.imgPath} />
        </MainWrapper>
      }
    </DayWrapper>
  )
}

function Schedule({ scheduleArray }) {
  const { isMobile } = useDevice();
  const [currentMonth, setCurrentMonth] = useState(Object.keys(scheduleArray)?.length - 1);

  scheduleArray[Object.keys(scheduleArray)[currentMonth]].sort((a, b) => (a?.dateTKT > b?.dateTKT) ? 1 : -1)

  const onClickRearward = () => {
    if (currentMonth < Object.keys(scheduleArray)?.length - 1) {
      setCurrentMonth(currentMonth + 1)
    }
  }

  const onClickForward = () => {
    if (currentMonth > 0) {
      setCurrentMonth(currentMonth - 1)
    }
  }

  return (
    <Wrapper isMobile={isMobile}>
      <MonthLabel isMobile={isMobile}>{getMonthString(scheduleArray[Object.keys(scheduleArray)[currentMonth]][0]?.dateTKT)}</MonthLabel>
      {isMobile &&
        <div>
          {currentMonth > 0 ?
            <ArrowRearward
              alt="Rearward icon"
              onClick={onClickForward}
              small
              src={process.env.PUBLIC_URL + '/assets/icons/ArrowLeft.svg'}
            />
            :
            <ArrowDisabledRearward
              alt="Rearward icon"
              onClick={onClickForward}
              small
              src={process.env.PUBLIC_URL + '/assets/icons/ArrowDisabledLeft.svg'}
            />
          }
          {(currentMonth < Object.keys(scheduleArray)?.length - 1) ?
            <ArrowForward
              alt="Forward icon"
              onClick={onClickRearward}
              small
              src={process.env.PUBLIC_URL + '/assets/icons/ArrowRight.svg'}
            />
            :
            <ArrowDisabledForward
              alt="Forward icon"
              onClick={onClickRearward}
              small
              src={process.env.PUBLIC_URL + '/assets/icons/ArrowDisabledRight.svg'}
            />
          }
        </div>
      }
      <ScheduleMainWrapper>
        {!isMobile &&
          <div>
            {currentMonth > 0 ?
              <ArrowRearward
                alt="Rearward icon"
                onClick={onClickForward}
                src={process.env.PUBLIC_URL + '/assets/icons/ArrowLeft.svg'}
              />
              :
              <ArrowDisabledRearward
                alt="Rearward icon"
                onClick={onClickForward}
                src={process.env.PUBLIC_URL + '/assets/icons/ArrowDisabledLeft.svg'}
              />
            }
          </div>
        }
        <ScheduleWrapper isMobile={isMobile}>
          {scheduleArray && scheduleArray[Object.keys(scheduleArray)[currentMonth]].map((day, index) => (
            <ScheduleDay key={day + index} day={day} isMobile={isMobile} />
          ))}
        </ScheduleWrapper>
        {!isMobile &&
          <div>
            {(currentMonth < Object.keys(scheduleArray)?.length - 1) ?
              <ArrowForward
                alt="Forward icon"
                onClick={onClickRearward}
                src={process.env.PUBLIC_URL + '/assets/icons/ArrowRight.svg'}
              />
              :
              <ArrowDisabledForward
                alt="Forward icon"
                onClick={onClickRearward}
                src={process.env.PUBLIC_URL + '/assets/icons/ArrowDisabledRight.svg'}
              />
            }
          </div>
        }
      </ScheduleMainWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  ${WrapperStyle};
`

const ScheduleMainWrapper = styled.div`
  ${ScheduleMainWrapperStyle};
`

const MonthLabel = styled.p`
  ${MonthLabelStyle};
`;

const ScheduleWrapper = styled.div`
  ${ScheduleWrapperStyle};
`

const ArrowRearward = styled.img`
  ${ArrowStyle};
`;

const ArrowForward = styled.img`
  ${ArrowStyle};
`;

const ArrowDisabledRearward = styled.img`
  ${ArrowDisabledStyle};
`;

const ArrowDisabledForward = styled.img`
  ${ArrowDisabledStyle};
`;

const DayWrapper = styled.div`
  ${DayWrapperStyle};
`

const DayHeaderWrapper = styled.div`
  ${DayHeaderWrapperStyle};
`

const DateLabel = styled.p`
  ${DateLabelStyle};
`

const PseudoLabel = styled.p`
  ${PseudoLabelStyle};
`

const MainWrapper = styled.div`
  ${MainWrapperStyle};
`

const StreamerImage = styled.img`
  ${StreamerImageStyle};
`

export default Schedule
