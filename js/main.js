var map;
var infoWindow;
var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var bounds = new google.maps.LatLngBounds();
var overlayWidth = 400;
var leftMargin = 30;
var rightMargin = 80;

overlayWidth += leftMargin;

var start = new google.maps.LatLng(4.8836367, -74.1311669);
var baseLat = 4.3836367;
var baseLng = -74.5311669;
var markers = [];

function initMapX() {
    initMap(9, 1);
}

var markersData = [{
    lat: 4.8836367,
    lng: -74.0311669,
    tit: "Cundinamarca",
    des: "proyectos de "
}];


function initMap(z, cp) {
    z = typeof z !== 'undefined' ? z : 15;
    cp = typeof cp !== 'undefined' ? cp : 0;

    directionsDisplay = new google.maps.DirectionsRenderer({
        draggable: true
    });

    var btn = document.getElementById('filter');
    btn.addEventListener('click', addMarkers);

    var mapOptions = {
        zoom: 9,
        center: start,
        scrollwheel: true,
        streetViewControl: false,
        panControl: false,
        scaleControl: false,
        mapTypeId: 'roadmap',
        zoomControlOptions: {
            position: google.maps.ControlPosition.TOP_RIGHT
        }
    };


    map = new google.maps.Map(document.getElementById('map'), mapOptions);
    directionsDisplay.setMap(map);

    infoWindow = new google.maps.InfoWindow();

    google.maps.event.addListener(map, 'click', function() {
      infoWindow.close();
    });


    if (cp == 1) {

        var cundinamarca=[{lat:4.72835793861282,lng:-73.0521297454834},{lat:4.595760565928202,lng:-73.07247161865234},{lat:4.535784190415298,lng:-73.0839729309082},{lat:4.463908655093197,lng:-73.09358596801758},{lat:4.413506008886153,lng:-73.10491561889648},{lat:4.294888046596451,lng:-73.12002182006836},{lat:4.215627929455763,lng:-73.13186645507812},{lat:4.247983476149167,lng:-73.18147659301758},{lat:4.257570044637456,lng:-73.2015609741211},{lat:4.282563036041647,lng:-73.21443557739258},{lat:4.301906366448439,lng:-73.29219818115234},{lat:4.315771637436764,lng:-73.35845947265625},{lat:4.306699328215635,lng:-73.42386245727539},{lat:4.27759873955884,lng:-73.4791374206543},{lat:4.2998522307419265,lng:-73.53801727294922},{lat:4.357537093081263,lng:-73.55724334716797},{lat:4.397417514877157,lng:-73.57646942138672},{lat:4.420352070868226,lng:-73.57234954833984},{lat:4.445168514760122,lng:-73.59209060668945},{lat:4.49291642112739,lng:-73.59106063842773},{lat:4.50900282687582,lng:-73.5673713684082},{lat:4.548190556153664,lng:-73.57887268066406},{lat:4.562735678291754,lng:-73.62110137939453},{lat:4.54784831444508,lng:-73.64273071289062},{lat:4.482477180630149,lng:-73.65148544311523},{lat:4.481450362029305,lng:-73.66195678710938},{lat:4.516703639813754,lng:-73.68616104125977},{lat:4.486584440604191,lng:-73.73628616333008},{lat:4.453041143285685,lng:-73.74967575073242},{lat:4.431134490225111,lng:-73.79568099975586},{lat:4.399471384547001,lng:-73.81387710571289},{lat:4.382697950048639,lng:-73.79705429077148},{lat:4.318510426474392,lng:-73.78246307373047},{lat:4.290608551578638,lng:-73.78486633300781},{lat:4.260651416305136,lng:-73.75276565551758},{lat:4.199192849613205,lng:-73.74383926391602},{lat:4.204157649865365,lng:-73.80992889404297},{lat:4.169574593122523,lng:-73.82537841796875},{lat:4.168376143010115,lng:-73.86348724365234},{lat:4.14406433273052,lng:-73.89781951904297},{lat:4.148173423696471,lng:-73.9324951171875},{lat:4.090644214818227,lng:-73.96648406982422},{lat:4.1099922996010685,lng:-73.98210525512695},{lat:4.087048501490455,lng:-74.03223037719727},{lat:4.059994523262646,lng:-74.03326034545898},{lat:4.056227441581704,lng:-74.07171249389648},{lat:4.012562262831658,lng:-74.10003662109375},{lat:4.005541368529479,lng:-74.15239334106445},{lat:4.092185229876435,lng:-74.12904739379883},{lat:4.123518558045153,lng:-74.09076690673828},{lat:4.14406433273052,lng:-74.1163444519043},{lat:4.18155899364912,lng:-74.11033630371094},{lat:4.2060408416904345,lng:-74.13557052612305},{lat:4.22761162285414,lng:-74.13591384887695},{lat:4.255002225489976,lng:-74.15307998657227},{lat:4.305329913647438,lng:-74.12630081176758},{lat:4.359419907501498,lng:-74.09454345703125},{lat:4.379788234289934,lng:-74.09454345703125},{lat:4.3890308216592935,lng:-74.1134262084961},{lat:4.4302787483965735,lng:-74.10947799682617},{lat:4.463138521754353,lng:-74.07548904418945},{lat:4.488124657139441,lng:-74.07154083251953},{lat:4.511740903056694,lng:-74.05317306518555},{lat:4.550928483966981,lng:-74.02587890625},{lat:4.560168913417035,lng:-74.00630950927734},{lat:4.593193919513268,lng:-73.99944305419922},{lat:4.596102784751997,lng:-73.9903450012207},{lat:4.62792841550604,lng:-74.0093994140625},{lat:4.636825648148083,lng:-74.03120040893555},{lat:4.664372137712649,lng:-74.01077270507812},{lat:4.737767118660475,lng:-74.00768280029297},{lat:4.764283208982784,lng:-74.01901245117188},{lat:4.798496007069357,lng:-74.01369094848633},{lat:4.805680477197942,lng:-73.9987564086914},{lat:4.822101838621247,lng:-74.02347564697266},{lat:4.832193936761136,lng:-74.04373168945312},{lat:4.828516325164519,lng:-74.06055450439453},{lat:4.833220243413272,lng:-74.0863037109375},{lat:4.803542249951782,lng:-74.08879280090332},{lat:4.798838126410272,lng:-74.10140991210938},{lat:4.763513401393361,lng:-74.11677360534668},{lat:4.736398518606417,lng:-74.12758827209473},{lat:4.725449620728762,lng:-74.14896011352539},{lat:4.7055187613783795,lng:-74.17101860046387},{lat:4.663345579805766,lng:-74.15968894958496},{lat:4.651796700049849,lng:-74.1958236694336},{lat:4.629724981115735,lng:-74.2221736907959},{lat:4.616207851836899,lng:-74.21685218811035},{lat:4.600893831026332,lng:-74.20560836791992},{lat:4.596787221906625,lng:-74.18432235717773},{lat:4.5490461597136305,lng:-74.17316436767578},{lat:4.5384366037793855,lng:-74.17333602905273},{lat:4.5336451402841105,lng:-74.1848373413086},{lat:4.5057513480093005,lng:-74.17436599731445},{lat:4.503526643564132,lng:-74.18157577514648},{lat:4.444312789198532,lng:-74.190673828125},{lat:4.4088848813501444,lng:-74.20612335205078},{lat:4.384238383218796,lng:-74.21367645263672},{lat:4.363699013639317,lng:-74.22037124633789},{lat:4.293518610801372,lng:-74.21487808227539},{lat:4.282563036041647,lng:-74.22019958496094},{lat:4.267498864686085,lng:-74.2042350769043},{lat:4.2413070455561845,lng:-74.20629501342773},{lat:4.197309641252648,lng:-74.23736572265625},{lat:4.133449082293884,lng:-74.24491882324219},{lat:4.10040392674654,lng:-74.25487518310547},{lat:4.129168699145513,lng:-74.32456970214844},{lat:4.092527677264495,lng:-74.3441390991211},{lat:4.055884978739559,lng:-74.35134887695312},{lat:4.003143976184332,lng:-74.36508178710938},{lat:3.9867045254959277,lng:-74.37314987182617},{lat:3.971805989316833,lng:-74.35718536376953},{lat:3.9216284868335847,lng:-74.35907363891602},{lat:3.8515804591584386,lng:-74.38774108886719},{lat:3.802252220855635,lng:-74.41263198852539},{lat:3.783068252791275,lng:-74.43134307861328},{lat:3.7599441555281086,lng:-74.43357467651367},{lat:3.729111072407763,lng:-74.45314407348633},{lat:3.7875217118824356,lng:-74.45383071899414},{lat:3.78529498519966,lng:-74.48369979858398},{lat:3.807048146256101,lng:-74.49588775634766},{lat:3.833767812111052,lng:-74.54120635986328},{lat:3.9526258686839406,lng:-74.51751708984375},{lat:3.962900988618503,lng:-74.53262329101562},{lat:4.020439291914029,lng:-74.52472686767578},{lat:4.0457822596518875,lng:-74.52884674072266},{lat:4.074720219184937,lng:-74.5089340209961},{lat:4.112218155390976,lng:-74.47528839111328},{lat:4.178648513208112,lng:-74.48335647583008},{lat:4.222989363035487,lng:-74.51253890991211},{lat:4.27126493527326,lng:-74.56798553466797},{lat:4.250380129451251,lng:-74.61793899536133},{lat:4.222475776911008,lng:-74.62703704833984},{lat:4.200733653073474,lng:-74.65072631835938},{lat:4.215970323262111,lng:-74.65810775756836},{lat:4.210149608051278,lng:-74.69827651977539},{lat:4.241991810325095,lng:-74.7260856628418},{lat:4.253975095433289,lng:-74.76436614990234},{lat:4.288554385450437,lng:-74.78925704956055},{lat:4.27913938673954,lng:-74.8359489440918},{lat:4.265444636579103,lng:-74.87800598144531},{lat:4.2846172182703235,lng:-74.88521575927734},{lat:4.327753766452325,lng:-74.86804962158203},{lat:4.401182938278336,lng:-74.83663558959961},{lat:4.4465376735920294,lng:-74.81672286987305},{lat:4.515334612374211,lng:-74.7897720336914},{lat:4.583098354042865,lng:-74.81225967407227},{lat:4.6530799182740505,lng:-74.78702545166016},{lat:4.719975106907172,lng:-74.81689453125},{lat:4.749400109650021,lng:-74.77655410766602},{lat:4.7880612848497766,lng:-74.74325180053711},{lat:4.84006224802012,lng:-74.76573944091797},{lat:4.8872701890183246,lng:-74.75509643554688},{lat:4.891888179092694,lng:-74.73209381103516},{lat:4.936014028955286,lng:-74.73243713378906},{lat:4.957049739866833,lng:-74.74960327148438},{lat:4.9784268085876136,lng:-74.73398208618164},{lat:4.979452890435612,lng:-74.70823287963867},{lat:4.996212000417648,lng:-74.72333908081055},{lat:5.001513262382705,lng:-74.74273681640625},{lat:5.067518914980187,lng:-74.72574234008789},{lat:5.120010829316149,lng:-74.71424102783203},{lat:5.132491987592025,lng:-74.73054885864258},{lat:5.180191693391836,lng:-74.71475601196289},{lat:5.201732318002758,lng:-74.73552703857422},{lat:5.2892548590694135,lng:-74.7344970703125},{lat:5.318825118025178,lng:-74.71303939819336},{lat:5.352837704610002,lng:-74.70342636108398},{lat:5.41966093399535,lng:-74.6714973449707},{lat:5.481179622904034,lng:-74.66428756713867},{lat:5.453155224116054,lng:-74.67098236083984},{lat:5.453155224116054,lng:-74.67098236083984},{lat:5.513474402007618,lng:-74.66926574707031},{lat:5.56644086562974,lng:-74.64231491088867},{lat:5.650835609588874,lng:-74.63321685791016},{lat:5.707547445489985,lng:-74.63184356689453},{lat:5.710792833178387,lng:-74.65141296386719},{lat:5.748540463122795,lng:-74.65621948242188},{lat:5.763570497636485,lng:-74.62514877319336},{lat:5.747344875139664,lng:-74.58944320678711},{lat:5.761008588041726,lng:-74.55322265625},{lat:5.791750738958581,lng:-74.5286750793457},{lat:5.772451694682283,lng:-74.48816299438477},{lat:5.7616917650638975,lng:-74.43906784057617},{lat:5.784236145114172,lng:-74.39031600952148},{lat:5.824198971989727,lng:-74.34551239013672},{lat:5.837690054630969,lng:-74.33246612548828},{lat:5.7980697518664925,lng:-74.30328369140625},{lat:5.761179382374327,lng:-74.29555892944336},{lat:5.737438478159828,lng:-74.29384231567383},{lat:5.70942635639172,lng:-74.30379867553711},{lat:5.695761409444441,lng:-74.2782211303711},{lat:5.664501622284635,lng:-74.28783416748047},{lat:5.639731736748836,lng:-74.30517196655273},{lat:5.622306769601719,lng:-74.31581497192383},{lat:5.580963096588942,lng:-74.29933547973633},{lat:5.559435896504681,lng:-74.2620849609375},{lat:5.539274788807716,lng:-74.23942565917969},{lat:5.498779640389541,lng:-74.25453186035156},{lat:5.477078573369839,lng:-74.24371719360352},{lat:5.499463125726769,lng:-74.20955657958984},{lat:5.462553796709912,lng:-74.1796875},{lat:5.4456362600597075,lng:-74.1493034362793},{lat:5.460844976287743,lng:-74.11273956298828},{lat:5.375055961461577,lng:-74.05763626098633},{lat:5.358648711419927,lng:-74.02776718139648},{lat:5.368219660922739,lng:-74.00218963623047},{lat:5.418464674921593,lng:-73.97180557250977},{lat:5.418635569220045,lng:-73.9211654663086},{lat:5.448199553835096,lng:-73.90262603759766},{lat:5.492969983342331,lng:-73.90090942382812},{lat:5.535003279275918,lng:-73.86898040771484},{lat:5.533978112395475,lng:-73.85679244995117},{lat:5.552601699947127,lng:-73.82160186767578},{lat:5.571224699025414,lng:-73.8058090209961},{lat:5.554651967239914,lng:-73.79053115844727},{lat:5.497925282614232,lng:-73.78263473510742},{lat:5.4873311443853465,lng:-73.76684188842773},{lat:5.489894259614419,lng:-73.74778747558594},{lat:5.470243428275642,lng:-73.74126434326172},{lat:5.477762083580723,lng:-73.7179183959961},{lat:5.458965268196007,lng:-73.71740341186523},{lat:5.44461093948821,lng:-73.69697570800781},{lat:5.458452619511726,lng:-73.67774963378906},{lat:5.434015857904097,lng:-73.67843627929688},{lat:5.429230921236508,lng:-73.663330078125},{lat:5.415388569283311,lng:-73.64908218383789},{lat:5.402571294035965,lng:-73.61457824707031},{lat:5.391804573239835,lng:-73.59174728393555},{lat:5.365143300667811,lng:-73.60050201416016},{lat:5.31694497036258,lng:-73.59569549560547},{lat:5.297801322198899,lng:-73.55260848999023},{lat:5.2311357895040524,lng:-73.5179328918457},{lat:5.197116531831264,lng:-73.52119445800781},{lat:5.188226774304145,lng:-73.5069465637207},{lat:5.164634118831095,lng:-73.50780487060547},{lat:5.153179396739667,lng:-73.48325729370117},{lat:5.103425899720175,lng:-73.49355697631836},{lat:5.063073149183769,lng:-73.48119735717773},{lat:5.031780934522874,lng:-73.51741790771484},{lat:5.004762401727689,lng:-73.51638793945312},{lat:4.927633763052513,lng:-73.54934692382812},{lat:4.880599702731665,lng:-73.51724624633789},{lat:4.885217738767671,lng:-73.43330383300781},{lat:4.88316528223298,lng:-73.40240478515625},{lat:4.851009311449035,lng:-73.39193344116211},{lat:4.82586501141037,lng:-73.3641242980957},{lat:4.802601427838915,lng:-73.3718490600586},{lat:4.755900813294237,lng:-73.30781936645508},{lat:4.735200991337153,lng:-73.31090927124023},{lat:4.721856975907261,lng:-73.28155517578125},{lat:4.742215050120443,lng:-73.26730728149414},{lat:4.731095167820164,lng:-73.2187271118164},{lat:4.692772976897327,lng:-73.23400497436523},{lat:4.679770326056327,lng:-73.20602416992188},{lat:4.654619777055395,lng:-73.15109252929688},{lat:4.674295453397662,lng:-73.11727523803711},{lat:4.655988537587979,lng:-73.09976577758789},{lat:4.6784016119044995,lng:-73.09101104736328},{lat:4.718264312478484,lng:-73.0759048461914},{lat:4.742043976363022,lng:-73.06818008422852}];

        var polyCun = new google.maps.Polygon({
            paths: cundinamarca,
            strokeColor: '#FF7586',
            strokeOpacity: 1,
            strokeWeight: 1.1,
            fillColor: '#FF3A2B',
            fillOpacity: 0.05
        });
        polyCun.setMap(map);
    }
}

google.maps.event.addDomListener(window, 'load', initMapX);

function fromLatLngToPoint(latLng) {

    var scale = Math.pow(2, map.getZoom());
    var nw = new google.maps.LatLng(map.getBounds().getNorthEast().lat(), map.getBounds().getSouthWest().lng());
    var worldCoordinateNW = map.getProjection().fromLatLngToPoint(nw);
    var worldCoordinate = map.getProjection().fromLatLngToPoint(latLng);

    return new google.maps.Point(Math.floor((worldCoordinate.x - worldCoordinateNW.x) * scale), Math.floor((worldCoordinate.y - worldCoordinateNW.y) * scale));
}

function offsetMap() {

    if (bounds !== false) {

        var topRightCorner = new google.maps.LatLng(map.getBounds().getNorthEast().lat(), map.getBounds().getNorthEast().lng());
        var topRightPoint = fromLatLngToPoint(topRightCorner).x;
        var leftCoords = bounds.getSouthWest();
        var leftMost = fromLatLngToPoint(leftCoords).x;
        var rightMost = fromLatLngToPoint(bounds.getNorthEast()).x;
        var leftOffset = (overlayWidth - leftMost);
        var rightOffset = ((topRightPoint - rightMargin) - rightMost);

        if (leftOffset >= 0) {

            if (leftOffset < rightOffset) {
                var mapOffset = Math.round((rightOffset - leftOffset) / 2);
                map.panBy(-mapOffset, 0);
                var newLeftPoint = fromLatLngToPoint(leftCoords).x;

                if (newLeftPoint <= overlayWidth) {
                    offsetMap();
                }

            } else {
                map.setZoom(map.getZoom() - 1);
                offsetMap();
            }
        }
    }
}

function displayMarkers(){
   var bounds = new google.maps.LatLngBounds();
   for (var i = 0; i < markersData.length; i++){

      var latlng = new google.maps.LatLng(markersData[i].lat, markersData[i].lng);
      var tit = markersData[i].tit;
      var des = markersData[i].des;

      createMarker(latlng, tit, des);
      bounds.extend(latlng);  
   }

   map.fitBounds(bounds);
   offsetMap();
}

function addMarkers() {

    for (var i = 0; i < 2; i++) {
        var lat = baseLat + (Math.random() - 0.10);
        var lng = baseLng + (Math.random() - 0.1);
        var latLng = new google.maps.LatLng(lat, lng);
        var marker = new google.maps.Marker({
            position: latLng,
            animation: google.maps.Animation.DROP,
            map: map
        });
        markers.push(marker);
        bounds.extend(latLng);
    }

    map.fitBounds(bounds);
    offsetMap();
}

function createMarker(latlng, tit, des) {
    var marker = new google.maps.Marker({
        map: map,
        icon: "img/hm.png",
        position: latlng,
        title: tit
    });

    google.maps.event.addListener(marker, 'click', function() {

        var iwContent = '<div id="iw_container">' +
            '<div class="iw_title">' + tit + '</div>' +
            '<div class="iw_content">' + des + '</div></div>';
        infoWindow.setContent(iwContent);
        infoWindow.open(map, marker);
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

    var call = new ajax();
    var decPos = new parseLoc();
    var Municipios = new Array();
    var data = {};
    var method = "post";
    var rootUrl = "api.php";

    this.getInstituciones = function(id) {

        $("#lista_instituciones option:gt(0)").remove();
        url = rootUrl + '?type=getInstituciones&municipio=' + id;

        $('#lista_instituciones').find("option:eq(0)").html("Cargando...");
        $('#lista_instituciones').css({"color":"green"});

        call.send(data, url, method, function(data) {
            $('#lista_instituciones').find("option:eq(0)").html("Toda la provincia");
            if (data.tp == 1) {
                for (i = 0; i < data['result'].length; i++) {
                    var option = "<option value='" + data['result'][i].split(",")[1] + "'>" + data['result'][i].split(",")[0] + "</option>";
                    $('#lista_instituciones').append(option);
                }
                $("#lista_instituciones").prop("disabled", false);
            } else {
                alert(data.msg);
            }
            $('.st').css({"color":"black"});
        });
    };

    this.getRedes = function(lista) {
        $(lista + " option:gt(0)").remove();
        var url = rootUrl + '?type=getRedes';
        $(lista).find("option:eq(0)").html("Cargando...");

        call.send(data, url, method, function(data) {
            $(lista).find("option:eq(0)").html("Selecione una Red");
            if (data.tp == 1) {
                $.each(data['result'], function(key, val) {
                    var option = $('<option />');
                    option.attr('value', key).text(val);
                    $(lista).append(option);
                });
                $(lista).prop("disabled", false);
            } else {
                alert(data.msg);
            }
        });
    };

    this.getMunicipios = function(id) {
        $("#lista_municipios option:gt(0)").remove();
        var url = rootUrl + '?type=getMunicipios&proId=' + id;
        $('#lista_municipios').find("option:eq(0)").html("Cargando...");
        $('#lista_municipios').css({"color":"green"});

        Municipios.length = 0;
        call.send(data, url, method, function(data) {
            $('#lista_municipios').find("option:eq(0)").html("Toda la provincia");
            if (data.tp == 1) {
                for (i = 0; i < data['result'].length; i++) {
                    var option = "<option value='" + data['result'][i].split(",")[1] + "'>" + data['result'][i].split(",")[0] + "</option>";
                    $('#lista_municipios').append(option);
                    Municipios.push(data['result'][i].split(",")[1]);
                }
                $("#lista_municipios").prop("disabled", false);
            } else {
                alert(data.msg);
            }
            $('.st').css({"color":"black"});
            fillInstituciones(Municipios);
            sacar(Municipios)
        });
    };

    this.getMunicipiosAll = function() {

        $("#lista_municipios option:gt(0)").remove();
        var url = rootUrl + '?type=getMunicipiosAll';
        $('#lista_municipios').find("option:eq(0)").html("Cargando...");
        $('#lista_municipios').css({"color":"green"});

        call.send(data, url, method, function(data) {
            $('#lista_municipios').find("option:eq(0)").html("Todos");
            if (data.tp == 1) {
                for (i = 0; i < data['result'].length; i++) {
                    var option = "<option value='" + data['result'][i].split(",")[1] + "'>" + data['result'][i].split(",")[0] + "</option>";
                    $('#lista_municipios').append(option);
                }
                $("#lista_municipios").prop("disabled", false);
            } else {
                alert(data.msg);
            }
            $('.st').css({"color":"black"});
        });
    };

    this.getMunicipioLoc = function(id) {
        var url = rootUrl + '?type=getCoordenadas&idMunicipio=' + id;
        call.send(data, url, method, function(data) {
            if (data.tp == 1) {
                locat = data['result'];
                latLonObj = decPos.getLatLon(String(locat));
                console.info(latLonObj);
                //------------initMap(latLonObj);
                fillMap(latLonObj);
            } else {
                alert(data.msg);
            }
        });
    };

    this.getProvincias = function() {
        $("#lista_provincias option:gt(0)").remove();
        var url = rootUrl + '?type=getProvincias';
        $('#lista_provincias').find("option:eq(0)").html("Cargando...");
        $('#lista_provincias').css({"color":"green"});
        call.send(data, url, method, function(data) {
            $('#lista_provincias').find("option:eq(0)").html("Todo Cundinamarca");
            if (data.tp == 1) {
                for (i = 0; i < data['result'].length; i++) {
                    var option = "<option value='" + data['result'][i].split(",")[1] + "'>" + data['result'][i].split(",")[0] + "</option>";
                    $('#lista_provincias').append(option);
                }
                $("#lista_provincias").prop("disabled", false);
            } else {
                alert(data.msg);
            }
            $('.st').css({"color":"black"});
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

        if (!m1) throw 'pe';

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
                decDeg2.latLon = 'lng';
            } else {
                throw 'pe';
            }
        }

        if (typeof decDeg2.latLon === 'undefined') {
            decDeg2.latLon = decDeg1.latLon === 'lat' ? 'lng' : 'lat';
        }

        result[decDeg1.latLon] = decDeg1.decDeg;
        result[decDeg2.latLon] = decDeg2.decDeg;
        return result;
    };
}

function decDegMatch(m) {
    //console.log(m);
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
        "E": "lng",
        "W": "lng"
    };
    var degrees, minutes, seconds, sign, latLon;
    var deg, min, sec;

    sign = signIndex[m[2]] || signIndex[m[1]] || signIndex[m[6]] || 1;
    degrees = Number(m[3]);
    minutes = m[4] ? Number(m[4]) : 0;
    seconds = m[5] ? Number(m[5]) : 0;
    latLon = latLonIndex[m[1]] || latLonIndex[m[6]];

    if (!inRange(degrees, 0, 180)) throw 'DO';
    if (!inRange(minutes, 0, 60)) throw 'MO';
    if (!inRange(seconds, 0, 60)) throw 'SO';

    return {
        decDeg: sign * (degrees + minutes / 60 + seconds / 3600),
        latLon: latLon
    };
}

function inRange(value, a, b) {
    return value >= a && value <= b;
}

$('.menu, .titu').on('click', function() {
    $('.form-options').toggleClass('ocultar');
    $('.menu').toggleClass('claro');
    $('.titu').toggleClass('titclaro');
});

function fillInstituciones(data) {
    var loc = new locationMap();
    var arrInstituciones = data;
    //console.warn(arrInstituciones.length);
    for (var i = arrInstituciones.length - 1; i >= 0; i--) {
        //console.info(arrInstituciones[i]);
        loc.getInstituciones(arrInstituciones[i]);
    };
}

function fillMap(data) {
    //objeto concatenado
    //console.info(data);
}

function sacar(data) {
    //console.warn(data);
    var loc = new locationMap();
    var arrUbicacion = data;
    for (var i = arrUbicacion.length - 1; i >= 0; i--) {
        loc.getMunicipioLoc(arrUbicacion[i]);
    };
};

$(function() {
    var loc = new locationMap();
    //--loc.getInstituciones(32);
    loc.getMunicipiosAll();
    loc.getProvincias();
    loc.getRedes("#lista_redes");
    loc.getRedes("#lista_redes2");
    loc.getRedes("#lista_redes3");
    loc.getRedes("#lista_redes4");
    loc.getRedes("#lista_redes5");
    var pro = '';
    //------------------$("#filter").prop("disabled", true);
    // $("#Lista_instituciones").prop("disabled", true);

    $("#lista_provincias").on("change", function() {
        pro = $(this).val();
        if (pro != '') {
            loc.getMunicipios(pro);
        } else {
            $("#lista_municipios option:gt(0)").remove();
        }
        if ($("#lista_provincias")[0].selectedIndex == 0) {
            loc.getMunicipiosAll();
        }
    });

    $("#lista_municipios").on("change", function() {
        if ($("#lista_municipios")[0].selectedIndex == 0) {
            //-----------$("#filter").prop("disabled", true);
        } else {
            //-----------$("#filter").prop("disabled", false);
            idMunicipio = $("#lista_municipios").val();
            var arrInstitucion = new Array();
            arrInstitucion.push(idMunicipio);
            fillInstituciones(arrInstitucion);
        }
    });

    $("#filter").on("click", function() {
        console.info("asdasd");
        if ($(window).width() <= 600) {
            $(".menu").trigger("click");
        }

        if ($("#lista_municipios").selectedIndex == 0) {

        } else {
            idMunicipio = $("#lista_municipios").val();
            console.warn(idMunicipio);
            loc.getMunicipioLoc(idMunicipio);
        };

    });

    $("#clean").on("click", function() {
        $("#lista_provincias option:gt(0)").remove();
        loc.getProvincias();
        $("#lista_municipios option:gt(0)").remove();
        loc.getMunicipiosAll();
        $("#lista_redes option:gt(0)").remove();
        loc.getRedes();
        initMapX();
    });
});

$("#lista_redes").on("change", function() {
    if ($("#lista_redes")[0].selectedIndex == 0) {
        $('#div_red2').hide();
        $('#div_red3').hide();
        $('#div_red4').hide();
        $('#div_red5').hide();
    } else {
        $('#div_red2').show();
    }
});

$("#lista_redes2").on("change", function() {
    if ($("#lista_redes2")[0].selectedIndex == 0) {
        $('#div_red3').hide();
        $('#div_red4').hide();
        $('#div_red5').hide();
    } else {
        $('#div_red3').show();
    }
});

$("#lista_redes3").on("change", function() {
    if ($("#lista_redes3")[0].selectedIndex == 0) {
        $('#div_red4').hide();
        $('#div_red5').hide();
    } else {
        $('#div_red4').show();
    }
});

$("#lista_redes4").on("change", function() {
    if ($("#lista_redes4")[0].selectedIndex == 0) {
        $('#div_red5').hide();
    } else {
        $('#div_red5').show();
    }
});
