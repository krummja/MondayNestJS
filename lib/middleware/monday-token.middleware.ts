import { Injectable, Inject, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";

import { MONDAY_SDK_ADAPTER } from "../monday.constants";
import { MondaySdkAdapter } from "../interfaces";


@Injectable()
export class MondayTokenMiddleware implements NestMiddleware {

    public constructor(
        @Inject(MONDAY_SDK_ADAPTER)
        private readonly mondaySdk: MondaySdkAdapter,
    ) {}

    public use(req: Request, _: Response, next: NextFunction): void {
        this.mondaySdk.setToken(req.session.shortLivedToken);
        next();
    }
}
