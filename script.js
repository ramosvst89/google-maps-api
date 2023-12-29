function initMap() {
    navigator.geolocation.getCurrentPosition(function(position) {
        var minhaPosicao = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };

        var mapa = new google.maps.Map(document.getElementById('map'), {
            center: minhaPosicao,
            zoom: 16
        });

        var marcador = new google.maps.Marker({
            position: minhaPosicao,
            map: mapa,
            title: 'Minha Posição'
        });
    }, function() {
        handleLocationError(true);
    });
}

function handleLocationError(browserHasGeolocation) {
    var erro = browserHasGeolocation ?
        'Erro: O serviço de geolocalização falhou.' :
        'Erro: Seu navegador não suporta geolocalização.';
    alert(erro);
}
