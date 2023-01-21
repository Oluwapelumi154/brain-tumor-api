"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorResponseMsg = exports.successResponseMsg = exports.serviceResponse = void 0;
const serviceResponse = (status, statusCode, message, data) => {
    return { status, statusCode, message, data };
};
exports.serviceResponse = serviceResponse;
const successResponseMsg = (res, status, statusCode, message, data) => {
    return res.status(statusCode).json({
        status,
        message,
        data
    });
};
exports.successResponseMsg = successResponseMsg;
const errorResponseMsg = (res, status, statusCode, message) => {
    return res.status(statusCode).json({
        status,
        message,
    });
};
exports.errorResponseMsg = errorResponseMsg;
//# sourceMappingURL=response.js.map