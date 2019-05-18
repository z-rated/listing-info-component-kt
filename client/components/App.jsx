import React from 'react';
import TimeListContainer from '../redux/containers/TimeListContainer';

const initData = (cb) => {
  fetch('http://127.0.0.1:1234/api/info?id=1')
    .then(res => res.json())
    .then(data => cb(data));
};

const App = ({ updateData }) => {
  initData((data) => {
    updateData(data);
  });

  return (
    <div>
      <TimeListContainer />
      {/* <AddressContainer />
        <div id='phone'>{this.props.phone}</div>
        <div id='website'>{this.props.url}</div>
        <div id='get-directions'></div>
        <MapContainer /> */}
    </div>
  );
};

export default App;
