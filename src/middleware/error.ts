import { Request, Response, NextFunction } from "express";

class CustomError extends Error {
    message: string;
    statusCode: number;

    constructor(message: string, statusCode: number) {
        super(message);
        this.statusCode = statusCode;
    }
}

export function error(
    err: CustomError,
    req: Request,
    res: Response,
    next: NextFunction,
) {
    try {
        const msg = JSON.parse(err.message);
        res.status(err.statusCode).json({ msg });
    } catch (error) {
        res.status(err.statusCode).json({ msg: err.message })
    }
}

export function notFound(req: Request, res: Response, next: NextFunction)  {
    return next(new CustomError("Route not found", 404));
}