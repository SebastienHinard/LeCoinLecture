//controller productController
coinLectureApp.controller('productController',function($scope, $http, $routeParams, $rootScope){
    $http.get("assets/json/json.json")
        .then(function (response) {
            // reponse.data renvoie le contenu de json.json dans la variable marques
            $scope.books = response.data;
            // $scope.index=JSON.parse($routeParams.id);
            $scope.index=$routeParams.id;
            $scope.ID = $scope.books[$scope.index].ID;
            $scope.Nom = $scope.books[$scope.index].Nom;
            $scope.Auteur = $scope.books[$scope.index].Auteur;
            $scope.Prix = $scope.books[$scope.index].Prix;
            $scope.Categorie = $scope.books[$scope.index].Categorie;
            $scope.Description = $scope.books[$scope.index].Description;
           });

});