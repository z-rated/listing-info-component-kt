import React from 'react';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';
import API_KEY from '../maps-config';

const MapDiv = styled.div`
  // filter: url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\'><filter id=\'grayscale\'><feColorMatrix type=\'matrix\' values=\'0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0\'/></filter></svg>#grayscale");
  // filter: gray;
  // -webkit-filter: grayscale(99%);
  // -webkit-backface-visibility: hidden;
  height: 328px;
  width: 100%;
`;

const MarkerContainer = styled.img`
  width: 24px;
`;

const createMapOptions = (maps) => {
  return {
    panControl: false,
    mapTypeControl: false,
    scrollwheel: false,
    zoomControl: false,
    fullscreenControl: false,
    styles: [{ stylers: [{ saturation: -100 }, { gamma: 0.8 }, { lightness: 4 }, { visibility: 'on' }] }],
  };
};

const parseCoords = coords => coords.split(',').map((coord, i) => {
  let co = coord;
  if (i === 1) {
    co = coord.slice(1);
  }
  return co.slice(0, 17);
});

const Marker = ({ text }) => (
  <div>
    <MarkerContainer src="./icons/pin_zagat.png" alt={text} />
  </div>
);

const Map = ({ data }) => {
  if (data) {
    const coords = parseCoords(data.location.coords);
    return (
      // Important! Always set the container height explicitly
      <MapDiv>
        <GoogleMapReact
          options={createMapOptions}
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
      </MapDiv>
    );
  }
  return '';
};

export default Map;
