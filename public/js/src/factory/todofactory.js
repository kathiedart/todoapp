module.exports = function TodoFactory($http) {
    return {
        get: () => $http.get('/todo'),
        post: (todo) => $http.post('/todo', {todo}),
        'delete': (id) => $http.delete(`/todo/${id}`)
    }
};
