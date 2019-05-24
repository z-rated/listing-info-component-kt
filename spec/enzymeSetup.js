import React from 'react';
import { shallow, render, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

global.React = React;
global.shallow = shallow;
global.render = render;
global.mount = mount;

global.data = {
  hours: {
    Monday: {
      open: 5,
      close: 7,
    },
    Tuesday: {
      open: 0,
      close: 12,
    },
    Wednesday: {
      open: 5,
      close: 10,
    },
    Thursday: {
      open: 7,
      close: 7,
    },
    Friday: {
      open: 7,
      close: 9,
    },
    Saturday: {
      open: 8,
      close: 7,
    },
    Sunday: {
      open: 8,
      close: 10,
    },
  },
  id: 20,
  location: {
    address: '832 Adams Dr. Tracy, CA 95376',
    coords: '37.77975895595017° N, 122.40295895595017° W',
  },
  phone: '(689) 843-2075',
  website: 'http://www.crazypizza.com',
};
