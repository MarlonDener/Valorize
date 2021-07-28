import { getCustomRepository } from "typeorm"
import { UserRepositories } from "../repositories/UsersRepositories"
import {compare } from "bcryptjs";

import { sign } from "jsonwebtoken";

interface IAuthenticateRequest {
    email: string;
    password: string;
}

class AuthenticateUserService {

    async execute( { email, password}:IAuthenticateRequest ){

        const userRepositories = getCustomRepository(UserRepositories);

        //Verify email

        const user = await userRepositories.findOne({
            email
        });

        if(!user){
            throw new Error("Email/Password incorrect");
        }

        // Verify password
        const passwordMatch = await compare(password, user.password);

        if(!passwordMatch){
            throw new Error("Email/Password incorrect");
        }

        // Create Token
        const token = sign({
            email: user.email,
        }, "c8f759a539858b08e9e46251b1ae9f09", {
            subject: user.id,
            expiresIn: "1d"
        });

        return token;
    }

}

export { AuthenticateUserService }