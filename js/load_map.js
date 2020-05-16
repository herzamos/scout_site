var sede_stabio = {
    lat: 45.851617,
    lng: 8.939075
};
var sede_rancate = {
    lat: 45.874714,
    lng: 8.967948
};

function initMap() {
        var map1 = new google.maps.Map(document.getElementById('map1'), {
        zoom: 17,
        center: sede_stabio
    });
        var marker1 = new google.maps.Marker({
        position: sede_stabio,
        map: map1//,
        //title: 'Hello World!'
    });
        var map2 = new google.maps.Map(document.getElementById('map2'), {
        zoom: 17,
        center: sede_rancate
    });
        var marker2 = new google.maps.Marker({
        position: sede_rancate,
        map: map2//,
        // title: 'Hello World!'
    });
}
google.maps.event.addDomListener(window, 'load', initMap);