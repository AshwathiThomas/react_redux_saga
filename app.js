function getIssLocation() {
  return fetch('/api', {
    mode: 'no-cors',
  })
    .then((response) => response.text())
    .catch((error) => error.toString());
}

function displayIssLocation() {
  getIssLocation()
    .then((response) => {
      console.log('response', response);
      document.querySelector('div').innerHTML = response;
    });
}

document.querySelector('button').onclick = displayIssLocation;
