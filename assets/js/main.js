//declaration de l'app
var coinLectureApp = angular.module('coinLectureApp',['ngRoute']);
coinLectureApp.run(function($rootScope, $http, $rootScope){
    //je récupère le JSON
    $http.get("assets/json/json.json")
        .then(function (response) {
            // reponse.data renvoie le contenu de json.json dans la variable marques
            $rootScope.books = response.data;
        });
    //je créé mon tableau cartList (panier)
    $rootScope.cartList=[];
    $rootScope.articleCount = 0;
});
//config des routes
coinLectureApp.config(function($routeProvider){
    $routeProvider
    .when('/home:cat?',{
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
coinLectureApp.filter('euroFormat', function () {
    return function (input) {
        return input+' \u20AC';
    };
});
