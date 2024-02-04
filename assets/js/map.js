const originalMapWidth = 1920; // Example: change this to your map's original width
const originalMapHeight = 1080; // Example: change this to your map's original height

var markers = [
    {id: 'BC-marker', position: {x: 22, y: 65}, info: ""},
    {id: 'Alberta-marker', position: {x: 30, y: 63}, info: ""},
    {id: 'Saskatchewan-marker', position: {x: 35, y: 67}, info: ""},
    {id: 'Manitoba-marker', position: {x: 42, y: 71}, info: ""},
    {id: 'Ontario-marker', position: {x: 55, y: 75}, info: ""},
    {id: 'Quebec-marker', position: {x: 64, y: 78}, info: ""},
    {id: 'New-Brunswick-marker', position: {x: 85, y: 70}, info: ""},
    {id: 'PEI-marker', position: {x: 87, y: 72}, info: ""},
    {id: 'Nova-Scotia-marker', position: {x: 90, y: 70}, info: ""},
    {id: 'Newfoundland-Labrador-marker', position: {x: 95, y: 60}, info: ""},
    {id: 'Yukon-marker', position: {x: 5, y: 30}, info: ""},
    {id: 'Northwest-Territories-marker', position: {x: 20, y: 50}, info: ""},
    {id: 'Nunavut-marker', position: {x: 40, y: 20}, info: ""},
];


document.addEventListener('DOMContentLoaded', function() {
    markers.forEach(function(marker) {
        positionMarker(marker.id, marker.position);
        
        document.getElementById(marker.id).addEventListener('click', function() {
            console.log("Marker clicked, info: " + marker.info); // Debugging line
            showOverlay(marker.info);
        });
    });

    window.onresize = function() {
        markers.forEach(function(marker) {
            positionMarker(marker.id, marker.position);
        });
    };
});


function positionMarker(markerId, position) {
    var container = document.getElementById('map-container');
    var marker = document.getElementById(markerId);
    var xPercentage = position.x / 100;
    var yPercentage = position.y / 100;
    var xPos = container.offsetWidth * xPercentage;
    var yPos = container.offsetHeight * yPercentage;

    marker.style.left = xPos + 'px';
    marker.style.top = yPos + 'px';
}

function showOverlay(name) {
    var overlay = document.createElement('div');
    overlay.className = 'overlay';
    overlay.onclick = function() {
        document.body.removeChild(this);
    };
    var textBox = document.createElement('div');
    textBox.className = 'text-box';
    textBox.innerText = name; // Add more details or customize as needed
    overlay.appendChild(textBox);
    document.body.appendChild(overlay);
}
