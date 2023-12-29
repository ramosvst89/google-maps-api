var map;
var markers = [];

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
       // center: { lat: -23.5505, lng: -46.6333 }, // Centralizar em São Paulo, por exemplo
        zoom: 10
    });

    // Adicionar um marcador para a própria posição
    adicionarMarcadorMinhaPosicao();

    // Adicionar um novo marcador para cada usuário que acessa o site
    adicionarMarcadorUsuario();
}

function adicionarMarcadorMinhaPosicao() {
    navigator.geolocation.getCurrentPosition(function (position) {
        adicionarMarcador(position.coords.latitude, position.coords.longitude, 'Minha Posição');
    }, function () {
        handleLocationError(true);
    });
}

function adicionarMarcadorUsuario() {
    // Adicione código aqui para obter a localização do usuário (pode ser por meio de um servidor)
    // Exemplo fictício:
    var usuarioLatitude = -23.5605;
    var usuarioLongitude = -46.6203;
    adicionarMarcador(usuarioLatitude, usuarioLongitude, 'Outro Usuário');
}

function adicionarMarcador(lat, lng, titulo) {
    var marcador = new google.maps.Marker({
        position: { lat: lat, lng: lng },
        map: map,
        title: titulo
    });

    markers.push(marcador);
}

function handleLocationError(browserHasGeolocation) {
    var erro = browserHasGeolocation ?
        'Erro: O serviço de geolocalização falhou.' :
        'Erro: Seu navegador não suporta geolocalização.';
    alert(erro);
}
