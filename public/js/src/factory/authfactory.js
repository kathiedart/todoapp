module.exports.LoginFactory = function LoginFactory($http) {
    return (username, password) => new Promise((res, rej) => {
        $http.post(
            '/login',
            {
                username,
                password
            }
        ).then((response) => {

            if (200 == response.status)
                return res({
                    isLoggedIn: true,
                    username
                });
            else
                return res({
                    error: response.status
                });
        }).catch((err) => {
            if (401 == err.status)
                return res({invalid: true});
            else
                return res({error: true});
        });
    });
};

module.exports.RegisterFactory = function RegisterFactory($http) {
    return (username, password) => new Promise((res, rej) => {
        $http.post(
            '/register',
            {
                username,
                password
            }
        ).then((response) => res({
            success: true,
            username
        }))
        .catch((err) => res({error: true}));
    });
};

module.exports.isLoggedInFactory = function isLoggedInFactory($http) {
    return () => new Promise((res, rej) => {
        $http.get('/status').then((status) => res(status.data))
            .catch((err) => { console.log(err); rej(err); });
    });
}

module.exports.LogoutFactory = function LogoutFactory($http) {
   return () => $http.get('/logout').catch((err) => console.log(err));
}
