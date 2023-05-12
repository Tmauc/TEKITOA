import React, { useState } from 'react'
import { generatePath, useNavigate } from 'react-router';

import { getMonthString } from 'utils/parseJsonSchedule'
//import { getMonthString, getCurrentYear, getCurrentMonth } from 'utils/parseJsonSchedule'
import { useDevice } from 'hooks/useDevice';

import {
  Wrapper,
  ScheduleMainWrapper,
  MonthLabel,
  ScheduleWrapper,
  ArrowDisabled,
  Arrow,
  DayWrapper,
  DayHeaderWrapper,
  DateLabel,
  PseudoLabel,
  MainWrapper,
  StreamerImage
} from 'components/schedule/schedule.style'

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
      <DayHeaderWrapper>
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
  const [currentYear, setCurrentYear] = useState(2023); //getCurrentYear()
  const [currentMonth, setCurrentMonth] = useState(2); //getCurrentMonth()

  if (scheduleArray[currentYear][currentMonth]) {
    scheduleArray[currentYear][currentMonth].sort((a, b) => (a?.dateTKT > b?.dateTKT) ? 1 : -1)
  }

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
    <Wrapper>
      <MonthLabel>{getMonthString(currentMonth)} {currentYear}</MonthLabel>
      {isMobile &&
        <div>
          {canRearward() ?
            <Arrow
              alt="Rearward icon"
              onClick={onClickRearward}
              small
              src={process.env.PUBLIC_URL + '/assets/icons/ArrowLeft.svg'}
            />
            :
            <ArrowDisabled
              alt="Rearward icon"
              small
              src={process.env.PUBLIC_URL + '/assets/icons/ArrowDisabledLeft.svg'}
            />
          }
          {canForward() ?
            <Arrow
              alt="Forward icon"
              onClick={onClickForward}
              small
              src={process.env.PUBLIC_URL + '/assets/icons/ArrowRight.svg'}
            />
            :
            <ArrowDisabled
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
              <Arrow
                alt="Rearward icon"
                onClick={onClickRearward}
                src={process.env.PUBLIC_URL + '/assets/icons/ArrowLeft.svg'}
              />
              :
              <ArrowDisabled
                alt="Rearward icon"
                src={process.env.PUBLIC_URL + '/assets/icons/ArrowDisabledLeft.svg'}
              />
            }
          </div>
        }
        <ScheduleWrapper>
          {scheduleArray && scheduleArray[currentYear][currentMonth].map((day, index) => (
            <ScheduleDay key={day + index} day={day} isMobile={isMobile} />
          ))}
        </ScheduleWrapper>
        {!isMobile &&
          <div>
            {canForward() ?
              <Arrow
                alt="Forward icon"
                onClick={onClickForward}
                src={process.env.PUBLIC_URL + '/assets/icons/ArrowRight.svg'}
              />
              :
              <ArrowDisabled
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

export default Schedule
