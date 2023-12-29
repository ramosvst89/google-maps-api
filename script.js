var map;
var markers = [];
var usuarios = []; // Array para armazenar informações sobre os usuários

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
            adicionarMarcador(minhaPosicao.lat, minhaPosicao.lng, 'Minha Posição', true);
        }, function () {
            handleLocationError(true);
        });
    } else {
        // Browser não suporta geolocalização
        handleLocationError(false);
    }
}

function adicionarUsuario() {
    var nome = document.getElementById('nome').value;
    
    if (nome.trim() === "") {
        alert("Por favor, insira seu nome.");
        return;
    }

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var usuarioPosicao = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            // Adicionar marcador com nome do usuário
            adicionarMarcador(usuarioPosicao.lat, usuarioPosicao.lng, nome, false);
        }, function () {
            handleLocationError(true);
        });
    } else {
        // Browser não suporta geolocalização
        handleLocationError(false);
    }
}

function adicionarMarcador(lat, lng, titulo, minhaPosicao) {
    var marcador = new google.maps.Marker({
        position: { lat: lat, lng: lng },
        map: map,
        title: titulo
    });

    markers.push(marcador);

    if (!minhaPosicao) {
        // Adicionar informações do usuário ao array
        usuarios.push({
            nome: titulo,
            lat: lat,
            lng: lng
        });
    }
}

function handleLocationError(geolocationAvailable) {
    var erro = geolocationAvailable ?
        'Erro: O serviço de geolocalização falhou.' :
        'Erro: Seu navegador não suporta geolocalização.';
    alert(erro);
}
