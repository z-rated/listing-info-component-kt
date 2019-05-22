import React from 'react';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';
import MapHelpers from '../map-helpers';
import API_KEY from '../maps-config';

const MapDiv = styled.div`
  height: 328px;
  width: 100%;
  position: relative;
`;

const MarkerContainer = styled.img`
  width: 24px;
`;

const GetDirectionsButton = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  color: #b70038;
  width: 150px;
  height: 40px;
  padding: 0 10px;
  box-sizing: border-box;

  &:hover {
    background-color: #b70038;
    color: white;
  }
`;

const ButtonText = styled.p`
  margin: 0;
  letter-spacing: .086em;
`;

const Marker = ({ text }) => (
  <div>
    <MarkerContainer src="./icons/pin_zagat.png" alt={text} />
  </div>
);

const Map = ({ data, modalIsOpen, toggleModal }) => {
  if (data) {
    const coords = MapHelpers.parseCoords(data.location.coords);
    return (
      // Important! Always set the container height explicitly
      <MapDiv>
        <GoogleMapReact
          options={MapHelpers.createMapOptions}
          bootstrapURLKeys={{ key: API_KEY }}
          defaultCenter={{
            lat: Number(coords[0]),
            lng: -Number(coords[1]),
          }}
          defaultZoom={16}
        >
          <Marker
            lat={Number(coords[0])}
            lng={-Number(coords[1])}
            text="Marker"
          />
        </GoogleMapReact>
        <GetDirectionsButton onClick={() => toggleModal(!modalIsOpen)}>
          <ButtonText>EXPAND MAP</ButtonText>
        </GetDirectionsButton>
      </MapDiv>
    );
  }
  return '';
};

export default Map;
