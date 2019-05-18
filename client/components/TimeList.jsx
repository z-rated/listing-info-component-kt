import React from 'react';
import styled from 'styled-components';

const OpenNow = styled.div`
  display: inline-block;
  color: #101820;
  letter-spacing: .013em;
  
  &:hover {
    color: #b70038; // <Thing> when hovered
  }
  `;

const DropDown = styled.div`
  display: flex;
  flex-direction:
  color: #101820;
  letter-spacing: .013em;
  
  &:hover {
    color: #b70038; // <Thing> when hovered
  }
  `;

const getDay = () => {
  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const today = new Date();

  return weekdays[today.getDay()];
};

const TimeList = ({ timeListIsOpen, toggleTimeList, data }) => (
  <div>
    <div>
      <div id="timeLogo">{getDay()}</div>
      <OpenNow>
      </OpenNow>
    </div>
    {timeListIsOpen ? (
      <DropDown>
        <ul>
          <li>time</li>
        </ul>
      </DropDown>
    ) : ''}
  </div>
);

export default TimeList;
