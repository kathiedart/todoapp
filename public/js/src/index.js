let angular = require('angular'),
    jQuery = require('jquery'),
    App = require('./lib/app'),
    
    app = new App(angular, jQuery);
app.start();
