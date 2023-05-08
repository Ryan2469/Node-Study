"use strict"

const viewsPort = {

    hello: (req, res) => {
        res.render("home/index")
    },

    login: (req, res) => {
        res.render("home/login")
    }
};

const api = {
    login: (req, res) => {
        console.log(req.body);
    }
};


module.exports = {
    viewsPort,
    api
}