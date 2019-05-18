import React from 'react';
import styled from 'styled-components';
import TimeListContainer from '../redux/containers/TimeListContainer';
import AddressContainer from '../redux/containers/AddressContainer';

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
  height: 10px;

`;

const initData = (cb) => {
  fetch(`http://127.0.0.1:1234/api/restaurants/${'10'}/info`)
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
        {/* <div id='phone'>{this.props.phone}</div>
        <div id='website'>{this.props.url}</div>
        <div id='get-directions'></div>
        <MapContainer /> */}
    </Module>
  );
};

export default App;
