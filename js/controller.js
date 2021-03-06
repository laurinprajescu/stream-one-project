angular.module('RouteControllers', [])

    .controller('HomeController', function($scope) {
    })

    .controller('CalcController', function($scope) {
        $scope.result = function() {
            if ($scope.value <= 300 && $scope.value > 0) {
                return 300; 
            } else {
                return $scope.value * 1.45;
    			}
    	  	};
    })
    
    .controller('CareersController', function($scope, JobsAPIService) {
        JobsAPIService.getJobs().then(function(response) {
            $scope.jobs = response.data;
            });
    })

    .controller('ContactUsController', function ($scope) {
        $scope.submitForm = function() {
            if ($scope.contactForm.$valid) { 
                $scope.name = "";
                $scope.email = "";
                $scope.message = "";
                $scope.collectFormData
            alert("Thank You ! We will contact you shortly !");
            }
        };
        
        var latlng = new google.maps.LatLng(51.457567, 0.201084);
        var options = {
            zoom: 11,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            navigationControl: true,
            mapTypeControl: false,
            scrollwheel: false,
            disableDoubleClickZoom: true
        };
        var map = new google.maps.Map(document.getElementById('googleMap'), options);
        $scope.map = map;
        console.log (map);
        var marker1 = new google.maps.Marker({
            position: latlng,
            map: map
        });
        google.maps.event.addListener(marker1, 'click', function () {
            infowindow.open(map, marker1);
        });
    });   