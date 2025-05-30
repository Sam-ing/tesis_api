"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_handler_1 = require("../controllers/controllers.handler");
const userProfileRouter = (0, express_1.Router)();
const controller = new controllers_handler_1.controllersHandler().getUserProfileController();
const middlewaresController = new controllers_handler_1.controllersHandler().getMiddleWaresController();
//UserProfiles routes
userProfileRouter.post("/userProfile", controller.insert);
userProfileRouter.get("/userProfile/:id", middlewaresController.auth, controller.findOne);
userProfileRouter.get("/userProfile", middlewaresController.auth, controller.findAll);
userProfileRouter.delete("/userProfile/:id", middlewaresController.auth, controller.delete);
userProfileRouter.put("/userProfile/:id", middlewaresController.auth, controller.update);
exports.default = userProfileRouter;
