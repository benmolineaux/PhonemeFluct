// Initialize the map centered on South America with a specific zoom level
var map = L.map('map').setView([1, 1], 2); // Coordinates roughly center of South America

// Set up the OpenStreetMap layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Define the bounding box for South America
//var southAmericaBounds = [
 //   [-56, -82], // Southwest coordinates (latitude, longitude)
 //   [15, -30]   // Northeast coordinates (latitude, longitude)
//];

// Restrict the map to the South America bounds
//map.setMaxBounds(southAmericaBounds);
//map.on('drag', function() {
//    map.panInsideBounds(southAmericaBounds, { animate: false });
//});

// Create a custom red marker using DivIcon
var redDivIcon = L.divIcon({
    className: 'custom-div-icon',
    html: "<div style='background-color: red; width: 20px; height: 20px; border-radius: 50%; border: 2px solid white;'></div>",
    iconSize: [20, 20],
    iconAnchor: [10, 10]
});

// Custom red marker icon
//var redMarker = L.AwesomeMarkers.icon({
  //  icon: 'info-sign',
   // markerColor: 'red'
//});

// Function to update the info box content
function updateInfoBox(url) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById('info-content').innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}

var marker2 = L.marker([-54.933385, -67.591667]).addTo(map);
marker2.bindPopup('<a>Yahgan</a>');
marker2.on('click', function() {
    updateInfoBox('documents/Yahgan.html');
});

var marker3 = L.marker([-38.883333, -73.283333]).addTo(map); 
marker3.bindPopup('<a>Mapudungun</a>');
marker3.on('click', function() {
    updateInfoBox('documents/Mapudungun.html');
});

var marker4 = L.marker([-49.126, -74.413]).addTo(map); // Example coordinates for São Paulo
marker4.bindPopup('<a>Qawasqar</a>');
marker4.on('click', function() {
    updateInfoBox('documents/Qawasqar.html');
});

var marker5 = L.marker([-4.66, 143.32]).addTo(map); // Example coordinates for São Paulo
marker5.bindPopup('<a>Alamblak</a>');
marker5.on('click', function() {
    updateInfoBox('documents/Alamblak.html');
});

var marker6 = L.marker([-10.55, -75.31]).addTo(map); // Example coordinates for São Paulo
marker6.bindPopup('<a>Amuesha</a>');
marker6.on('click', function() {
    updateInfoBox('documents/Amuesha.html');
});

var marker7 = L.marker([-6.11, -47.63]).addTo(map); // Example coordinates for São Paulo
marker7.bindPopup('<a>Apinayé</a>');
marker7.on('click', function() {
    updateInfoBox('documents/Apinayé.html');
});

var marker8 = L.marker([18.96, 102.93]).addTo(map); // Example coordinates for São Paulo
marker8.bindPopup('<a>Tai Dam</a>');
marker8.on('click', function() {
    updateInfoBox('documents/Tai Dam.html');
});

var marker9 = L.marker([45.53, -106.66]).addTo(map); // Example coordinates for São Paulo
marker9.bindPopup('<a>Cheyenne</a>');
marker9.on('click', function() {
    updateInfoBox('documents/Cheyenne.html');
});

var marker1 = L.marker([-4.3, 143.32]).addTo(map); // Example coordinates for São Paulo
marker1.bindPopup('<a>Iatmul</a>');
marker1.on('click', function() {
    updateInfoBox('documents/Iatmul.html');
});

var marker10 = L.marker([-33.69, -57.78]).addTo(map); // Example coordinates for São Paulo
marker10.bindPopup('<a>Chaná</a>');
marker10.on('click', function() {
    updateInfoBox('documents/Chaná.html');
});

var marker11 = L.marker([-13.39, -68.04]).addTo(map); // Example coordinates for São Paulo
marker11.bindPopup('<a>Tacana</a>');
marker11.on('click', function() {
    updateInfoBox('documents/Tacana.html');
});

var marker12 = L.marker([-8.73, 151.07]).addTo(map); // Example coordinates for São Paulo
marker12.bindPopup('<a>Kilivila</a>');
marker12.on('click', function() {
    updateInfoBox('documents/Kilivila.html');
});

var marker13 = L.marker([-28.96, 146.55]).addTo(map); // Example coordinates for São Paulo
marker13.bindPopup('<a>Muruwari</a>');
marker13.on('click', function() {
    updateInfoBox('documents/Muruwari.html');
});

var marker14 = L.marker([21.38, -99.29]).addTo(map); // Example coordinates for São Paulo
marker14.bindPopup('<a>Pame</a>');
marker14.on('click', function() {
    updateInfoBox('documents/Pame.html');
});

var marker15 = L.marker([-1.96, -75.06]).addTo(map); // Example coordinates for São Paulo
marker15.bindPopup('<a>Arabela</a>');
marker15.on('click', function() {
    updateInfoBox('documents/Arabela.html');
});

var marker16 = L.marker([-2.38, 15.62]).addTo(map); // Example coordinates for São Paulo
marker16.bindPopup('<a>Eboo-Nzikou</a>');
marker16.on('click', function() {
    updateInfoBox('documents/Eboo-Nzikou.html');
});

var marker17 = L.marker([-9.72, -71.17]).addTo(map); // Example coordinates for São Paulo
marker17.bindPopup('<a>Kashinawa</a>');
marker17.on('click', function() {
    updateInfoBox('documents/Kashinawa.html');
});

var marker18 = L.marker([56.80, -120.35]).addTo(map); // Example coordinates for São Paulo
marker18.bindPopup('<a>Dane-zaa</a>');
marker18.on('click', function() {
    updateInfoBox('documents/Dane-zaa.html');
});

//var marker18 = L.marker([0,0]).addTo(map); // Example coordinates for São Paulo
//marker18.bindPopup('<a>AAA</a>');
//marker18.on('click', function() {
 //   updateInfoBox('documents/AAA.html');
//});


//var marker24 = L.marker([-33.81, -54.47]).addTo(map); // Example coordinates for São Paulo
//marker24._icon.classList.add('red-marker'); 
//marker24.bindPopup('<a>Güenoa</a>');
//marker24.on('click', function() {
 //   updateInfoBox('documents/Guenoa.html');
//});

//var marker25 = L.marker([-28.10, -60.41]).addTo(map); // Example coordinates for São Paulo
//marker25._icon.classList.add('red-marker'); 
//marker25.bindPopup('<a>Mocoví</a>');
//marker25.on('click', function() {
 //   updateInfoBox('documents/Mocovi.html');
//});
