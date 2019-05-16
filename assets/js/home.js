//controller home
coinLectureApp.controller('homeController', function ($rootScope,$scope, $http, $routeParams, $location) {
    $scope.gotoUrl=function(url){
        $location.path(url);
    };
  $scope.category = $routeParams.cat;
  console.log($scope.category);
  // Lorsque le boutton appelle la fct ajoutPanier
    $scope.ajoutPanier = function(ID) {
        $rootScope.articleCount++;
      // On part du principe que l'article n'est pas dans le panier
      var articlePush = true;
      // On parcourt le panier
      for(var i = 0; i < $rootScope.cartList.length; i++) {
        // Si l'id de l'article parcouru correspond a celui qu'on va ajouter au tableau
        if($rootScope.cartList[i].id == ID){
          // On modifie seulement sa quantitée
          $rootScope.cartList[i].quantite++;
          // On indique qu'il ne faut pas le rajouter à la liste
          articlePush = false;
        }
      }
      // Si on peut l'ajouter à la liste
      if(articlePush) {
        // On créer un objet conportant l'id + la quantitée
        $scope.currentArticle = {"id":ID, "quantite":1}
        // On rajoute l'objet à la fin du tableau
        $rootScope.cartList.push($scope.currentArticle);
      }
      console.log($rootScope.cartList)
    }
});
