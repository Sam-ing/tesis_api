"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpResponse = void 0;
var httpStatus;
(function (httpStatus) {
    httpStatus[httpStatus["OK"] = 200] = "OK";
    httpStatus[httpStatus["CREATED"] = 201] = "CREATED";
    httpStatus[httpStatus["NOT_FOUND"] = 404] = "NOT_FOUND";
    httpStatus[httpStatus["UNAUTHORIZE"] = 401] = "UNAUTHORIZE";
    httpStatus[httpStatus["FORBIDDEN"] = 403] = "FORBIDDEN";
    httpStatus[httpStatus["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
})(httpStatus || (httpStatus = {}));
class HttpResponse {
    Ok(res, data) {
        return res.status(httpStatus.OK).send(data);
    }
    ;
    Created(res, data) {
        return res.status(httpStatus.CREATED).send(data);
    }
    ;
    NotFound(res, data) {
        return res.status(httpStatus.NOT_FOUND).send(data);
    }
    ;
    Unauthorize(res, data) {
        return res.status(httpStatus.UNAUTHORIZE).send(data);
    }
    Forbidden(res, data) {
        return res.status(httpStatus.FORBIDDEN).send(data);
    }
    ;
    Error(res, data) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(data);
    }
    ;
}
exports.HttpResponse = HttpResponse;
;
