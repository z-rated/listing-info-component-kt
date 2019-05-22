const createMapOptions = () => ({
  panControl: false,
  mapTypeControl: false,
  scrollwheel: false,
  zoomControl: false,
  fullscreenControl: false,
  styles: [{ stylers: [{ saturation: -100 }, { gamma: 0.8 }, { lightness: 4 }, { visibility: 'on' }] }],
});

const parseCoords = coords => coords.split(',').map((coord, i) => {
  let co = coord;
  if (i === 1) {
    co = coord.slice(1);
  }
  return co.slice(0, 17);
});

export default { createMapOptions, parseCoords };
