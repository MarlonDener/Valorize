import { UserRepositories } from "../repositories/UsersRepositories";
import { getCustomRepository } from "typeorm";

interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean;
}

class CreateUserService {

    async execute({email, name, admin} : IUserRequest){
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

        const user = usersRepository.create({
            name,
            email,
            admin,
        })

        await usersRepository.save(user);
        
        return user;
    }
}

export { CreateUserService }