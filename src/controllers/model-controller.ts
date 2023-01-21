
import { Response ,Request, NextFunction} from "express"
import { ModelService } from "../services"
import { errorResponseMsg, successResponseMsg} from "../utils/response"
import multer from 'multer'

export const create = ( req:Request, res: Response): Response => {
    try{
    const response= ModelService.create();
    const {status,statusCode,message,data}=response;
    if(statusCode >=400) return errorResponseMsg(res,status,statusCode,message)  
    return successResponseMsg(res,status,statusCode,message,data);
    }catch(err){
        return errorResponseMsg(res,"fail",500,"Internal Server Error");
    }
}

export const multerMid= (req: Request, res: Response, next: NextFunction)=> {
    // const storage= multer.memoryStorage();
    const upload= multer({dest: "uploads"}).single("image");
    upload(req,res,(err)=>{
        if(err?.code === "LIMIT_FILE_SIZE") return errorResponseMsg(res,"fail",400,"Kindly upload an image with at least 5MB")
     return next()
    })

}

export const uploadImage= (req: Request,res: Response):Response=> {
    try{
    if(!req?.file) return errorResponseMsg(res,"fail",400,"image cannot be empty");
    const response = ModelService.uploadFile(req?.file);
    const {status,statusCode,message,data}= response;
    if(statusCode>=400) return errorResponseMsg(res,status,statusCode,message)
    return successResponseMsg(res, status,statusCode,message,data)
    }catch(err){
        return errorResponseMsg(res,"fail",500,"Internal Server Error")
    }
}