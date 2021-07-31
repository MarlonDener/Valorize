import { Response, Request } from "express";
import { ListAllUserService } from "../services/ListAllUsers";

    class ListAllUserController {


        async handle(request: Request, response: Response) {
            const listAllUserService = new ListAllUserService();

            const allUsers= await listAllUserService.execute();

            return response.json(allUsers);

        }

    }

    export { ListAllUserController }