"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userProfileRouter = (0, express_1.Router)();
userProfileRouter.get("/hello", (_req, res) => res.send("Hello world!"));
exports.default = userProfileRouter;
