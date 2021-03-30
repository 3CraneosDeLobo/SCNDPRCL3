let map;
let lat2;
let lng2;

function mapa(){
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 18.50143047641166 , lng: -69.95102464713273 },
        zoom: 12
    })
}


function addMapa(){
mapa();
let marker2 = null;
map.addListener("click", (e) => {

let marker = new google.maps.Marker( {
    position: e.latLng
})
if(marker2 != null){
    marker2.setMap(null);
}

marker2 = marker;

marker2.setMap(map);

lat2 = document.getElementById("lat").value = e.latLng.lat();
lng2 = document.getElementById("lng").value = e.latLng.lng();


})
}



function showMapa(datos){
    mapa();

datos.forEach(x => {

    let marker = new google.maps.Marker( {
        position: {lat: x.lat, lng: x.lng},
        label: x.ID,
        map: map

    })
    
});



}



function lat(){
    return lat2;
}
function lng(){
    return lng2;
}
