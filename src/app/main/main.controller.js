(function() {
  'use strict';

  angular
    .module('test')
    .controller('MainController', MainController);

  function MainController($timeout, $interval, $resource, MyResource, newsResource, twitterResource) {
    var self = this;

    self.stock = '';
    self.tickerValue = '';
    self.twitterValue = '';
    
    self.researchSites = {
        ticker: false,
        googleNews: false,
        tweets: false
    };

    var myTimer = 0;
    self.getTickerTape = function() {
      if(self.researchSites.ticker) {
        //start timer, change AAPL to self.stock
        myTimer = $interval(function() {
          MyResource.getStockValue({
              stock: 'AAPL' 
          })
          .$promise
          .then(function onSuccess(response) {
                  self.tickerValue = response;
                  console.log(response);
          }, function onError(error) {
                  console.log("error");
          });
        }, 500 );
      } else {
        $interval.cancel(myTimer);
      }
    }

    var tweetTimer = 0;
    self.getTweets = function() {
      if(self.researchSites.ticker) {
        //start timer, change AAPL to self.stock
        tweetTimer = $interval(function() {
          twitter.Resource.getTwitterValue({
              stock: 'AAPL' 
          })
          .$promise
          .then(function onSuccess(response) {
                  self.twitterValue = response;
                  console.log(response);
          }, function onError(error) {
                  console.log("error");
          });
        }, 500 );
      } else {
        $interval.cancel(tweetTimer);
      }
    }
    
    self.getNews = function() {
      console.log("in getNews");
    }
  }
})();