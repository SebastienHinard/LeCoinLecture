//declaration de l'app
var coinLectureApp = angular.module('coinLectureApp',['ngRoute']);
coinLectureApp.run(function($rootScope){
    // $rootScope.books;
});
//config des routes
coinLectureApp.config(function($routeProvider){
    $routeProvider
    .when('/home',{
        controller: 'homeController',
        templateUrl : 'assets/partials/home.html'
    })
    // dans cette route, on récupère un paramêtre : id
    .when('/category',{
        controller: 'categoryController',
        templateUrl: 'assets/partials/category.html'
    })
    .when('/cart',{
        controller: 'cartController',
        templateUrl: 'assets/partials/cart.html'
    })
    .when('/product/:id?',{
        controller: 'productController',
        templateUrl: 'assets/partials/product.html'
    })
    .otherwise({
        redirectTo: '/home'
    });
});
