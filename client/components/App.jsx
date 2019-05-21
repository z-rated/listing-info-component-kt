import React from 'react';
import styled from 'styled-components';
import TimeListContainer from '../redux/containers/TimeListContainer';
import AddressContainer from '../redux/containers/AddressContainer';
import PhoneNumberContainer from '../redux/containers/PhoneNumberContainer';
import WebsiteContainer from '../redux/containers/WebsiteContainer';
import GetDirectionsContainer from '../redux/containers/GetDirectionsContainer';
import MapContainer from '../redux/containers/MapContainer';

const Module = styled.div`
  padding: 24px 32px;
  min-width: 250px;

  @font-face {
    font-family: "Calibre-Regular";
    src: url("../../public/fonts/CalibreWeb-Regular.woff2") format("woff2");
  }
`;

const Spacer = styled.div`
  width: 100%;
  height: 25px;

`;

const initData = (cb) => {
  fetch(`http://127.0.0.1:1234/api/restaurants/${'100'}/info`)
    .then(res => res.json())
    .then(data => cb(data));
};

const App = ({ updateData }) => {
  initData((data) => {
    updateData(data);
  });

  return (
    <Module>
      <TimeListContainer />
      <Spacer />
      <AddressContainer />
      <Spacer />
      <PhoneNumberContainer />
      <Spacer />
      <WebsiteContainer />
      <Spacer />
      <GetDirectionsContainer />
      <MapContainer />
    </Module>
  );
};

export default App;
