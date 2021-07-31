import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../repositories/UsersRepositories";
import { classToPlain } from "class-transformer";

    class ListAllUserService {

        async execute() {

            const userRepositories = getCustomRepository(UserRepositories);

            const allUsers = await userRepositories.find();

            return classToPlain(allUsers);
        }

    }

    export { ListAllUserService }