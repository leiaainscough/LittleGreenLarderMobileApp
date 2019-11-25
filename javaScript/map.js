
var map = L.map('map').fitWorld();

//https://leaflet-extras.github.io/leaflet-providers/preview/
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map); //adds a tile layer from openStreetMap.org to the map

L.marker([56.45584517820995, -2.990673780441284]).addTo(map) //adds a marker to the map at the Little Green Larder

    .bindPopup('The Little Green Larder.<br><br> A small shop awaiting work to increase in size.<br> Run in order to reduce over wasted plastics and containers.')
    .openPopup();

L.marker([56.46026612542765, -2.97567218542099]).addTo(map) //adds a marker to the map at the Council Waste Management site

		 .bindPopup('Dundee City Council Waste Management.<br><br> The Councils waste management site right in the center of Dundee.')
		 .openPopup();

L.polygon([
	[56.45584517820995, -2.990673780441284],
	[56.46026612542765, -2.97567218542099],
	[56.460403947559264,-2.9863929748535156]
]).addTo(map); //adds a polygon linking 3 positions 2 markers + 1

map.locate({setView: true, maxZoom: 16}); //sets the map to zoom in on your position if one is found

function onLocationFound(e) {

  var radius = e.accuracy; //sets the radius equal to the accuracy of the location found

  L.marker(e.latlng).addTo(map) //takes in the position of the user and drops a point.
  .bindPopup("You are " + radius + "Meters from this location").openPopup(); //tells the user the accuracy of the point

  L.circle(e.latlng, radius).addTo(map); //adds a curcle with the radius of the accuracy

}

map.on('locationfound' , onLocationFound);

function onLocationError(e) {
    alert(e.message); //alerts user with the error with finding location if one occurs
}

map.on('locationerror', onLocationError);
