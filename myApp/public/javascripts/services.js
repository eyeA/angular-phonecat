angular.module('myApp.services',[])

.factory('Hitservice',['$q','$http', function($q,$http){
	var service = {
		count:function(){
			var d = $q.defer();
			$http.get('/hits')
				.success(function(data,status){
					d.resolve(data.hits);
				}).error(function(data,status){
					d.reject(data);
				});
			return d.promise;
		},
		registerHit:function(){
			var d = $q.defer();
			$http.post('/hits')
				.success(function(data,status){
					d.resolve(data.hits);
				}).error(function(data,status){
					d.reject(data);
				});
			return d.promise;
		}
	}
	return service;
}]);
// 这段服务暴露了两种调用前文定义过的 路由的方法count registerHit