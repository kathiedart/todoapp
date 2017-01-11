module.exports = function($scope, todo, jQuery) {
    $scope.textbox = '';
    
    $scope.availableTodos = 0;
    $scope.todos = [];
    
    let refresh = () => {
        $scope.textbox = '';
        todo.get().then((result) => {
            $scope.todos = result.data;
            $scope.availableTodos = result.data.length;
            //$scope.$apply();
        }).catch((err) => console.log(err));
    };
    

    $scope.delete = (id) => todo.delete(id).then(refresh).catch((err) => console.log(err));
    
    $scope.post = () => todo.post($scope.textbox).then(refresh).catch((err) => console.log(err));
    
    refresh();
};
