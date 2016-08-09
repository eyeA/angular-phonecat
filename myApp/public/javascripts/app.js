angular.module('myApp',['ngRoute','myApp.services'])

.controller('HomeController',function($scope,Hitservice){
	Hitservice.count()
		.then(function(data){
			$scope.hits = data;
		});


	$scope.registerHit = function(){
		Hitservice.registerHit()
			.then(function(data){
				$scope.hits = data;
			});
	}
});