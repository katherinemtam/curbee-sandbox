function geoFindMe() {
  //// eslint-disable-next-line no-undef
  const status = document.querySelector('#status');
  const mapLink = document.querySelector('#map-link');

  mapLink.href = '';
  mapLink.textContent = '';

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    status.textContent = '';
    mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
  }

  function error() {
    status.textContent = 'Unable to retrieve your location';
  }
  // eslint-disable-next-line no-undef
  if (!navigator.geolocation) {
    status.textContent = 'Geolocation is not supported by your browser';
  } else {
    status.textContent = 'Locating…';
    // eslint-disable-next-line no-undef
    navigator.geolocation.getCurrentPosition(success, error);
  }

}
// eslint-disable-next-line no-undef
document.querySelector('#find-me').addEventListener('click', geoFindMe);
