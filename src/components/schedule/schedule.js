import React, { useState } from 'react'
import styled from 'styled-components'
import { generatePath, useNavigate } from 'react-router';

import { getMonthString, getCurrentYear, getCurrentMonth } from 'utils/parseJsonSchedule'
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
  const [currentYear, setCurrentYear] = useState(getCurrentYear());
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  scheduleArray[currentYear][currentMonth].sort((a, b) => (a?.dateTKT > b?.dateTKT) ? 1 : -1)

  const onClickForward = () => {
    if (currentMonth < 12) {
      setCurrentMonth(currentMonth + 1)
    } else {
      setCurrentYear(currentYear + 1)
      setCurrentMonth(1)
    }
  }

  const onClickRearward = () => {
    if (currentMonth > 1) {
      setCurrentMonth(currentMonth - 1)
    } else {
      setCurrentYear(currentYear - 1)
      setCurrentMonth(12)
    }
  }

  const canForward = () => {
    if (currentMonth < 12) {
      if (scheduleArray[currentYear][currentMonth + 1]) {
        return true;
      } else {
        return false;
      }
    } else {
      if (scheduleArray[currentYear + 1][1]) {
        return true;
      } else {
        return false;
      }
    }
  }

  const canRearward = () => {
    if (currentMonth > 1) {
      if (scheduleArray[currentYear][currentMonth - 1]) {
        return true;
      } else {
        return false;
      }
    } else {
      if (scheduleArray[currentYear - 1][12]) {
        return true;
      } else {
        return false;
      }
    }
  }

  return (
    <Wrapper isMobile={isMobile}>
      <MonthLabel isMobile={isMobile}>{getMonthString(currentMonth)}</MonthLabel>
      {isMobile &&
        <div>
          {canRearward() ?
            <ArrowRearward
              alt="Rearward icon"
              onClick={onClickRearward}
              small
              src={process.env.PUBLIC_URL + '/assets/icons/ArrowLeft.svg'}
            />
            :
            <ArrowDisabledRearward
              alt="Rearward icon"
              small
              src={process.env.PUBLIC_URL + '/assets/icons/ArrowDisabledLeft.svg'}
            />
          }
          {canForward() ?
            <ArrowForward
              alt="Forward icon"
              onClick={onClickForward}
              small
              src={process.env.PUBLIC_URL + '/assets/icons/ArrowRight.svg'}
            />
            :
            <ArrowDisabledForward
              alt="Forward icon"
              small
              src={process.env.PUBLIC_URL + '/assets/icons/ArrowDisabledRight.svg'}
            />
          }
        </div>
      }
      <ScheduleMainWrapper>
        {!isMobile &&
          <div>
            {canRearward() ?
              <ArrowRearward
                alt="Rearward icon"
                onClick={onClickRearward}
                src={process.env.PUBLIC_URL + '/assets/icons/ArrowLeft.svg'}
              />
              :
              <ArrowDisabledRearward
                alt="Rearward icon"
                src={process.env.PUBLIC_URL + '/assets/icons/ArrowDisabledLeft.svg'}
              />
            }
          </div>
        }
        <ScheduleWrapper isMobile={isMobile}>
          {scheduleArray && scheduleArray[currentYear][currentMonth].map((day, index) => (
            <ScheduleDay key={day + index} day={day} isMobile={isMobile} />
          ))}
        </ScheduleWrapper>
        {!isMobile &&
          <div>
            {canForward() ?
              <ArrowForward
                alt="Forward icon"
                onClick={onClickForward}
                src={process.env.PUBLIC_URL + '/assets/icons/ArrowRight.svg'}
              />
              :
              <ArrowDisabledForward
                alt="Forward icon"
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
