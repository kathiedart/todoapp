module.exports = function($scope, login, $location, jQuery) {
    $scope.username = null;
    $scope.password = null;
    $scope.showInvalid = false;
    $scope.showError = false;

    $scope.login = () => {
        login($scope.username, $scope.password).then((result) => {

            $scope.$root.status = result;
            $scope.$root.$apply();

            if (result.isLoggedIn)
                $location.url('/lists');

            if (result.error)
                $scope.showError = true;

            if (result.invalid)
                $scope.showInvalid = true;

            $scope.$apply();
        }).catch((err) => console.log(err));
    };
};
