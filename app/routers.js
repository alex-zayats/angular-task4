 var app = angular.module('routers', ['ui.router']);

 app.config(function($stateProvider, $urlRouterProvider) {
     $stateProvider
       .state('dashboard', {
           url: "/dashboard",
           controller: "DashboardCtrl",
           templateUrl: "templates/dashboard.html"
       })

     $urlRouterProvider.otherwise("/dashboard");
 });

 app.config(["$locationProvider", function($locationProvider) {
    $locationProvider.html5Mode({
  		enabled: true,
  		requireBase: true
	});
}]);