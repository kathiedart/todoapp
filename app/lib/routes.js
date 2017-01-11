let requireLogin = require('./filters'),
    {
        LoginCtrl,
        RegisterCtrl,
        LogoutCtrl,
        StatusCtrl
    } = require('../controller/authctrl'),
    TodoCtrl = require('../controller/todoctrl');
    
module.exports = (app) => {
    app.post('/register', RegisterCtrl);
    app.post('/login', LoginCtrl);
    app.get('/logout', LogoutCtrl);
    app.get('/status', StatusCtrl);
    app.get('/todo', requireLogin, TodoCtrl.get);
    app.delete('/todo/:id', requireLogin, TodoCtrl.delete);
    app.post('/todo', requireLogin, TodoCtrl.post);
};
