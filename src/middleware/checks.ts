import { Request, Response, NextFunction } from "express";
import { HTTP400Error } from "../utils/httpErrors";
import validator from "validator";

export const checkSearchParams = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (
        validator.isEmpty ( validator.trim( req.query.username ) ) ||
        validator.isEmpty ( validator.trim( req.query.language ) )
    ) {
        throw new HTTP400Error("Both username and language are required parameters");
    } else {
        next();
    }
};