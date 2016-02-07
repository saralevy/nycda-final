angular.module('MyServicesModule', ['ngResource'])

.factory('MyResource', function($resource) {
	return $resource('tempData.json', {
		stock: 'AAPL' 
	},{
		getStockValue: {
			method: 'GET',
			isArray: true,
			headers: {
				Accept: "application/json"
			}
		}
	});
})

.factory('twitterResource', function($resource) {
	return $resource('tempData.json', {
		stock: 'AAPL' 
	}, {
		getTwitterValue: {
			method: 'GET',
			isArray: true,
			headers: {
				Accept: "application/json"
			}
		}
	});
})

.factory('newsResource', function($resource) {
	return $resource('tempData.json', {
		stock: 'AAPL' 
	}, {
		getNewsValue: {
			method: 'GET',
			isArray: true,
			headers: {
				Accept: "application/json"
			}
		}
	});
})