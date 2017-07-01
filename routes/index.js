// var express = require('express');
var router = require('express').Router();

router.get('/', (req, res) => {
    res.render('index.html');
});

module.exports = router;
