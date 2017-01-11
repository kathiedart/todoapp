module.exports = function($scope, isloggedin, logout, $location) {
    $scope.$root.flash = {};
    $scope.$root.status = {
        isLoggedIn: false
    };

    $scope.isActive = (viewLocation) => viewLocation === $location.path();

    $scope.logout = () => logout().then(() => {
        $scope.$root.status.isLoggedIn = false;
        $scope.$root.$apply();
        $location.path('/');
    });
    
    isloggedin().then((res) => {
        $scope.$root.status = res;
        $scope.$apply();
        $scope.$root.$apply();
    });
};
