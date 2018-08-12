const auth = require('./controllers/auth');
const passport = require('passport');
const passportService = require('./services/passport');

const requireAuth = passport.authenticate('jwt', {session: false});
const requireSingin = passport.authenticate('local', {session: false});

module.exports = function(app) {
    app.get('/', requireAuth, function(req, res) {
        res.send({hi: 'buddy'});
    });
    app.post('/singin', requireSingin, auth.singin);
    app.post('/singup', auth.singup);
}