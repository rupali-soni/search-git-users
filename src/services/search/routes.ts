import { Request, Response } from "express";
import { getGitUsers } from "./SearchController";
import { checkSearchParams } from "../../middleware/checks";
import { filterSearchParams } from "../../middleware/filterInputs";

export default [
    {
        path: "/api/v1/search",
        method: "get",
        handler: [
            checkSearchParams,
            async ({ query }: Request, res: Response) => {
                let filteredData = filterSearchParams( query.username, query.language );
                const result = await getGitUsers( filteredData.username, filteredData.language );
                res.status(200).send(result);
            }
        ]
    }
];