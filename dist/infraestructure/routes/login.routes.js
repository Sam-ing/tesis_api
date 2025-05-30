"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_handler_1 = require("../controllers/controllers.handler");
const loginRouter = (0, express_1.Router)();
const controller = new controllers_handler_1.controllersHandler().getMiddleWaresController();
//UserProfiles routes
loginRouter.post("/login", controller.login, controller.sendToken);
exports.default = loginRouter;
