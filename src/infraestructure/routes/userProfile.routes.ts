import { Router } from "express";
import { controllersHandler } from "../controllers/controllers.handler";


const userProfileRouter = Router();
const controller = new controllersHandler().getUserProfileController()
const middlewaresController = new controllersHandler().getMiddleWaresController()


//UserProfiles routes
userProfileRouter.post("/userProfile", controller.insert);
userProfileRouter.get("/userProfile/:id",middlewaresController.auth, controller.findOne);
userProfileRouter.get("/userProfile", middlewaresController.auth, controller.findAll);
userProfileRouter.delete("/userProfile/:id",middlewaresController.auth, controller.delete);
userProfileRouter.put("/userProfile/:id",middlewaresController.auth, controller.update);


export default userProfileRouter;