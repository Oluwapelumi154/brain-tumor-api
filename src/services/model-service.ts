// import * as tf from "@tensorflow/tfjs";
import { serviceResponse } from "../utils/response";
class ModelService {
   static create(){
    return serviceResponse("fail",200,"Successfully Created Model",{
      name: "pelumi"
    });        
   }
   
   static uploadFile(file: object){
      return serviceResponse("fail",200,"Successfully uploaded image",{file})
   }
}

export default ModelService