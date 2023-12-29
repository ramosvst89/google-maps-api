function initMap() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var minhaLocalizacao = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            var mapOptions = {
                zoom: 15,
                center: minhaLocalizacao
            };

            var map = new google.maps.Map(document.getElementById('map'), mapOptions);

            var marker = new google.maps.Marker({
                position: minhaLocalizacao,
                map: map,
                title: 'Sua Localização'
            });
        }, function() {
            handleLocationError(true);
        });
    } else {
        handleLocationError(false);
    }
}

function handleLocationError(browserHasGeolocation) {
    var mensagem = browserHasGeolocation ?
                    'Erro: A Geolocalização falhou.' :
                    'Erro: Seu navegador não suporta Geolocalização.';

    alert(mensagem);

    var minhaLocalizacao = { lat: -23.5505, lng: -46.6333 };

    var mapOptions = {
        zoom: 16,
        center: minhaLocalizacao
    };

    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    var marker = new google.maps.Marker({
        position: minhaLocalizacao,
        map: map,
        title: 'Sua Localização'
    });
}

google.maps.event.addDomListener(window, 'load', initMap);
