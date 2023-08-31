import { NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";
export declare class MondayInputMiddleware implements NestMiddleware {
    use(req: Request, _: Response, next: NextFunction): void;
    private processInput;
}
