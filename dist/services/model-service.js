"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const response_1 = require("../utils/response");
class ModelService {
    static create() {
        return (0, response_1.serviceResponse)("fail", 200, "Successfully Created Model", {
            name: "pelumi"
        });
    }
    static uploadFile(file) {
        return (0, response_1.serviceResponse)("fail", 200, "Successfully uploaded image", { file });
    }
}
exports.default = ModelService;
//# sourceMappingURL=model-service.js.map