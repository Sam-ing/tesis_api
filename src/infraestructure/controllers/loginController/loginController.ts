import { Request, Response, NextFunction } from "express";
import { LoginUser } from "../../../application/login/userLogin";
import { HttpResponse } from "../../../helpers/http.response";
import jwt from "jsonwebtoken";


export class MiddleWaresController {

    constructor(
        private useCase:LoginUser, 
        private readonly httpResponse:HttpResponse = new HttpResponse()){}

    
        public login = async (req: Request, res: Response, next: NextFunction) => {
            const { email, password } = req.body;

            try {
                const token = await this.useCase.login(email, password);
                console.log(token)
                if (!token) return res.status(401).json({ message: "Invalid credentials" });

                (req as any).token = token;
                return next();
            } catch (e) {
                console.log(e)
                return this.httpResponse.Ok(res, e);
            }
        };

        public auth = (req: Request, res: Response, next: NextFunction) => {
            const authHeader = req.headers.authorization;

            if (!authHeader) return res.status(401).json({ message: "Token requerido" });

            const token = authHeader.split(" ")[1]; // Remueve "Bearer"

            try {
                const decoded = jwt.verify(token, process.env.SECRET_KEY as string);
                (req as any).user = decoded;
                return next();
            } catch (err) {
                return this.httpResponse.Forbidden(res, err);
            }
        };

        public sendToken = async (req: Request, res: Response) => {
            const token = (req as any).token;
            return this.httpResponse.Ok(res, {"token": token})
        };
}