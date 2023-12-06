import { Injectable, Inject, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";


@Injectable()
export class MondayWebhookMiddleware implements NestMiddleware {

    public use(req: Request, res: Response, next: NextFunction): void {
        console.log(req);

        res = res.status(200);

        if (Object.keys(req.body).includes("challenge")) {
            res.send(req.body);
            return next("route");
        }

        else {
            res.send();
            return next();
        }
    }
}
