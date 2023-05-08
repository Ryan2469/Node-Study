"use strict";

const express = require('express');
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.viewsPort.hello);

router.get("/login", ctrl.viewsPort.login);

router.post("/login", ctrl.api.login);

module.exports = router;