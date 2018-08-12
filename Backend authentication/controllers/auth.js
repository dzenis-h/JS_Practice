const User = require('../models/user');
const bcrypt = require('bcrypt-nodejs');
const jwt = require('jwt-simple'); 
const config = require('../config');

function tokenX (user) {
    const timestamp = new Date().getTime();
    return jwt.encode({ sub: user.id, iat: timestamp}, config.secret);
}

exports.singin = function(req, res, next) {
    res.send({ token: tokenX(req.user) });
}

exports.singup = function (req, res, next) {

    const email = req.body.email;
    const password = req.body.password;

    if(!email || !password) {
        res.status(422).send( {Error: 'Email and password must be provided'} );
    }

    User.findOne( {email: email}, function(err, match) {
        if (err) { return res.next(err)}

        if (match) {
            res.status(422).send({ Info: 'Email is already in use'});
        }

        const user = new User({
            email: email,
            password: password
        });

        user.save(function(err){
            if(err) {res.send(next(err))}

        res.json({ token: tokenX(user) });
        });
    });
}