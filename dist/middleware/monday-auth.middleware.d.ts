import { NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";
import { MondayModuleOptions } from "../interfaces";
declare global {
    namespace Express {
        interface Request {
            session: {
                accountId: string;
                userId: string;
                backToUrl: string | undefined;
                shortLivedToken: string | undefined;
            };
        }
    }
}
export declare class MondayAuthMiddleware implements NestMiddleware {
    private readonly options;
    private readonly signingSecret;
    constructor(options: MondayModuleOptions);
    use(req: Request, res: Response, next: NextFunction): void;
}
