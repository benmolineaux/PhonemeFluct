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

// Define a custom DivIcon for the text label
function createLabel(text) {
    return L.divIcon({
        className: 'marker-label', // Add a custom class for styling
        html: `<span><strong>${text}</strong></span>`,
        iconSize: [200, 40], // Adjust size of the label container
        iconAnchor: [5, 40] // Adjust position relative to the marker
    });
}
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

var labelmarker2 = L.marker([-54.933385, -67.591667], { 
    icon: createLabel('47'), 
    interactive: false // Disable interactivity for the label
}).addTo(map);

var marker3 = L.marker([-38.883333, -73.283333]).addTo(map); 
marker3.bindPopup('<a>Mapudungun</a>');
marker3.on('click', function() {
    updateInfoBox('documents/Mapudungun.html');
});

var labelmarker3 = L.marker([-38.883333, -73.283333], { 
    icon: createLabel('27'), 
    interactive: false // Disable interactivity for the label
}).addTo(map);

var marker4 = L.marker([-49.126, -74.413]).addTo(map); marker4.bindPopup('<a>Kawésqar</a>');
marker4.on('click', function() {
    updateInfoBox('documents/Qawasqar.html');
});

var labelmarker4 = L.marker([-49.126, -74.413], { 
    icon: createLabel('33'), 
    interactive: false // Disable interactivity for the label
}).addTo(map);

var marker5 = L.marker([-4.66, 143.32]).addTo(map); marker5.bindPopup('<a>Alamblak</a>');
marker5.on('click', function() {
    updateInfoBox('documents/Alamblak.html');
});

var labelmarker5 = L.marker([-4.66, 143.32], { 
    icon: createLabel('1'), 
    interactive: false // Disable interactivity for the label
}).addTo(map);

var marker6 = L.marker([-10.55, -75.31]).addTo(map); marker6.bindPopup('<a>Amuesha</a>');
marker6.on('click', function() {
    updateInfoBox('documents/Amuesha.html');
});

var labelmarker6 = L.marker([-10.55, -75.31], { 
    icon: createLabel('2'), 
    interactive: false // Disable interactivity for the label
}).addTo(map);

var marker7 = L.marker([-6.11, -47.63]).addTo(map); marker7.bindPopup('<a>Apinayé</a>');
marker7.on('click', function() {
    updateInfoBox('documents/Apinaye.html');
});

var labelmarker7 = L.marker([-6.11, -47.63], { 
    icon: createLabel('3'), 
    interactive: false // Disable interactivity for the label
}).addTo(map);

var marker8 = L.marker([18.96, 102.93]).addTo(map); marker8.bindPopup('<a>Tai Dam</a>');
marker8.on('click', function() {
    updateInfoBox('documents/Tai Dam.html');
});

var labelmarker8 = L.marker([18.96, 102.93], { 
    icon: createLabel('39'), 
    interactive: false // Disable interactivity for the label
}).addTo(map);

var marker9 = L.marker([45.53, -106.66]).addTo(map); marker9.bindPopup('<a>Cheyenne</a>');
marker9.on('click', function() {
    updateInfoBox('documents/Cheyenne.html');
});

var labelmarker9 = L.marker([45.53, -106.66], { 
    icon: createLabel('10'), 
    interactive: false // Disable interactivity for the label
}).addTo(map);

var marker1 = L.marker([-4.3, 143.32]).addTo(map); marker1.bindPopup('<a>Iatmul</a>');
marker1.on('click', function() {
    updateInfoBox('documents/Iatmul.html');
});

var labelmarker1 = L.marker([-4.3, 143.32], { 
    icon: createLabel('18'), 
    interactive: false // Disable interactivity for the label
}).addTo(map);

var marker10 = L.marker([34.00, -101.00]).addTo(map); marker10.bindPopup('<a>Comanche</a>');
marker10.on('click', function() {
    updateInfoBox('documents/Comanche.html');
});

var labelmarker10 = L.marker([34.00, -101.00], { 
    icon: createLabel('13'), 
    interactive: false // Disable interactivity for the label
}).addTo(map);

var marker11 = L.marker([-13.39, -68.04]).addTo(map); marker11.bindPopup('<a>Tacana</a>');
marker11.on('click', function() {
    updateInfoBox('documents/Tacana.html');
});

var labelmarker11 = L.marker([-13.39, -68.04], { 
    icon: createLabel('38'), 
    interactive: false // Disable interactivity for the label
}).addTo(map);

var marker12 = L.marker([-8.73, 151.07]).addTo(map); marker12.bindPopup('<a>Kilivila</a>');
marker12.on('click', function() {
    updateInfoBox('documents/Kilivila.html');
});

var labelmarker12 = L.marker([-8.73, 151.07], { 
    icon: createLabel('21'), 
    interactive: false // Disable interactivity for the label
}).addTo(map);

var marker13 = L.marker([-28.96, 146.55]).addTo(map); marker13.bindPopup('<a>Muruwari</a>');
marker13.on('click', function() {
    updateInfoBox('documents/Muruwari.html');
});

var labelmarker13 = L.marker([-28.96, 146.55], { 
    icon: createLabel('28'), 
    interactive: false // Disable interactivity for the label
}).addTo(map);

var marker14 = L.marker([21.38, -99.29]).addTo(map); 
marker14.bindPopup('<a>Pame</a>');
marker14.on('click', function() {
    updateInfoBox('documents/Pame.html');
});

var labelmarker14 = L.marker([21.38, -99.29], { 
    icon: createLabel('30'), 
    interactive: false // Disable interactivity for the label
}).addTo(map);

var marker15 = L.marker([-1.96, -75.06]).addTo(map); marker15.bindPopup('<a>Arabela</a>');
marker15.on('click', function() {
    updateInfoBox('documents/Arabela.html');
});

var labelmarker15 = L.marker([-1.96, -75.06], { 
    icon: createLabel('4'), 
    interactive: false // Disable interactivity for the label
}).addTo(map);

var marker16 = L.marker([-2.38, 15.62]).addTo(map); marker16.bindPopup('<a>Eboo-Nzikou</a>');
marker16.on('click', function() {
    updateInfoBox('documents/Eboo-Nzikou.html');
});

var labelmarker16 = L.marker([-2.38, 15.62], { 
    icon: createLabel('15'), 
    interactive: false // Disable interactivity for the label
}).addTo(map);

var marker17 = L.marker([-9.72, -71.17]).addTo(map); marker17.bindPopup('<a>Kashinawa</a>');
marker17.on('click', function() {
    updateInfoBox('documents/Kashinawa.html');
});

var labelmarker17 = L.marker([-9.72, -71.17], { 
    icon: createLabel('20'), 
    interactive: false // Disable interactivity for the label
}).addTo(map);

var marker18 = L.marker([56.80, -120.35]).addTo(map); marker18.bindPopup('<a>Dane-zaa</a>');
marker18.on('click', function() {
    updateInfoBox('documents/Dane-zaa.html');
});

var labelmarker18 = L.marker([56.80, -120.35], { 
    icon: createLabel('14'), 
    interactive: false // Disable interactivity for the label
}).addTo(map);


var marker19 = L.marker([-6.18, 145.14]).addTo(map); marker19.bindPopup('<a>Chuave</a>');
marker19.on('click', function() {
   updateInfoBox('documents/Chuave.html');
});

var labelmarker19 = L.marker([-6.18, 145.14], { 
    icon: createLabel('12'), 
    interactive: false // Disable interactivity for the label
}).addTo(map);

var marker20 = L.marker([7.53, 99.08]).addTo(map); marker20.bindPopup('<a>Urak Lawoi\'</a>');
marker20.on('click', function() {
   updateInfoBox('documents/Urak.html');
});

var labelmarker20 = L.marker([7.53, 99.08], { 
    icon: createLabel('42'), 
    interactive: false // Disable interactivity for the label
}).addTo(map);

var marker23 = L.marker([-22.52, 123.84]).addTo(map); marker23.bindPopup('<a>Manyjilyjara</a>');
marker23.on('click', function() {
   updateInfoBox('documents/Manyjilyjara.html');
});

var labelmarker23 = L.marker([-22.52, 123.84], { 
    icon: createLabel('26'), 
    interactive: false // Disable interactivity for the label
}).addTo(map);

var marker21 = L.marker([-27.41, -58.97]).addTo(map); marker21._icon.classList.add('red-marker'); 
marker21.bindPopup('<a>Vilela</a>');
marker21.on('click', function() {
    updateInfoBox('documents/Vilela.html');
});

var labelmarker21 = L.marker([-27.41, -58.97], { 
    icon: createLabel('43'), 
    interactive: false // Disable interactivity for the label
}).addTo(map);

var marker27 = L.marker([19.25, -101.63]).addTo(map); marker27._icon.classList.add('red-marker'); 
marker27.bindPopup('<a>Purepecha</a>');
marker27.on('click', function() {
    updateInfoBox('documents/Purepecha.html');
});

var labelmarker27 = L.marker([19.25, -101.63], { 
    icon: createLabel('32'), 
    interactive: false // Disable interactivity for the label
}).addTo(map);

var marker24 = L.marker([-33.69, -57.78]).addTo(map); marker24._icon.classList.add('red-marker'); 
marker24.bindPopup('<a>Chaná</a>');
marker24.on('click', function() {
   updateInfoBox('documents/Chana.html');
});

var labelmarker24 = L.marker([-33.69, -57.78], { 
    icon: createLabel('9'), 
    interactive: false // Disable interactivity for the label
}).addTo(map);

var marker25 = L.marker([58.98, -104.44]).addTo(map); marker25._icon.classList.add('red-marker'); 
marker25.bindPopup('<a>Chipewyan</a>');
marker25.on('click', function() {
   updateInfoBox('documents/Chipewyan.html');
});

var labelmarker25 = L.marker([58.98, -104.44], { 
    icon: createLabel('11'), 
    interactive: false // Disable interactivity for the label
}).addTo(map);

var marker26 = L.marker([-11.67, -61.18]).addTo(map); marker26._icon.classList.add('red-marker'); 
marker26.bindPopup('<a>Kwaza</a>');
marker26.on('click', function() {
   updateInfoBox('documents/Kwaza.html');
});

var labelmarker26 = L.marker([-11.67, -61.18], { 
    icon: createLabel('24'), 
    interactive: false // Disable interactivity for the label
}).addTo(map);

var marker28 = L.marker([-5.94, 155.15]).addTo(map); marker28.bindPopup('<a>Rotokas</a>');
marker28.on('click', function() {
   updateInfoBox('documents/Rotokas.html');
});

var labelmarker28 = L.marker([-5.94, 155.15], { 
    icon: createLabel('34'), 
    interactive: false // Disable interactivity for the label
}).addTo(map);


var marker29 = L.marker([13.38, 120.65]).addTo(map); 
marker29.bindPopup('<a>Iraya</a>');
marker29.on('click', function() {
   updateInfoBox('documents/Iraya.html');
});

var labelmarker29 = L.marker([13.38, 120.65], { 
    icon: createLabel('19'), 
    interactive: false // Disable interactivity for the label
}).addTo(map);

var marker30 = L.marker([16.18, -95.73]).addTo(map); marker30.bindPopup('<a>Highland Oaxaca Chontal</a>');
marker30.on('click', function() {
   updateInfoBox('documents/Chontal.html');
});

var labelmarker30 = L.marker([16.18, -95.73], { 
    icon: createLabel('17'), 
    interactive: false // Disable interactivity for the label
}).addTo(map);

var marker31 = L.marker([-7.72, 146.91]).addTo(map); 
marker31.bindPopup('<a>Weri</a>');
marker31.on('click', function() {
   updateInfoBox('documents/Weri.html');
});

var labelmarker31 = L.marker([-7.72, 146.91], { 
    icon: createLabel('45'), 
    interactive: false // Disable interactivity for the label
}).addTo(map);

var marker32 = L.marker([-6.32, 145.39]).addTo(map); marker32.bindPopup('<a>Yagaria</a>');
marker32.on('click', function() {
   updateInfoBox('documents/Yagaria.html');
});

var labelmarker32 = L.marker([-6.32, 145.39], { 
    icon: createLabel('46'), 
    interactive: false // Disable interactivity for the label
}).addTo(map);

var marker33 = L.marker([-6.32, 146.00]).addTo(map); marker33.bindPopup('<a>Gadsup</a>');
marker33.on('click', function() {
   updateInfoBox('documents/Gadsup.html');
});

var labelmarker33 = L.marker([-6.32, 146.00], { 
    icon: createLabel('16'), 
    interactive: false // Disable interactivity for the label
}).addTo(map);

var marker34 = L.marker([43.28, -1.32]).addTo(map); marker34._icon.classList.add('red-marker'); 
marker34.bindPopup('<a>Basque</a>');
marker34.on('click', function() {
   updateInfoBox('documents/Basque.html');
});

var labelmarker34 = L.marker([43.28, -1.32], { 
    icon: createLabel('6'), 
    interactive: false // Disable interactivity for the label
}).addTo(map);

var marker35 = L.marker([-28.90, 30.20]).addTo(map); marker35._icon.classList.add('red-marker'); 
marker35.bindPopup('<a>Zulu</a>');
marker35.on('click', function() {
   updateInfoBox('documents/Zulu.html');
});

var labelmarker35 = L.marker([-28.90, 30.20], { 
    icon: createLabel('50'), 
    interactive: false // Disable interactivity for the label
}).addTo(map);

var marker36 = L.marker([-16.42, 137.17]).addTo(map); marker36.bindPopup('<a>Yanyuwa (Anyula)</a>');
marker36.on('click', function() {
   updateInfoBox('documents/Yanyuwa.html');
});

var labelmarker36 = L.marker([-16.42, 137.17], { 
    icon: createLabel('48'), 
    interactive: false // Disable interactivity for the label
}).addTo(map);

var marker37 = L.marker([0.58, -69.58]).addTo(map); marker37.bindPopup('<a>Tucano</a>');
marker37.on('click', function() {
   updateInfoBox('documents/Tucano.html');
});

var labelmarker37 = L.marker([0.58, -69.58], { 
    icon: createLabel('41'), 
    interactive: false // Disable interactivity for the label
}).addTo(map);

var marker38 = L.marker([27.54, 87.61]).addTo(map); marker38.bindPopup('<a>Thulung</a>');
marker38.on('click', function() {
   updateInfoBox('documents/Thulung.html');
});

var labelmarker38 = L.marker([27.54, 87.61], { 
    icon: createLabel('40'), 
    interactive: false // Disable interactivity for the label
}).addTo(map);

var marker39 = L.marker([5.82, -68.98]).addTo(map); marker39.bindPopup('<a>Sikuani (Guahibo)</a>');
marker39.on('click', function() {
   updateInfoBox('documents/Sikuani.html');
});

var labelmarker39 = L.marker([5.82, -68.98], { 
    icon: createLabel('36'), 
    interactive: false // Disable interactivity for the label
}).addTo(map);

var marker40 = L.marker([1.08, -69.57]).addTo(map); 
marker40.bindPopup('<a>Kotiria (Guanano)</a>');
marker40.on('click', function() {
   updateInfoBox('documents/Kotiria.html');
});

var labelmarker40 = L.marker([1.08, -69.57], { 
    icon: createLabel('22'), 
    interactive: false // Disable interactivity for the label
}).addTo(map);

var marker41 = L.marker([11.40, -72.20]).addTo(map); 
marker41.bindPopup('<a>Wayuu (Guajiro)</a>');
marker41.on('click', function() {
   updateInfoBox('documents/Wayuu.html');
});

var labelmarker41 = L.marker([11.40, -72.20], { 
    icon: createLabel('44'), 
    interactive: false // Disable interactivity for the label
}).addTo(map);

var marker42 = L.marker([-0.76, -71.00]).addTo(map); marker42.bindPopup('<a>Yucuna</a>');
marker42.on('click', function() {
   updateInfoBox('documents/Yucuna.html');
});

var labelmarker42 = L.marker([-0.76, -71.00], { 
    icon: createLabel('49'), 
    interactive: false // Disable interactivity for the label
}).addTo(map);

var marker43 = L.marker([1.15, -76.89]).addTo(map); 
marker43.bindPopup('<a>Camsá</a>');
marker43.on('click', function() {
   updateInfoBox('documents/Camsa.html');
});

var labelmarker43 = L.marker([1.15, -76.89], { 
    icon: createLabel('8'), 
    interactive: false // Disable interactivity for the label
}).addTo(map);

var marker44 = L.marker([-7.76, 147.53]).addTo(map); marker44.bindPopup('<a>Suena</a>');
marker44.on('click', function() {
   updateInfoBox('documents/Suena.html');
});

var labelmarker44 = L.marker([-7.76, 147.53], { 
    icon: createLabel('37'), 
    interactive: false // Disable interactivity for the label
}).addTo(map);


var marker45 = L.marker([4.53, 9.52]).addTo(map); marker45._icon.classList.add('red-marker'); 
marker45.bindPopup('<a>Bafaw-Balong</a>');
marker45.on('click', function() {
   updateInfoBox('documents/Bafaw-Balong.html');
});

var labelmarker45 = L.marker([4.53, 9.52], { 
    icon: createLabel('5'), 
    interactive: false // Disable interactivity for the label
}).addTo(map);

var marker46 = L.marker([15.36, -90.58]).addTo(map); marker46.bindPopup('<a>Poqomchi\'</a>');
marker46.on('click', function() {
   updateInfoBox('documents/Poqomchi.html');
});

var labelmarker46 = L.marker([15.36, -90.58], { 
    icon: createLabel('31'), 
    interactive: false // Disable interactivity for the label
}).addTo(map);

var marker47 = L.marker([-8.09, 146.91]).addTo(map); marker47.bindPopup('<a>Kunimaipa</a>');
marker47.on('click', function() {
   updateInfoBox('documents/Kunimaipa.html');
});

var labelmarker47 = L.marker([-8.09, 146.91], { 
    icon: createLabel('23'), 
    interactive: false // Disable interactivity for the label
}).addTo(map);

var marker48 = L.marker([3.59, 115.66]).addTo(map); marker48.bindPopup('<a>Sa\'Ban</a>');
marker48.on('click', function() {
   updateInfoBox('documents/Saban.html');
});

var labelmarker48 = L.marker([3.59, 115.66], { 
    icon: createLabel('35'), 
    interactive: false // Disable interactivity for the label
}).addTo(map);

var marker49 = L.marker([10.43, -1.67]).addTo(map); 
marker49.bindPopup('<a>Bissa</a>');
marker49.on('click', function() {
   updateInfoBox('documents/Bissa.html');
});

var labelmarker49 = L.marker([10.43, -1.67], { 
    icon: createLabel('7'), 
    interactive: false // Disable interactivity for the label
}).addTo(map);

var marker50 = L.marker([26.91, 98.94]).addTo(map); 
marker50.bindPopup('<a>Lisu</a>');
marker50.on('click', function() {
   updateInfoBox('documents/Lisu.html');
});

var labelmarker50 = L.marker([26.91, 98.94], { 
    icon: createLabel('25'), 
    interactive: false // Disable interactivity for the label
}).addTo(map);


var marker22 = L.marker([27.67, 85.33]).addTo(map);
marker22.bindPopup('<a>Newari</a>');
marker22.on('click', function() {
    updateInfoBox('documents/Newari.html');
});

var labelmarker22 = L.marker([27.67, 85.33], { 
    icon: createLabel('29'), 
    interactive: false // Disable interactivity for the label
}).addTo(map);