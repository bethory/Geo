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

$('.menu').on('click', function(){
    $('.form-options').toggleClass('ocultar');
    $('.menu').toggleClass('claro');
});


function ajax() {
    this.send = function(data, url, method, success, type) {
        type = type || 'json';
        var successRes = function(data) {
            success(data);
        };

        var errorRes = function(e) {
            console.log(e);
            alert("error: " + e.status + " \ninfo: " + e.statusText);
        };
        $.ajax({
            url: url,
            type: method,
            data: data,
            success: successRes,
            error: errorRes,
            dataType: type,
            timeout: 60000
        });
    }
}

function locationMap() {

    var rootUrl = "api.php";
    var call = new ajax();
    var method = "post";
    var data = {};

    this.getRedes = function(id) {
        $("#lista_redes option:gt(0)").remove();
        var url = rootUrl + '?type=getRedes';
        $('#lista_redes').find("option:eq(0)").html("Cargando...");

        call.send(data, url, method, function(data) {
            $('#lista_redes').find("option:eq(0)").html("Redes");
            if (data.tp == 1) {
                $.each(data['result'], function(key, val) {
                    var option = $('<option />');
                    option.attr('value', key).text(val);
                    $('#lista_redes').append(option);
                });
                $("#lista_redes").prop("disabled", false);
            } else {
                alert(data.msg);
            }
        });
    };

    this.getMunicipios = function(id) {

        $("#lista_municipios option:gt(0)").remove();
        var url = rootUrl + '?type=getMunicipios';
        $('#lista_municipios').find("option:eq(0)").html("Cargando...");
        
        call.send(data, url, method, function(data) {
            $('#lista_municipios').find("option:eq(0)").html("Municipios");
            if (data.tp == 1) {
                $.each(data['result'], function(key, val) {
                    var option = $('<option />');
                    option.attr('value', key).text(val);
                    $('#lista_municipios').append(option);
                });
                $("#lista_municipios").prop("disabled", false);
            } else {
                alert(data.msg);
            }
        });
    };

    this.getProvincias = function() {

        var url = rootUrl + '?type=getProvincias';
        $('#lista_provincias').find("option:eq(0)").html("Cargando...");

        call.send(data, url, method, function(data) {
            $('#lista_provincias').find("option:eq(0)").html("Provincias");
            console.log(data);
            if (data.tp == 1) {
                $.each(data['result'], function(key, val) {
                    var option = $('<option />');
                    option.attr('value', key).text(val);
                    $('#lista_provincias').append(option);
                });
                $("#lista_provincias").prop("disabled", false);
            } else {
                alert(data.msg);
            }
        });
    };

}

$(function() {
    var loc = new locationMap();
    loc.getProvincias();
    loc.getRedes();

    $("#lista_provincias").on("change", function(ev) {
        var pro = $(this).val();
        if (pro != '') {
            loc.getMunicipios(pro);
        } else {
            $("#lista_municipios option:gt(0)").remove();
        }
    });

    $("#lista_municipios").on("change", function(ev) {
        var mun = $(this).val();
        if (mun != '') {
            //loc.getRedes(mun);
            //loc.getRedes();
        } else {
            //$("#lista_redes option:gt(0)").remove();
        }
    });
});


















//evento inicial
$(document).on("ready", function() {
    $("#lista_provincias").change(function(event) {
        var provincia = $("#lista_provincias").find(':selected').val();
        // console.log(provincia);
        $.post('ajax/capture.php', {
            provincia: provincia
        }, function(data) {
            $("#lista_municipios").html(data);
            // console.log(data);
        });
    });
});

//evento cuando se oprime el botón "filtrar"
$('.btn-success').on('click', function() {
    event.preventDefault();
});

$('.btn-info').on('click', function() {
    event.preventDefault();
});

$('.btn-danger').on('click', function() {
    console.log("clear screen");
});



