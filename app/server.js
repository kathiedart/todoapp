let express = require('express'),
    http = require('http'),
    sessions = require('client-sessions'),
    bodyParser = require('body-parser'),
    routes = require('./lib/routes'),
    db = require('./lib/db'),
    app = express(),
    server = http.Server(app),
    port = ('undefined' === typeof process.env.PORT)?
        3000:
        process.env.PORT,
    ip = ('undefined' === typeof process.env.IP)?
        '0.0.0.0':
        process.env.IP,
    dbhost = ('undefined' === typeof process.env.DBHOST)?
        'localhost':
        process.env.DBHOST;

db(dbhost);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/../public'));

app.use(sessions({
    cookieName: 'session',
    secret: 'YouShouldProbablyReplaceThisBecauseItsASecurityRisk',
    duration: 24 * 60 * 60 * 1000,
    activeDuration: 1000 * 60 * 5,
    httpOnly: true,
    ephemeral: false
}));

routes(app);

//process.on('SIGINT', () => {
//    console.log('SIGINT caught, exiting...');
//    server.close(() => process.exit());
//});

server.listen(
    port,
    ip,
    () => console.log(`Listening on ${port}:${ip}`)
);
