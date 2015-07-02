
/**
* Javascript Exercise 3 - AngularJS - Google Maps API v3.
* @ Bin Jiang, 19 June, 2015
* 
**/

// Angular App Module Controller
appMap.controller('mapControl', ['$scope', 'cities', function($scope, cities){ 

    // Define the 'Constant' var for some repeated map settings param. 
    const DEFAULT_MAP_ZOOM_LEVEL = 4;

    // Init Map options.
    var mapOptions = {
        zoom: DEFAULT_MAP_ZOOM_LEVEL,
        center: new google.maps.LatLng(40.0000, -98.0000),  // the center coordination of the map.
        mapTypeId: google.maps.MapTypeId.TERRAIN    // the initial map type. 
    };

    // Instanciate a gMap with options, and binding with the HTML element id. 
    $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // Declare the Markers array.
    $scope.markers = [];
    
    // get a instance of the gMap infoWindow.
    var infoWindow = new google.maps.InfoWindow();
    
    // Create the marker with the options, and add 'click' event listener to the marker. 
    var createMarker = function (info){
        var marker = new google.maps.Marker({
            map: $scope.map,
            position: new google.maps.LatLng(info.lat, info.long),
            title: info.city
        });

        // the HTMl content of the Marker Info.
        marker.content = '<div class="infoWindowContent">' + info.desc + '</div>' +
                         '<iframe width="320" height="240" ' +
                           'src='+ info.video +' frameborder="0" allowfullscreen >'+
                         '</iframe  >';
        
        // Map event listener, Show the infoWindow when the marker been clicked.
        google.maps.event.addListener(marker, 'click', function(){
            infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
            infoWindow.open($scope.map, marker);
        });
        
        // Add each created Map Marker into the Markers array.
        $scope.markers.push(marker);
        
    };  
    
    // load the Cities data from Http AJAX call of the service factory.
    cities.success(function(data) { 
        // Loop thru the data, add each city in the Map, with market and info.
        for (i = 0; i < data.length; i++){
            createMarker(data[i]);
        }
    })
    .error(function(data) {
        console.log( 'gMap error loading JSON city data.' );
        return data;
    });

    // Binding/Trigger the Action of clicking Marker.   
    $scope.openInfoWindow = function(e, selectedMarker){
        e.preventDefault();
        google.maps.event.trigger(selectedMarker, 'click');
    };

    // Function to reset the center point of the map.
    $scope.centerMap = function(map) {
        // var for boundary.
        var bounds = new google.maps.LatLngBounds();

        // Get the center of the map latlong, and the boundary.
        var latlng = new google.maps.LatLng( 39.008549, -95.661386 );
        bounds.extend( latlng );

        // Reset the map center, and zoom level.
        map.setCenter( bounds.getCenter() );
        map.setZoom( DEFAULT_MAP_ZOOM_LEVEL );
    }
}]); 

