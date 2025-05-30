"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_handler_1 = require("../controllers/controllers.handler");
const locationsRouter = (0, express_1.Router)();
const ctrsHandler = new controllers_handler_1.controllersHandler();
const middlewaresController = ctrsHandler.getMiddleWaresController();
const localityController = ctrsHandler.getLocalityController();
const provinceController = ctrsHandler.getProvinceController();
const countryController = ctrsHandler.getCountryController();
//Localities routes
locationsRouter.post("/localities", middlewaresController.auth, localityController.insert);
locationsRouter.get("/localities/:id", middlewaresController.auth, localityController.findOne);
locationsRouter.put("/localities/:id", middlewaresController.auth, localityController.update);
locationsRouter.delete("/localities/:id", middlewaresController.auth, localityController.delete);
locationsRouter.get("/localities", middlewaresController.auth, localityController.findAll);
//Provinces routes
locationsRouter.post("/provinces", middlewaresController.auth, provinceController.insert);
locationsRouter.get("/provinces/:id", middlewaresController.auth, provinceController.findOne);
locationsRouter.put("/provinces/:id", middlewaresController.auth, provinceController.update);
locationsRouter.delete("/provinces/:id", middlewaresController.auth, provinceController.delete);
locationsRouter.get("/provinces", middlewaresController.auth, provinceController.findAll);
locationsRouter.post("/provinces/:id/localities", middlewaresController.auth, provinceController.addLocality);
//Country routes
locationsRouter.post("/countries", middlewaresController.auth, countryController.insert);
locationsRouter.get("/countries/:id", middlewaresController.auth, countryController.findOne);
locationsRouter.delete("/countries/:id", middlewaresController.auth, countryController.delete);
locationsRouter.get("/countries", middlewaresController.auth, countryController.findAll);
locationsRouter.post("/countries/:id/provinces", middlewaresController.auth, countryController.addProvinces);
exports.default = locationsRouter;
