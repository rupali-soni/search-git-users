import { Request, Response } from "express";
import { getGitUsers } from "./SearchController";
import { checkSearchParams} from "../../middleware/checks";

export default [
    {
        path: "/api/v1/search",
        method: "get",
        handler: [
            checkSearchParams,
            async ({ query }: Request, res: Response) => {
                const result = await getGitUsers(query.username, query.language);
                res.status(200).send(result);
            }
        ]
    }
];