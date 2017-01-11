let angular = require('angular'),
    ngRoute = require('angular-route'),
    HeaderCtrl = require('../controller/headerctrl'),
    IndexCtrl = require('../controller/indexctrl'),
    LoginCtrl = require('../controller/loginctrl'),
    RegisterCtrl = require('../controller/registerctrl'),
    NotFoundCtrl = require('../controller/notfoundctrl'),
    {
        LoginFactory,
        RegisterFactory,
        isLoggedInFactory,
        LogoutFactory
    } = require('../factory/authfactory'),
    TodoFactory = require('../factory/todofactory'),
    ListsCtrl = require('../controller/listsctrl');

module.exports = (ngApp, jQuery) => {
    ngApp.run(
        [
            '$rootScope',
            ($rootScope) =>
                $rootScope.$on(
                    '$routeChangeStart',
                    (next, last) => {
                        if ($rootScope.clearFlash)
                            $rootScope.flash = {};
                        if (0 < Object.keys($rootScope.flash).length)
                            $rootScope.clearFlash = true;
                    }
                )
        ])
        .config(
        [
            '$routeProvider',
            //'$locationProvider',
            ($routeProvider) => {
                $routeProvider.when(
                    '/',
                    {
                        templateUrl: 'views/index.html',
                        controller: 'IndexCtrl',
                        controllerAs: 'indexctrl'
                    }
                ).when(
                    '/login',
                    {
                        templateUrl: 'views/login.html',
                        controller: 'LoginCtrl',
                        controllerAs: 'loginctrl'
                    }
                ).when(
                    '/lists',
                    {
                        templateUrl: 'views/lists.html',
                        controller: 'ListsCtrl',
                        controllerAs: 'lists'
                    }
                ).when(
                    '/register',
                    {
                        templateUrl: 'views/register.html',
                        controller: 'RegisterCtrl',
                        controllerAs: 'registerctrl'
                    }
                ).otherwise(
                    {
                        templateUrl: 'views/notfound.html',
                        controller: 'NotFoundCtrl',
                        controllerAs: 'notfoundctrl'
                    }
                );
            }
        ]
    )
    .controller('HeaderCtrl', ['$scope', 'isloggedin', 'logout', '$location', HeaderCtrl])
    .controller('IndexCtrl', ['$scope', IndexCtrl])
    .controller('LoginCtrl', ['$scope', 'login', '$location', LoginCtrl])
    .controller('RegisterCtrl', ['$scope', 'register', '$location', RegisterCtrl])
    .controller('NotFoundCtrl', ['$scope', NotFoundCtrl])
    .controller('ListsCtrl', ['$scope', 'todo', ListsCtrl])

    .factory('jQuery', () => jQuery)
    .factory('login', ['$http', LoginFactory])
    .factory('register', ['$http', RegisterFactory])
    .factory('isloggedin', ['$http', isLoggedInFactory])
    .factory('logout', ['$http', LogoutFactory])
    .factory('todo', ['$http', TodoFactory])
};
