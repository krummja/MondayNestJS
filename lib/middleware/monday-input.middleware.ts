import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";

import {
    Action,
    InputFields,
    ActionFields,
} from "../dto";


@Injectable()
export class MondayInputMiddleware implements NestMiddleware {

    public use(req: Request, _: Response, next: NextFunction): void {

        const body = req.body as Action<InputFields>;
        const { payload } = body;
        const { context, trigger, recipe } = this.processInput(payload.inputFields);

        req.body = {
            context,
            trigger,
            recipe,
        };

        next();
    }

    private processInput(inputFields: InputFields): ActionFields {
        const {
            boardId,
            userId,
            itemId,
            groupId,
            isTopGroup,
            columnType,
            columnId,
            columnValue,
            itemValues,
            ...additional
        } = inputFields;

        const context = {
            boardId,
            userId,
        };

        const trigger = {
            itemId,
            groupId,
            isTopGroup,
            columnType,
            columnId,
            columnValue,
            itemValues,
        };

        const recipe = additional;

        return {
            context,
            trigger,
            recipe,
        };
    }
}
