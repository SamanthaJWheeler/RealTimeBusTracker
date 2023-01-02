function createMapMarker() {
  // TODO: add your own access token
  google.maps.accessToken = 'AIzaSyDQ3yEmBpKbSAOT_YGlXtPcA-McXsDuAfw';

  let map = new google.maps.Map({
    container: 'map',
    style: 'google.maps',
    center: [-71.091542, 42.358862],
    zoom: 12,
  });
  var marker = new google.maps.Marker()
  .setLngLat([-71.091542,42.358862])
  .addTo(map);
  // TODO: add a marker to the map
}

// Do not edit the code below
window.onload = () => {
  createMapMarker();
};

// Do not edit code past this point
if (typeof module !== 'undefined') {
  module.exports = { createMapMarker };
}
