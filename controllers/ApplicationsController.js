const Application = require('../models/application');

exports.store = (req, res) => {
    Application.create({
        'name': req.body.name,
        'phone': req.body.phone,
        'message': req.body.message
    }).then(function () {
        req.flash('form', req.body.firstName + ', you are a hero');
        res.redirect('/');
    });
};

exports.normalizeData = (req, res, next) => {
    const nameArr = req.body.name.split(' ');
    req.body.firstName = nameArr.shift();
    req.body.lastName = nameArr.join(' ');
    next();
}