//controller productController
coinLectureApp.controller('productController',function($scope, $routeParams, $rootScope){
            $scope.index=$routeParams.id;
            $scope.ID = $rootScope.books[$scope.index].ID;
            $scope.Nom = $rootScope.books[$scope.index].Nom;
            $scope.Auteur = $rootScope.books[$scope.index].Auteur;
            $scope.Prix = $rootScope.books[$scope.index].Prix;
            $scope.LienPhoto = $rootScope.books[$scope.index].LienPhoto;
            $scope.Categorie = $rootScope.books[$scope.index].Categorie;
            $scope.Description = $rootScope.books[$scope.index].Description;
            $scope.Rating = $rootScope.books[$scope.index].Rating;
            $scope.NrPages = $rootScope.books[$scope.index].NrPages;
            $scope.Format = $rootScope.books[$scope.index].Format;
            $scope.Code = $rootScope.books[$scope.index].Code;
});
