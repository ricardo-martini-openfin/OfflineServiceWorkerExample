//Registering the service worker if found in html

if ('serviceWorker' in navigator) {

    navigator.serviceWorker
      .register('./service-worker.js')
      .then(function(registration) {
        console.log("Service Worker Registered");
      })
      .catch(function(err) {
        console.log("Service Worker Failed to Register", err);
      })
  
  }

fetch('http://worldclockapi.com/api/json/utc/now')
  .then(async (response) => {
    document.getElementById("time").innerText = JSON.stringify(await response.json());
  })
