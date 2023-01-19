"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)({ path: "./.env" });
const http_1 = __importDefault(require("http"));
const app_1 = __importDefault(require("./app"));
const normalizePort = (value) => {
    const port = parseInt(value, 10);
    if (isNaN(port)) {
        return value;
    }
    if (port >= 0) {
        return port;
    }
    return false;
};
const server = http_1.default.createServer(app_1.default);
const port = normalizePort(process.env.PORT);
server.on("listening", () => {
    const address = server.address();
    console.log(typeof address);
    const bind = typeof address === "string" ? `pipe ${port}` : `port ${port}`;
    console.log(`listening on ${bind}`);
    const log = "[?...] Connecting";
    console.log(log);
});
server.listen(port);
//# sourceMappingURL=index.js.map