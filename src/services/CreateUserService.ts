import { UserRepositories } from "../repositories/UsersRepositories";
import { getCustomRepository } from "typeorm";
import { hash } from "bcryptjs";

interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean;
    password: string
}

class CreateUserService {

    async execute({email, name, admin = false, password} : IUserRequest){
        const usersRepository = getCustomRepository(UserRepositories);

        if(!email) {

          throw new Error("Email incorrect");

        }

        const userAlredyExists = await usersRepository.findOne({
            email,
        });

        if(userAlredyExists) {
            throw new Error("User already exists");
        }

        const passwordHash = await hash(password, 8);

        const user = usersRepository.create({
            name,
            email,
            admin,
            password: passwordHash,
        })

        await usersRepository.save(user);
        
        return user;
    }
}

export { CreateUserService }