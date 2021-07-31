import { Request, Response, NextFunction } from "express";
import { RepositoryNotTreeError } from "typeorm";
import { verify } from "jsonwebtoken";

interface Ipayload {
    sub: string;
}

export function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
) {
    //GET THE TOKEN
    const authToken = request.headers.authorization


    //VALIDATE TOKEN IS NOT EMPTY
    if(!authToken) {
        return response.status(401).json({message: "Token missing"})
    }
    const [,token] = authToken.split(" ");

    //VALIDATE IF TOKEN IS VALID

    try {
    const { sub } = verify(token ,"c8f759a539858b08e9e46251b1ae9f09") as Ipayload;
        
    request.user_id = sub

    return next();
    
    }catch(err) {
        return response.status(401).end();
    }

    //GET INFORMATIONS OF USER
}