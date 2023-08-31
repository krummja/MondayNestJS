import { NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";
import { MondaySdkAdapter } from "../interfaces";
export declare class MondayTokenMiddleware implements NestMiddleware {
    private readonly mondaySdk;
    constructor(mondaySdk: MondaySdkAdapter);
    use(req: Request, _: Response, next: NextFunction): void;
}
