 var map;

 function initMap() {
     var uluru = {
         lat: 5.067291,
         lng: -74.595361
     };
     var map = new google.maps.Map(document.getElementById('map'), {
         zoom: 16,
         center: uluru
     });


     var contentString = '<div id="content">' +
         '<div id="siteNotice">' +
         '</div>' +
         '<h1 id="firstHeading" class="firstHeading">Proyectos Guaduas</h1>' +
         '<div id="bodyContent">' +
         '<p><b> XXXXXXXXXXXX</b>, <a href="#modal">ampliar info</a> </p>' +
         '<p><b> XXXXXXXXXXXX</b>, <a href="#modal">ver mas</a> </p>' +
         '<p><button type="button" class="btn btn-primary btn-xs">Anterior</button>' +
         '   <button type="button" class="btn btn-primary btn-xs">Siguiente</button>' +
         '</p>' +
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
     $("#lista_provincias").change(function(event) {
         var provincia = $("#lista_provincias").find(':selected').val();
         // console.log(provincia);
         if (provincia!="Todas") {
             $.post('ajax/capture.php', {
                 provincia: provincia
             }, function(data) {
                $("#lista_municipios").html(data);
             });
         }else if(provincia=="Todas"){
            console.log("Todas las provincias");
         };
     });
 });

/*
 //evento cuando se cambia de valor en la lista provincias
 $("#lista_provincias").change(function() {
     //obtener el valor actual de la lista
     var provincia = $('#lista_provincias').find(":selected").text();
     // console.log(provincia);
     $.post('ajax/capture.php', {
         prueba: provincia
     }, function(data) {
     });
 });
*/

 //evento cuando se oprime el botón "filtrar"
 $('.btn-success').on('click', function() {
     event.preventDefault();
 });

 $('.btn-danger').on('click', function() {
    console.log("clear screen");
 });


 // $("#radio_zona").obtener("click", function(){
 //     $("#lista_zona").css("display", "block");
 //     $("#lista_prov").css("display", "none");
 // });

 // $("#radio_prov").on("click", function(){
 //     $("#lista_prov").css("display", "block");
 //     $("#lista_zona").css("display", "none");
 // });
