
var map = L.map('map').fitWorld();

//https://leaflet-extras.github.io/leaflet-providers/preview/
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map); //adds a tile layer from openStreetMap.org to the map

var greenIcon = new L.Icon({
  iconUrl: 'images/leaf-logo.png',
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

var legend = L.control({ position: "bottomright" });

		legend.onAdd = function(map) {
		  var div = L.DomUtil.create("div", "legend");
		  div.innerHTML += "<h4>Little Green Map</h4>";
		 	div.innerHTML += '<a href="https://www.facebook.com/thelittlegreenlarder/"><img alt="app logo" src="images/app-logo.png" width="100" height="75"><br>'
		  div.innerHTML += '<a href="https://www.facebook.com/thelittlegreenlarder/" class="fab fa-facebook fa-2x"></a><a href="https://www.instagram.com/thelittlegreenlarder/" class="fab fa-instagram fa-2x"><span>		</span><a href="http://thelittlegreenblogger.com/"  class="fab fa-blogger-b fa-2x"></a><br>';

			return div;
};

legend.addTo(map);

L.marker([56.45584517820995, -2.990673780441284], {icon: greenIcon}).addTo(map) //adds a marker to the map at the Little Green Larder

    	.bindPopup("<div class='card'> <img class='card-img-top' src='images/shop-front.jpg'> <div class='card-body'><h5 class='card-title'>The Little Green Larder</h5> <p class='card-text'>An eco-friendly, zero-waste shop in Dundee which sells mostly package free options for our everyday shopping needs.</p></div><ul class='list-group list-group-flush'><li class='list-group-item'><strong>Sustainability Tip:</strong> Don't use plastic bags at checkout! Bring your own bags for your grocery shop.</li></ul></div>")
    	.openPopup();

L.marker([56.46026612542765, -2.97567218542099], {icon: yellowIcon}).addTo(map) //adds a marker to the map at the Council Waste Management site

			.bindPopup("<div class='card'> <img class='card-img-top' src='images/dundeecouncil.jpg' alt='DundeeWaste'> <div class='card-body'><h5 class='card-title'>Dundee City Council Waste Management</h5> <p class='card-text'> The Councils waste management site right in the center of Dundee.</p></div><ul class='list-group list-group-flush'> <li class='list-group-item'><strong>Sustainability Tip: </strong>Try clothes shopping at charity shops! Buying second hand clothes means less waste and slows down the fast fashion industry.</li></ul></div>")
			.openPopup();


L.marker([56.461115, -2.967385], {icon: yellowIcon}).addTo(map) //adds a marker to the map at the Birchwood Cafe

			.bindPopup("<div class='card'> <img class='card-img-top' src='images/birchwood.jpg' alt='Birchwood'> <div class='card-body'><h5 class='card-title'>Birchwood Food Emporium</h5> <p class='card-text'>Birchwood Food Emporium and Cafe is a family run business that offers a wide selection of organic wholefoods produced and sourced locally. The cosy cafe offers a delicious menu catering for all dietary requirements.</p></div><ul class='list-group list-group-flush'> <li class='list-group-item'><strong>Sustainability Tip: </strong>Ditch sponges and scouring pads made from non-renewable sources to those made from sustainably grown crops, such as loofah and coconut.</li></ul></div>")
			.openPopup();


L.marker([56.458471, -2.973174], {icon: yellowIcon}).addTo(map) //adds a marker to the map at the Marwicks Restaurant

			.bindPopup("<div class='card'> <img class='card-img-top 'src='images/marwicks.jpg' alt='Marwicks'> <div class='card-body'><h5 class='card-title'>Marwick\'s Vegan Kitchen</h5> <p class='card-text'> Marwick\'s Vegan Kitchen hasn\'t always been fully vegan. However, after thriving in <em>Veganuary</em> in 2017, it was clear there was no going back.</p></div><ul class='list-group list-group-flush'> <li class='list-group-item'><strong>Sustainability Tip: </strong>Invest in a reusable metal straw instead of using plastic ones. </li></ul></div>")
			.openPopup();

L.marker([56.462521, -2.985579], {icon: yellowIcon}).addTo(map) //adds a marker to the map at the tayside ReUsers

			.bindPopup("<div class='card'> <img class='card-img-top' src='images/taysideReusers.jpg' alt='TaysideReUsers'> <div class='card-body'><h5 class='card-title'>Tayside ReUsers</h5> <p class='card-text'>Dundee has always been ahead of the curve when  it comes to sustainability with social enterprises, and  Tayside ReUsers is no exception. By trading for 20 years, they have helped to raise awareness of environmental concerns with emphasis on the importance of recycling, all to support our local community.</p></div><ul class='list-group list-group-flush'> <li class='list-group-item'><strong>Sustainability Tip: </strong>Try invest in a Bamboo toothbrush and toothpaste in plastic-free packaging. This reduces non-biodegradable plastic waste.</li></ul></div>")
			.openPopup();

L.marker([56.456213, -2.992741], {icon: yellowIcon}).addTo(map) //adds a marker to the map at the Le Freak Records

			.bindPopup("<div class='card'> <img class='card-img-top' src='images/leFreak.jpg' alt='FreakRecords'> <div class='card-body'><h5 class='card-title'>Le Freak Records</h5> <p class='card-text'>Le Freak Records is a record shop based in Dundee\'s trendy West End. They sell new and second hand records alongside intimate store gigs and DJ sets by the Le Freak and Friends DJ Set. Their DJ Booth is made entirely from upcycled pallets and off cuts.</p></div><ul class='list-group list-group-flush'> <li class='list-group-item'><strong>Sustainability Tip: </strong>If you’re in the market for a new car, take a look at electric cars. There is new charging points being added everyday across the UK.</li></ul></div>")
			.openPopup();

L.marker([56.458093, -2.973955], {icon: yellowIcon}).addTo(map) //adds a marker to the map at the Grouchos Record Store

			.bindPopup("<div class='card'><img class='card-img-top' src='images/grouchos.jpg' alt='Grouchos'> <div class ='card-body'><h5 class='card-title'>Groucho\'s Record Store</h5><p class='card-text'>In Dundee, you are spoilt for choice for sustainable music options! Groucho\'s is a second hand music shop that has won Dundee\'s Independent Retailer of the Year four times.</p></div><ul class='list-group list-group-flush'><li class='list-group-item'><strong>Sustainability Tip: </strong>Take a reusable coffee flask with you when you pop in to your local coffee shop. Some coffee shops even charge less if you have a reusable cup!</li></ul></div>")
			.openPopup();

L.marker([56.459602, -2.979840], {icon: yellowIcon}).addTo(map) //adds a marker to the map at the Spex Pistols Shop

			.bindPopup("<div class='card'><img class='card-img-top' src='images/spexPistols.jpg' alt='SpexPistols'> <div class='card-body'><h5 class='card-title'>Spex Pistols</h5> <p class='card-text'>Spex Pistols is a unique creative gem, not only is it fully stocked with a wide variety of designer, vintage and classic frames, catering for every pocket, personality and profile. They also offer a frame repair service described as <em>gold-dust</em>.</p></div><ul class='list-group list-group-flush'><li class='list-group-item'><strong>Sustainability Tip: </strong>Eat less meat! Having even one or two days a week not eating red meat can significantly reduce your carbon footprint</li></ul><div>")
			.openPopup();

L.marker([56.456164, -2.985466], {icon: yellowIcon}).addTo(map) //adds a marker to the map at the Gate Church

			.bindPopup("<div class ='card'><img class='card-img-top' src='images/gateChurch.jpeg' alt='gateChurch'><div class='card-body'><h5 class='card-title'>Gate Church International</h5><p class='card-text'>Gate Church International have high aims of becoming the <em>Greenest Church in Scotland</em>. Through their Give Boxes network, you can be part of the change by donating clothing, household goods, toys and electrical items.</p></div><ul class='list-group list-group-flush'><li class='list-group-item'><strong>Sustainability Tip: </strong>Buy local! From clothes to food, buying locally reduces transportation costs and supports local businesses.</li></ul></div>")
			.openPopup();

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

		map.setView(new L.LatLng(56.45584517820995, -2.990673780441284), 15);
}

map.on('locationerror', onLocationError);
