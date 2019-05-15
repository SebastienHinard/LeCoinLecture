//controller cartController
coinLectureApp.controller('cartController',function($scope,$rootScope,$window){
    $scope.addQuantity=function(x){
        $rootScope.cartList[x].quantite +=1;
    };
    $scope.removeQuantity=function(x){
        console.log($rootScope.cartList[x].quantite);
        if ($rootScope.cartList[x].quantite > 1 ){
            $rootScope.cartList[x].quantite -=1;
        }
        else{
            if ($window.confirm("Vous allez supprimer cet article de votre panier.\nEtes-vous sur de vouloir continuer?")){
                $rootScope.cartList.splice(x,1);
            }
        }
    };
    $scope.removeArticle=function(x){
        if ($window.confirm("Vous allez supprimer cet article de votre panier.\nEtes-vous sur de vouloir continuer?")){
            $rootScope.cartList.splice(x,1);            
        }
    };
});
