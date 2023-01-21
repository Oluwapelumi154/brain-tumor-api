"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const gateway_1 = __importDefault(require("./gateway"));
const response_1 = require("./utils/response");
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const app = (0, express_1.default)();
app.use('/api', gateway_1.default);
app.use(cors_1.default);
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
app.use('*', (req, res) => (0, response_1.errorResponseMsg)(res, "fail", 200, `can't ${req.originalUrl} on this server`));
exports.default = app;
//# sourceMappingURL=app.js.map