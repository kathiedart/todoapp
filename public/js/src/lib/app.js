let routes = require('./routes');

module.exports = class App
{
    constructor(angular, jQuery, io, config)
    {
        this._angular = angular;
        this._jQuery = jQuery;
    }

    start()
    {
        this._ngApp = this._angular.module('todoapp', ['ngRoute']);
        routes(this._ngApp, this._jQuery);
    }
}
