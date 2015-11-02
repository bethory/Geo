var map;

function initMapX(){
    var cc = {
        lat: 5.067291,
        lng: -74.595361
    };
    //console.warn(cc);
}

function initMap() {
    var cundinamarca = {
        lat: 5.067291,
        lng: -74.595361
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: cundinamarca
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
        position: cundinamarca,
        map: map,
        title: 'Uluru (Ayers Rock)'
    });
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
}

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

var munLoc = [];
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
            $('#lista_redes').find("option:eq(0)").html("Selecione la red principal");
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
//al filrtar llamar el dato de ubicacion
    this.getMunicipios = function(id) {

        $("#lista_municipios option:gt(0)").remove();
        var url = rootUrl + '?type=getMunicipios&proId=' + id;
        $('#lista_municipios').find("option:eq(0)").html("Cargando...");

        call.send(data, url, method, function(data) {
            $('#lista_municipios').find("option:eq(0)").html("Selecione su municipio");
            if (data.tp == 1) {

                for (i = 0; i < data['result'].length; i++) {
                    var option = "<option value='"+data['result'][i].split(",")[1]+"'>"+data['result'][i].split(",")[0]+"</option>";
                    $('#lista_municipios').append(option);
                }
                $("#lista_municipios").prop("disabled", false);
            } else {
                alert(data.msg);
            }
        });
    };

    this.getMunicipiosAll = function() {

        $("#lista_municipios option:gt(0)").remove();
        var url = rootUrl + '?type=getMunicipiosAll';
        $('#lista_municipios').find("option:eq(0)").html("Cargando...");

        call.send(data, url, method, function(data) {
            $('#lista_municipios').find("option:eq(0)").html("Selecione su municipio");
            if (data.tp == 1) {
                for (i = 0; i < data['result'].length; i++) {
                    var option = "<option value='"+data['result'][i].split(",")[1]+"'>"+data['result'][i].split(",")[0]+"</option>";
                    $('#lista_municipios').append(option);
                }
                $("#lista_municipios").prop("disabled", false);
            } else {
                alert(data.msg);
            }
        });
    };

    this.getMunicipioLoc = function(id) {
        var url = rootUrl + '?type=getCoordenadas&idMunicipio=' + id;
        call.send(data, url, method, function(data) {
            if (data.tp == 1) {
                locat = data['result'];
                console.warn(locat);
            } else {
                alert(data.msg);
            }
        });
    };

    this.getProvincias = function() {
        var url = rootUrl + '?type=getProvincias';
        $('#lista_provincias').find("option:eq(0)").html("Cargando...");
        call.send(data, url, method, function(data) {
            $('#lista_provincias').find("option:eq(0)").html("Todas");
            if (data.tp == 1) {
                for (i = 0; i < data['result'].length; i++) {
                    var option = "<option value='"+data['result'][i].split(",")[1]+"'>"+data['result'][i].split(",")[0]+"</option>";
                    $('#lista_provincias').append(option);
                }
                $("#lista_provincias").prop("disabled", false);
            } else {
                alert(data.msg);
            }
        });
    };
}

function parseLoc() {

    this.getLatLon = function(dmsString) {

        dmsString = dmsString.trim();
        var dmsRe = /([NSEW])?(-)?(\d+(?:\.\d+)?)[°º:d\s]?\s?(?:(\d+(?:\.\d+)?)[':]\s?(?:(\d{1,2}(?:\.\d+)?)(?:'')?)?)?\s?([NSEW])?/i;

        var result = {};
        var m1, m2, decDeg1, decDeg2, dmsString2;
        m1 = dmsString.match(dmsRe);

        if (!m1) throw 'not parse';

        if (m1[1]) {
            m1[6] = undefined;
            dmsString2 = dmsString.substr(m1[0].length - 1).trim();
        } else {
            dmsString2 = dmsString.substr(m1[0].length).trim();
        }

        decDeg1 = decDegMatch(m1);
        m2 = dmsString2.match(dmsRe);
        decDeg2 = m2 ? decDegMatch(m2) : {};

        if (typeof decDeg1.latLon === 'undefined') {
            if (!isNaN(decDeg1.decDeg) && isNaN(decDeg2.decDeg)) {
                return decDeg1.decDeg;
            } else if (!isNaN(decDeg1.decDeg) && !isNaN(decDeg2.decDeg)) {
                decDeg1.latLon = 'lat';
                decDeg2.latLon = 'lon';
            } else {
                throw 'not parse';
            }
        }

        if (typeof decDeg2.latLon === 'undefined') {
            decDeg2.latLon = decDeg1.latLon === 'lat' ? 'lon' : 'lat';
        }

        result[decDeg1.latLon] = decDeg1.decDeg;
        result[decDeg2.latLon] = decDeg2.decDeg;
        return result;
    };
}

function decDegMatch(m) {
    console.log(m);
    var signIndex = {
        "-": -1,
        "N": 1,
        "S": -1,
        "E": 1,
        "W": -1
    };
    var latLonIndex = {
        "N": "lat",
        "S": "lat",
        "E": "lon",
        "W": "lon"
    };
    var degrees, minutes, seconds, sign, latLon;
    var deg, min, sec;

    sign = signIndex[m[2]] || signIndex[m[1]] || signIndex[m[6]] || 1;
    degrees = Number(m[3]);
    minutes = m[4] ? Number(m[4]) : 0;
    seconds = m[5] ? Number(m[5]) : 0;
    latLon = latLonIndex[m[1]] || latLonIndex[m[6]];

    if (!inRange(degrees, 0, 180)) throw 'Degrees outrange';
    if (!inRange(minutes, 0, 60)) throw 'Minutes outrange';
    if (!inRange(seconds, 0, 60)) throw 'Seconds outrange';

    console.info(deg + " " + min + " " + sec);

    return {
        decDeg: sign * (degrees + minutes / 60 + seconds / 3600),
        latLon: latLon
    };
}

function inRange(value, a, b) {
    return value >= a && value <= b;
}

$('.menu, .titu').on('click', function(){
    $('.form-options').toggleClass('ocultar');
    $('.menu').toggleClass('claro');
    $('.titu').toggleClass('titclaro');
});

$(function() {
    var loc = new locationMap();
    loc.getProvincias();
    loc.getMunicipiosAll();
    loc.getRedes();
    var pro='';
    $( ".btn-success" ).prop( "disabled", true );


    $("#lista_provincias").on("change", function(ev) {
        pro = $(this).val();
        if (pro != '') {
            loc.getMunicipios(pro);
        } else {
            $("#lista_municipios option:gt(0)").remove();
        }
        if($("#lista_provincias")[0].selectedIndex == 0){
            loc.getMunicipiosAll();
        }
    });

    $("#lista_municipios").on("change", function(ev) {
        if($("#lista_municipios")[0].selectedIndex == 0){
            $( ".btn-success" ).prop( "disabled", true );
        }else{
            $( ".btn-success" ).prop( "disabled", false );
        }
    });

    $(".btn-success").on("click", function(){
        idMunicipio=$( "#lista_municipios" ).val();
        loc.getMunicipioLoc(idMunicipio);
    })
});