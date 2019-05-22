import React from 'react';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';
import MapHelpers from '../map-helpers';
import API_KEY from '../maps-config';

const MapDiv = styled.div`
  height: calc(100vh - 100px);
  width: calc(100vw - 200px);
  margin-bottom: 30px;
`;

const MarkerContainer = styled.img`
  width: 24px;
`;

const ModalBG = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(16,24,32,.95);
  z-index: 9999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const GetDirectionsButton = styled.div`
  position: fixed;
  bottom: 60px;
  left: 120px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: 2px solid #b70038;
  background-color: white;
  color: #b70038;
  width: 310px;
  height: 40px;
  padding: 0 10px;
  box-sizing: border-box;

  &:hover {
    border: 2px solid white;
    background-color: #b70038;
    color: white;
  }
`;

const ButtonText = styled.p`
  margin: 0;
  letter-spacing: .086em;
`;

const Title = styled.p`
  color: white;
  font-size: 18px;
`;

const CloseButton = styled.div`
  position: fixed;
  top: 20px;
  right: 80px;
  width: 35px;

  &:hover {
    fill: white;
  }
`;

const Marker = ({ text }) => (
  <div>
    <MarkerContainer src="./icons/pin_zagat.png" alt={text} />
  </div>
);

const MapModal = ({ data, modalIsOpen, toggleModal }) => {
  if (data) {
    const coords = MapHelpers.parseCoords(data.location.coords);
    return (
      <ModalBG>
        <Title>TEST NAME</Title>
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
          <GetDirectionsButton onClick={() => location.assign(`https://www.google.com/maps/place/${data.location.coords}`)}>
            <ButtonText>GET DIRECTIONS</ButtonText>
          </GetDirectionsButton>
          <CloseButton className="close-btn" onClick={() => { toggleModal(!modalIsOpen); }}>
            <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 40 40" version="1.1">
              <title>close</title>
              <g id="FINAL" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="ZGX_Place_Desktop_03_imagegrid01" transform="translate(-1218.000000, -21.000000)">
                  <g id="ic_close" transform="translate(1218.392090, 21.417480)">
                    <path d="M19.4857146,0 C8.74166275,0 0,8.74166275 0,19.4857146 C0,30.2297665 8.74166275,38.9714293 19.4857146,38.9714293 C30.2297665,38.9714293 38.9714293,30.2297665 38.9714293,19.4857146 C38.9714293,8.74166275 30.2297665,0 19.4857146,0 L19.4857146,0 Z" id="background" fill="#101820" />
                    <polyline id="path" fill="#FFFFFF" points="27.3653665 9.7660546 19.4847868 17.6475622 11.604207 9.7660546 9.7660546 11.604207 17.6466343 19.4847868 9.7660546 27.3653665 11.604207 29.2035189 19.4847868 21.3229392 27.3653665 29.2035189 29.2035189 27.3653665 21.3220113 19.4847868 29.2035189 11.604207 27.3653665 9.7660546" />
                  </g>
                </g>
              </g>
            </svg>
          </CloseButton>
        </MapDiv>
      </ModalBG>
    );
  }
  return '';
};

export default MapModal;
