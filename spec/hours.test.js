/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import OpenStatus from '../client/components/OpenStatus.jsx';
import { TimeListShallowSetup } from './shallowSetup';

describe('Open Status/Time List', () => {
  it('should display proper status', () => {
    const status = shallow(
      <OpenStatus data={data} day="Tuesday" />,
    );

    expect(status.find('.status').text()).toEqual('Open Now•' || 'Closed•');
  });

  it('should render time list', () => {
    const { enzymeWrapper, props } = TimeListShallowSetup();

    expect(enzymeWrapper.find('#hours-list').exists()).toBe(true);
  });
});
