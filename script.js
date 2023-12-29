// js/script.js

// Função para inicializar o mapa
function initMap() {
    // Configurações iniciais do mapa
    var mapOptions = {
        center: { lat: -23.550520, lng: -46.633307 }, // Coordenadas iniciais (pode ser qualquer lugar)
        zoom: 10, // Nível de zoom inicial
    };

    // Criação do mapa
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // Adicione seu código para obter a localização dos usuários e marcá-los no mapa aqui
}

// Chamada para a função de inicialização do mapa quando a página carrega
google.maps.event.addDomListener(window, 'load', initMap);
