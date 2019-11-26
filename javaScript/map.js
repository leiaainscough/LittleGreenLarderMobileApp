
var map = L.map('map').fitWorld();

// L.tileLayer('https://api.tiles.mapbox.com/v4/MapID/997/256/{z}/{x}/{y}.png?access_token={sk.eyJ1Ijoic3R1ZmxvIiwiYSI6ImNrMzh3aDRsZTA5dTUzZ3BidWxsb3NqdDEifQ.l30Hor2Z_Ec8s1nhqtb6MA}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18
// }).addTo(map);

//https://leaflet-extras.github.io/leaflet-providers/preview/
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
<<<<<<< Updated upstream
}).addTo(map);
=======
}).addTo(map); //adds a tile layer from openStreetMap.org to the map

L.marker([56.45584517820995, -2.990673780441284]).addTo(map) //adds a marker to the map at the Little Green Larder

    .bindPopup('The Little Green Larder.<br><br> A small shop awaiting work to increase in size.<br> Run in order to reduce over wasted plastics and containers.')
    .openPopup();

L.marker([56.46026612542765, -2.97567218542099]).addTo(map) //adds a marker to the map at the Council Waste Management site

		 .bindPopup('Dundee City Council Waste Management.<br><br> The Councils waste management site right in the center of Dundee.')
		 .openPopup();

L.marker([56.461115, -2.967385]).addTo(map) //adds a marker to the map at the Council Waste Management site

		 		 .bindPopup('Birchwood Food Emporium.<br><br> Birchwood Food Emporium and Cafe is an addition to Dundee\'s city centre, rebranded and expanded from the former WholeFoods Dundee. The family run business offers a wide selction of organic wholefoods produced and sourced locally. Their cosy cafe offers a delicious menu catering for all dietary requirements.')
		 		 .openPopup();

L.marker([56.458471, -2.973174]).addTo(map) //adds a marker to the map at the Council Waste Management site

				 .bindPopup('Marwick\'s Vegan Kitchen.<br><br> Marwick\'s Vegan Kitchen hasn\'t always been fully vegan. However, after thriving in "Veganuary" in 2017, it was clear there was no going back.')
				 .openPopup();

L.marker([56.462521, -2.985579]).addTo(map) //adds a marker to the map at the Council Waste Management site

				.bindPopup('Tayside ReUsers.<br><br> Dundee has always been ahead of the curve when  it comes to sustainability with social enterprises, and  Tayside ReUsers is no exception. By trading for 20 years, they have helped to raise awareness of environmental concerns with emphasis on the importance of recycling, all to support our local community.')
				.openPopup();

L.marker([56.456213, -2.992741]).addTo(map) //adds a marker to the map at the Council Waste Management site

				.bindPopup('Le Freak Records.<br><br> Le Freak Records is a record shop based in Dundee\'s trendy West End. It was founded in 2017 by two brothers: Jack and Tom. Their blue and yellow shop is a staple to to the sustainable Perth Road scene. They sell new  and second hand records alongside intimate store gigs and DJ sets by the Le Freak and Friends DJ Set. They are huge believers in giving a new life to old products. Their DJ Booth is made entirely from upcycled pallets and off cuts. Their walls are also made of old obsolete computer circuit boards.')
				.openPopup();

L.marker([56.458093, -2.973955]).addTo(map) //adds a marker to the map at the Council Waste Management site

				.bindPopup('Groucho\'s Record Store.<br><br> In Dundee, you are spoilt for choice when it comes to sustainable options for listening to music! Groucho\'s is "one of the longest running and well renowned CD, DVD and record shops in Dundee". It also won Dundee\'s Independent Retailer of the Year four times.')
				.openPopup();

L.marker([56.459602, -2.979840]).addTo(map) //adds a marker to the map at the Council Waste Management site

				.bindPopup('Spex Pistols.<br><br> Spex Pistols is a unique creative gem, located just off the university campus. Not only is it "fully stocked with a wide variety of designer, vintage and classic frames", catering for every pocket, personality and profile. They also offer a frame repair service described as "gold-dust" in today\'s economy.')
				.openPopup();

L.marker([56.456164, -2.985466]).addTo(map) //adds a marker to the map at the Council Waste Management site

				.bindPopup('Gate Church International.<br><br> Gate Church International have high aims of becoming the "Greenest Church in Scotland". Since they are funded by the Scottish Government\'s Climate Challenge Fund, they are doing everything they can to help our local community to transition to a more sustainable way of life. Through their \'Give Boxes\' network, you can be part of the change by donating clothing, household goods, toys and electrical items.')
				.openPopup();


L.polygon([
	[56.45584517820995, -2.990673780441284],
	[56.46026612542765, -2.97567218542099],
	[56.460403947559264,-2.9863929748535156],
	[56.461115, -2.967385],
	[56.462521, -2.985579],
	[56.462521, -2.985579],
	[56.456213, -2.992741],
	[56.458093, -2.973955],
	[56.459602, -2.979840],
	[56.456164, -2.985466]
]).addTo(map); //adds a polygon linking 3 positions 2 markers + 1
>>>>>>> Stashed changes

map.locate({setView: true, maxZoom: 16});

function onLocationFound(e) {

  var radius = e.accuracy;

  L.marker(e.latlng).addTo(map)
  .bindPopup("You are " + radius + "Meters from this location").openPopup();

  L.circle(e.latlng, radius).addTo(map);

}

map.on('locationfound' , onLocationFound);

function onLocationError(e) {
    alert(e.message);
}

map.on('locationerror', onLocationError);
