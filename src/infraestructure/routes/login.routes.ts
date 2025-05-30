import { Router } from "express";
import { controllersHandler } from "../controllers/controllers.handler";

const loginRouter = Router();
const controller = new controllersHandler().getMiddleWaresController()


//UserProfiles routes
loginRouter.post("/login", controller.login, controller.sendToken);



export default loginRouter;