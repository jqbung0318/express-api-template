import { Request, Response, NextFunction } from 'express';

// Middleware that logs the request input
const logRequestMethod = ((req: Request, res: Response, next: NextFunction) => {
    console.log(`Request: ${req.method} ${req.url}`);
    next();
});

// Middleware that logs the response output
const logResonseMethod = ((req: Request, res: Response, next: NextFunction) => {
    res.on('finish', () => {
        console.log(`Response: ${res.statusCode}`);
    });
    next();
});

export {
    logRequestMethod,
    logResonseMethod,
}