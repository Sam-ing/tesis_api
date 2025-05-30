import { Response } from "express";

enum httpStatus{
    OK = 200,
    CREATED = 201,
    NOT_FOUND = 404,
    UNAUTHORIZE = 401,
    FORBIDDEN = 403,
    INTERNAL_SERVER_ERROR = 500
}

export class HttpResponse {

    Ok(res:Response, data: any){
        return res.status(httpStatus.OK).send(data)  
    };

    Created(res:Response, data:any){
        return res.status(httpStatus.CREATED).send(data)
    };

    NotFound(res:Response, data:any){
        return res.status(httpStatus.NOT_FOUND).send(data)

    };

    Unauthorize(res:Response, data:any){
        return res.status(httpStatus.UNAUTHORIZE).send(data)
    }

    Forbidden(res:Response, data:any){
        return res.status(httpStatus.FORBIDDEN).send(data)
    };

    Error(res:Response, data:any){
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(data)
    };
};
