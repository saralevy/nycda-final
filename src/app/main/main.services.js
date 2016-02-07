angular.module('MyServicesModule', ['ngResource'])

//	return $resource('http://finance.yahoo.com/webservice/v1/symbols/:stock/quote?format=json', {
.factory('MyResource', function($resource) {
	return $resource('tempData.json', {
		stock: 'AAPL' 
	}, {
		getStockValue: {
			method: 'GET',
			isArray: true,
			headers: {
				Accept: "application/json"
			}
		}
	});
});

//	return $resource('https://www.google.com/search?q=:stock', {   change isArray, remove json
.factory('newsResource', function($resource) {
	return $resource('tempData.json', {
		stock: 'AAPL' 
	},{
		getNewsValue: {
			method: 'GET',
			isArray: true,
			headers: {
				Accept: "application/json"
			}
		}
	});
});

//	return $resource('https://twitter.com/search?f=tweets&vertical=news&q=:stock', { change isArray, remove json
.factory('twitterResource', function($resource) {
	return $resource('tempData.json', {
		stock: 'AAPL' 
	},{
		getTwitterValue: {
			method: 'GET',
			isArray: true,
			headers: {
				Accept: "application/json"
			}
		}
	});
});