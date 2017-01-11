module.exports = function($scope, register, $location, jQuery) {
    $scope.username = null;
    $scope.password = null;
    $scope.password2 = null;

    $scope.showError = false;
    $scope.showPasswordMatchError = false;

    $scope.register = () => {
        if ($scope.password !== $scope.password2)
            return $scope.showPasswordMatchError = true;

        register($scope.username, $scope.password).then((result) => {

            // this could probably be better
            if (result.success) {
                $scope.$root.flash.success = 'Successful Registration.';
                $scope.$root.status = {
                    isLoggedIn: true,
                    username: result.username
                };
                $scope.$root.$apply();
               
                $location.path('/lists');
            }

            if (result.error) {
                $scope.showError = true;
            }

            $scope.$apply();
        });
    };
};
