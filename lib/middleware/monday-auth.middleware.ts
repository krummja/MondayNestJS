import { Injectable, Inject, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";

import jwt from "jsonwebtoken";

import { MONDAY_MODULE_OPTIONS } from "../monday.constants";
import { MondayModuleOptions } from "../interfaces";
import {
    COULD_NOT_VERIFY_CREDENTIALS,
    NO_CREDENTIALS_IN_REQUEST,
    MISSING_SIGNING_SECRET,
} from "./monday-auth.errors";


declare global {
    namespace Express {
        interface Request {
            session: {
                accountId: string;
                userId: string;
                backToUrl: string | undefined;
                shortLivedToken: string | undefined;
            }
        }
    }
}


@Injectable()
export class MondayAuthMiddleware implements NestMiddleware {

    private readonly signingSecret: string;

    public constructor(
        @Inject(MONDAY_MODULE_OPTIONS)
        private readonly options: MondayModuleOptions,
    ) {
        this.signingSecret = this.options.signingSecret;
    }

    public use(req: Request, res: Response, next: NextFunction): void {
        try {
            const authorization = req.headers.authorization ?? req.query?.token;

            if (typeof authorization !== "string") {
                res.status(401).json({ error: NO_CREDENTIALS_IN_REQUEST });
                return;
            }

            if (typeof this.signingSecret !== "string") {
                res.status(500).json({ error: MISSING_SIGNING_SECRET });
                return;
            }

            const { accountId, userId, backToUrl, shortLivedToken } = jwt.verify(
                authorization,
                this.signingSecret,
            ) as any;

            req.session = { accountId, userId, backToUrl, shortLivedToken };
            next();
        }

        catch (err) {
            console.error(err);
            res.status(401).json({ error: COULD_NOT_VERIFY_CREDENTIALS });
        }
    }
}
