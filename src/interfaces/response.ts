import { Response} from "express"

export type ServiceResponseDto = {
   status: string,
   message: string,
   statusCode: number
   data: object
}

export type SuccessResponseDto= {
 res: Response
 status: string,
 message: string,
 data?: object
}

export type ErrorResponseDto= {
    res: Response,
    status: string,
    statusCode: number
    message: string
}