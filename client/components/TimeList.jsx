import React from 'react';
import styled from 'styled-components';
import OpenStatusContainer from '../redux/containers/OpenStatusContainer';
import TimeListEntry from './TimeListEntry';

const DropDown = styled.ul`
  max-width: 315px;
  color: #101820;
  letter-spacing: .013em;
  list-style-type: none;
  padding-left: 48px;
  `;

const getDay = () => {
  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const today = new Date();

  return weekdays[today.getDay()];
};

const makeList = (hours) => {
  const keys = Object.keys(hours);
  const today = getDay();
  const days = [];

  for (let i = 0; i < keys.length; i += 1) {
    const timeData = hours[keys[i]];
    const isBold = keys[i] === today;

    days.push(<TimeListEntry
      open={timeData.open}
      close={timeData.close}
      day={keys[i]}
      today={today}
      key={i}
      isBold={isBold}
    />);
  }

  return days;
};

const TimeList = ({ timeListIsOpen, data }) => {
  const list = data ? makeList(data.hours) : [];
  const day = getDay();

  return (
    <div>
      {
        data
          ? (
            <OpenStatusContainer
              day={day}
              timeListIsOpen={timeListIsOpen}
            />
          )
          : ''
      }
      {timeListIsOpen ? (
        <DropDown>
          {list}
        </DropDown>
      ) : ''}
    </div>
  );
};

export default TimeList;
