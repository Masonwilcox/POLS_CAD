const originalMapWidth = 1920; // Example: change this to your map's original width
const originalMapHeight = 1080; // Example: change this to your map's original height

var markers = [
    {id: 'Home-marker', position: {x: 63, y:59}, info: "Mason's Home Click there arrow to find out more."},
    {id: 'Strath-marker', position: {x: 66, y: 53}, info: ""},
    {id: 'Keneth-marker', position: {x: 95, y: 25}, info: ""},
    {id: 'Byng-marker', position: {x: 28.5, y: 75}, info: ""},
];

document.addEventListener('DOMContentLoaded', function() {
    markers.forEach(function(marker) {
        positionMarker(marker.id, marker.position);
        
        document.getElementById(marker.id).addEventListener('click', function() {
            console.log("Marker clicked, info: " + marker.info); // Debugging line
            showOverlay(marker.info);
        });
    });

    // Video play functionality
    var videoArrow = document.getElementById('video-play-arrow');
    var videoClip = document.getElementById('video-clip');
    
    videoArrow.addEventListener('click', function() {
        videoClip.style.display = 'block';
        videoClip.play();
    });

    videoClip.addEventListener('ended', function() {
        window.location.href = 'path/to/redirect'; // Change this to your desired URL
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
    document.body.appendChild(overlay);

    var textBox = document.createElement('div');
    textBox.className = 'text-box';
    textBox.innerText = name; // Existing text display
    overlay.appendChild(textBox);

    // Create an arrow button inside the text box
    var arrowButton = document.createElement('img');
    arrowButton.src = '../assets/img/Arrow.png'; // Set the path to your arrow image
    arrowButton.style.cursor = 'pointer';
    arrowButton.style.width = '40px'; // Adjust size as needed
    arrowButton.style.height = '40px'; // Adjust size as needed
    arrowButton.style.marginTop = '10px'; // Adjust positioning as needed
    textBox.appendChild(arrowButton);

    // Arrow button click event to play video
    arrowButton.addEventListener('click', function() {
        overlay.style.display = 'none'; // Hide overlay to show the video
        var videoClip = document.getElementById('video-clip');
        videoClip.style.display = 'block';
        videoClip.play();
    });

    // Close overlay on click (outside the text box)
    overlay.addEventListener('click', function(event) {
        if (event.target === overlay) {
            document.body.removeChild(overlay);
        }
    });
}

// Listen for the video ending and redirect
var videoClip = document.getElementById('video-clip');
videoClip.addEventListener('ended', function() {
    window.location.href = 'path/to/redirect'; // Change this to your desired URL
});
