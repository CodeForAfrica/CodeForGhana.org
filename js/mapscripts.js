function initMap() {

  // Specify features and elements to define styles.
  var styleArray =[{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]}];


  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 5.5500, lng: 0.2000},
    scrollwheel: false,
    // Apply the map style array to the map.
    styles: styleArray,
    zoom: 7,

  });
	

var layer = new google.maps.FusionTablesLayer({
    query: {
      select: 'Geo Code',
      from: '1vf6DtvhC30gw6h8oijsARU-pB3-pFkE8N3-BbyXR'
    }
  });
  layer.setMap(map);

  google.maps.event.addListener(layer, 'click', function(e){
    e.infoWindowHtml = '<img src="'+e.row['Image'].value+'"style="float: left; margin: 5px;"/>'+
                       '<strong> Best Farmer: </strong>'+ e.row['Name of Farmer'].value+'<br />'+
                       '<strong> Year: </strong>'+e.row['YEAR'].value+'<br />'+   
                       '<strong> Venue: </strong>' + e.row['Venue'].value+'<br />' + 
                       '<strong> Venue Region: </strong>' + e.row['Venue Region'].value+'<br />' +
                       '<strong> Region Of Winner: </strong>' + e.row['Region of Winner'].value+'<br />';
  });
}
