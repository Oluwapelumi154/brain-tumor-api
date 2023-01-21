"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadImage = exports.multerMid = exports.create = void 0;
const services_1 = require("../services");
const response_1 = require("../utils/response");
const multer_1 = __importDefault(require("multer"));
const create = (req, res) => {
    const response = services_1.ModelService.create();
    const { status, statusCode, message, data } = response;
    if (statusCode >= 400)
        return (0, response_1.errorResponseMsg)(res, status, statusCode, message);
    return (0, response_1.successResponseMsg)(res, status, statusCode, message, data);
};
exports.create = create;
const multerMid = (req, res, next) => {
    const upload = (0, multer_1.default)({ dest: "uploads" }).single("image");
    upload(req, res, (err) => {
        if ((err === null || err === void 0 ? void 0 : err.code) === "LIMIT_FILE_SIZE")
            return (0, response_1.errorResponseMsg)(res, "fail", 400, "Kindly upload an image with at least 5MB");
        return next();
    });
};
exports.multerMid = multerMid;
const uploadImage = (req, res) => {
    try {
        if (!(req === null || req === void 0 ? void 0 : req.file))
            return (0, response_1.errorResponseMsg)(res, "fail", 400, "image cannot be empty");
        const response = services_1.ModelService.uploadFile(req === null || req === void 0 ? void 0 : req.file);
        const { status, statusCode, message, data } = response;
        if (statusCode >= 400)
            return (0, response_1.errorResponseMsg)(res, status, statusCode, message);
        return (0, response_1.successResponseMsg)(res, status, statusCode, message, data);
    }
    catch (err) {
        return (0, response_1.errorResponseMsg)(res, "fail", 500, "Internal Server Error");
    }
};
exports.uploadImage = uploadImage;
//# sourceMappingURL=model-controller.js.map