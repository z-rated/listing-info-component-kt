import React from 'react';
import styled from 'styled-components';
import TimeListContainer from '../redux/containers/TimeListContainer';
import AddressContainer from '../redux/containers/AddressContainer';
import PhoneNumberContainer from '../redux/containers/PhoneNumberContainer';
import WebsiteContainer from '../redux/containers/WebsiteContainer';
import GetDirectionsContainer from '../redux/containers/GetDirectionsContainer';
import MapContainer from '../redux/containers/MapContainer';
import ModalContainer from '../redux/containers/ModalContainer';

const Module = styled.div`
  @font-face {
    font-family: "Calibre-Regular";
    src: url("http://127.0.0.1:3002/fonts/CalibreWeb-Regular.woff2") format("woff2");
  }
  
  @font-face {
    font-family: "Calibre-Semibold";
    src: url("http://127.0.0.1:3002/fonts/CalibreWeb-Semibold.woff2");
  }
  
  padding: 32px;
  margin: 32px;
  margin-right: 150px;
  min-width: 22vw;
  max-width: 330px;
  max-height: 80vh;
  background-color: white;
  float: right;
  overflow: scroll;
  font-size: 14px;
  cursor: default;


  font-family: "Calibre-Regular", sans-serif;
`;

const initData = (cb) => {
  let id = window.location.pathname.split('/restaurants/')[1];

  fetch(`/restaurants/${id}/info`)
    .then(res => res.json())
    .then(data => cb(data));
};

const App = ({ modalIsOpen, updateData }) => {
  initData((data) => {
    updateData(data);
  });

  return (
    <div>
      {modalIsOpen ? <ModalContainer /> : ''}
      <Module>
        <TimeListContainer />
        <AddressContainer />
        <PhoneNumberContainer />
        <WebsiteContainer />
        <GetDirectionsContainer />
        <MapContainer />
      </Module>
    </div>
  );
};

export default App;
