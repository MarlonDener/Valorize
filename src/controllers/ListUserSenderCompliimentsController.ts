import { ListUserSenderCompliments } from "../services/ListUserSenderComplimentsService";
import { Request, Response } from "express";

    class ListUserSendComplimentsController {

        async handle(request: Request, response: Response) {

            const { user_id } = request;

            const listUserSendComplimentsService = new ListUserSenderCompliments();

            const compliments = await listUserSendComplimentsService.execute(user_id);

            return response.json(compliments);

        }

    }

    export { ListUserSendComplimentsController }