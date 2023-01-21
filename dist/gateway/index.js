"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controllers_1 = require("../controllers");
const route = (0, express_1.default)();
route.get("/name", controllers_1.create);
route.post("/upload-image", controllers_1.multerMid, controllers_1.uploadImage);
exports.default = route;
//# sourceMappingURL=index.js.map