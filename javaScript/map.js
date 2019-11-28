
var map = L.map('map').fitWorld();

//https://leaflet-extras.github.io/leaflet-providers/preview/
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map); //adds a tile layer from openStreetMap.org to the map

var greenIcon = new L.Icon({
  iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  ShadowSize: [41, 41]
});

var yellowIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png',
  shadowUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-yellow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  ShadowSize: [41, 41]
});



L.marker([56.45584517820995, -2.990673780441284], {icon: greenIcon}).addTo(map) //adds a marker to the map at the Little Green Larder

    	.bindPopup("<div class='card'> <img class='card-img-top' src='https://scontent.flhr4-1.fna.fbcdn.net/v/t1.0-9/p960x960/68936048_428811794509563_3131775309112672256_o.jpg?_nc_cat=104&_nc_ohc=ZLdSufreARkAQkYbSP3w4q_56fulQ0qz6vBvwX4SFjMdCeMi6bJO1Yoxg&_nc_ht=scontent.flhr4-1.fna&oh=4dbb868472c733874ef8499f083f6f07&oe=5E7FAAF3' alt='Card image cap'> <div class='card-body'><h5 class='card-title'>The Little Green Larder</h5> <p class='card-text'>A eco-friendly, zero-waste shop in Dundee which sells mostly package free options for our everyday shopping needs.</p></div><ul class='list-group list-group-flush'><li class='list-group-item'><strong>Sustainability Tip:</strong> Don't use plastic bags at checkout! Bring your own bags for your grocery shop.</li></ul></div>")
    	.openPopup();

L.marker([56.46026612542765, -2.97567218542099], {icon: yellowIcon}).addTo(map) //adds a marker to the map at the Council Waste Management site

		 .bindPopup('Dundee City Council Waste Management.<br><br> The Councils waste management site right in the center of Dundee.')
		 .openPopup();

L.marker([56.461115, -2.967385], {icon: yellowIcon}).addTo(map) //adds a marker to the map at the Council Waste Management site

		 .bindPopup('Birchwood Food Emporium.<br><br> Birchwood Food Emporium and Cafe is an addition to Dundee\'s city centre, rebranded and expanded from the former WholeFoods Dundee. The family run business offers a wide selction of organic wholefoods produced and sourced locally. Their cosy cafe offers a delicious menu catering for all dietary requirements.')
 		 .openPopup();

L.marker([56.458471, -2.973174], {icon: yellowIcon}).addTo(map) //adds a marker to the map at the Council Waste Management site

			.bindPopup('Marwick\'s Vegan Kitchen.<br><br> Marwick\'s Vegan Kitchen hasn\'t always been fully vegan. However, after thriving in "Veganuary" in 2017, it was clear there was no going back.')
			.openPopup();

L.marker([56.462521, -2.985579], {icon: yellowIcon}).addTo(map) //adds a marker to the map at the Council Waste Management site

			.bindPopup('Tayside ReUsers.<br><br> Dundee has always been ahead of the curve when  it comes to sustainability with social enterprises, and  Tayside ReUsers is no exception. By trading for 20 years, they have helped to raise awareness of environmental concerns with emphasis on the importance of recycling, all to support our local community.')
			.openPopup();

L.marker([56.456213, -2.992741], {icon: yellowIcon}).addTo(map) //adds a marker to the map at the Council Waste Management site

			.bindPopup('Le Freak Records.<br><br> Le Freak Records is a record shop based in Dundee\'s trendy West End. It was founded in 2017 by two brothers: Jack and Tom. Their blue and yellow shop is a staple to to the sustainable Perth Road scene. They sell new  and second hand records alongside intimate store gigs and DJ sets by the Le Freak and Friends DJ Set. They are huge believers in giving a new life to old products. Their DJ Booth is made entirely from upcycled pallets and off cuts. Their walls are also made of old obsolete computer circuit boards.')
			.openPopup();

L.marker([56.458093, -2.973955], {icon: yellowIcon}).addTo(map) //adds a marker to the map at the Council Waste Management site

			.bindPopup('Groucho\'s Record Store.<br><br> In Dundee, you are spoilt for choice when it comes to sustainable options for listening to music! Groucho\'s is "one of the longest running and well renowned CD, DVD and record shops in Dundee". It also won Dundee\'s Independent Retailer of the Year four times.')
			.openPopup();

L.marker([56.459602, -2.979840], {icon: yellowIcon}).addTo(map) //adds a marker to the map at the Council Waste Management site

			.bindPopup('Spex Pistols.<br><br> Spex Pistols is a unique creative gem, located just off the university campus. Not only is it "fully stocked with a wide variety of designer, vintage and classic frames", catering for every pocket, personality and profile. They also offer a frame repair service described as "gold-dust" in today\'s economy.')
			.openPopup();

L.marker([56.456164, -2.985466], {icon: yellowIcon}).addTo(map) //adds a marker to the map at the Council Waste Management site

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
