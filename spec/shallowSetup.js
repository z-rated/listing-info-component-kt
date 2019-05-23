import React from 'react';
import { shallow } from 'enzyme';
import TimeList from '../client/components/TimeList';
import App from '../client/components/App';

//Use array destructurig to create mock functions.
const [toggleTimeList] = new Array(2).fill(jest.fn());

function TimeListShallowSetup() {
  // Sample props to pass to our shallow render
  const props = {
    timeListIsOpen: true,
    toggleTimeList,
  };
  // wrapper instance around rendered output
  const enzymeWrapper = shallow(<TimeList {...props} />);

  return {
    props,
    enzymeWrapper,
  };
}

function AppShallowSetup() {
  // Sample props to pass to our shallow render
  const props = {
    modalIsOpen: true,
  };
  // wrapper instance around rendered output
  const enzymeWrapper = shallow(<App {...props} />);

  return {
    props,
    enzymeWrapper,
  };
}

module.exports = { TimeListShallowSetup, AppShallowSetup };
