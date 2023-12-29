var map;
var markers = [];

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10
    });

    // Adicionar um marcador para a própria posição
    adicionarMarcadorMinhaPosicao();
}

function adicionarMarcadorMinhaPosicao() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var minhaPosicao = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            map.setCenter(minhaPosicao);

            // Adicionar marcador
            adicionarMarcador(minhaPosicao.lat, minhaPosicao.lng, 'Minha Posição');
        }, function () {
            handleLocationError(true);
        });
    } else {
        // Browser não suporta geolocalização
        handleLocationError(false);
    }
}

function adicionarMarcador(lat, lng, titulo) {
    var marcador = new google.maps.Marker({
        position: { lat: lat, lng: lng },
        map: map,
        title: titulo
    });

    markers.push(marcador);
}

function handleLocationError(geolocationAvailable) {
    var erro = geolocationAvailable ?
        'Erro: O serviço de geolocalização falhou.' :
        'Erro: Seu navegador não suporta geolocalização.';
    alert(erro);
}
