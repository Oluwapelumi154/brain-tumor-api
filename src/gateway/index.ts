import  express from "express";
import { create, multerMid, uploadImage } from "../controllers";
const route= express();
route.get("/name",create);
route.post("/upload-image",multerMid,uploadImage);
export default route;