import {Response} from 'express'
import { ServiceResponseDto} from "../interfaces";

export const serviceResponse = (status: string, statusCode: number, message: string, data: object): ServiceResponseDto =>  {
    return {status,statusCode,message, data}
}

export const successResponseMsg= (res: Response, status: string, statusCode: number, message: string, data?: object)=> {
    return res.status(statusCode).json({
        status,
        message,
        data
    })

}

export const errorResponseMsg= (res: Response,status: string,statusCode: number, message: string)=>{
    return res.status(statusCode).json({
        status,
        message,
    })


}



