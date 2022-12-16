function iniciarMap(){
    var coord = { lat: -45.9264531 ,lng: -67.5842812};
    var map = new google.maps.Map(document.getElementById('map'),{
        zoom: 10,
        center: coord
    });
    
    var marker = new google.maps.Marker({
        position: coord,
        map: map
    })
}
