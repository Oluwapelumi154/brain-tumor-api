import { config } from "dotenv";
config({path: "./.env"});
import http from "http";
import app from "./app";
/**
 * 
 * @param value string
 * @returns number | string | boolean
 */
const normalizePort = (value: string): number | string | boolean => {
  const port = parseInt(value, 10);
  if (isNaN(port)) {
    return value;
  }
  if (port >= 0) {
    return port;
  }
  return false;
};

const server = http.createServer(app);
const port = normalizePort(process.env.PORT as string);
server.on("listening", () => {
  const address= server.address();
  const bind = typeof address === "string" ? `pipe ${port}` : `port ${port}`;
  console.log(`listening on ${bind}`);
  const log= "[?...] Connecting"
  console.log(log);
});
server.listen(port);
