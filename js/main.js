 var map;

 function initMap() {
     var uluru = {
         lat: 4.7154268,
         lng: -74.1050223
     };
     var map = new google.maps.Map(document.getElementById('map'), {
         zoom: 16,
         center: uluru
     });


     var contentString = '<div id="content">' +
         '<div id="siteNotice">' +
         '</div>' +
         '<h1 id="firstHeading" class="firstHeading">Proyectos une</h1>' +
         '<div id="bodyContent">' +
         '<p><b> XXXXXXXXXXXX</b>, <a href="#modal">ampliar info</a> </p>' +
         '<p><b> XXXXXXXXXXXX</b>, <a href="#modal">ver mas</a> </p>' +
         '<p>Attribution: Uluru, <a class="btn btn-primary" href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
         'https://en.wikipedia.org/w/index.php?title=Uluru</a> ' +
         '</div>' +
         '</div>';


     var infowindow = new google.maps.InfoWindow({
         content: contentString
     });

     var marker = new google.maps.Marker({
         position: uluru,
         map: map,
         title: 'Uluru (Ayers Rock)'
     });
     marker.addListener('click', function() {
         infowindow.open(map, marker);
     });
 }





 //evento inicial
 $(document).on("ready", function() {
     console.log('document ready');
     //initializeMap();
 });

 //evento cuando se cambia de valor en la lista provincias
 $("#lista_provincias").change(function() {
     //obtener el valor actual de la lista
     var provincia = $('#lista_provincias').find(":selected").text();
     // console.log(provincia);
     $.post('ajax/capture.php', {
         prueba: provincia
     }, function(data) {
         console.log(data);
     });
 });

 //evento cuando se oprime el botón "filtrar"
 $('.btn-success').on('click', function() {
     event.preventDefault();
 });

 // $("#radio_zona").obtener("click", function(){
 //     $("#lista_zona").css("display", "block");
 //     $("#lista_prov").css("display", "none");
 // });

 // $("#radio_prov").on("click", function(){
 //     $("#lista_prov").css("display", "block");
 //     $("#lista_zona").css("display", "none");
 // });
