function iniciarMap(){
    var coord = {lat:7.106408 ,lng: -73.1185527};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });

    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}

