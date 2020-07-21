function iniciarMap(){
  var coord = {lat:-2.2191452 ,lng: -79.9467276};
  var map = new google.maps.Map(document.getElementById('map'),{
    zoom: 10,
    center: coord
  });
  var marker = new google.maps.Marker({
    position: coord,
    map: map
  });
}