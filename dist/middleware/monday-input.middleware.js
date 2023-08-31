"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MondayInputMiddleware = void 0;
const common_1 = require("@nestjs/common");
let MondayInputMiddleware = exports.MondayInputMiddleware = class MondayInputMiddleware {
    use(req, _, next) {
        const body = req.body;
        const { payload } = body;
        const { context, trigger, recipe } = this.processInput(payload.inputFields);
        req.body = {
            context,
            trigger,
            recipe,
        };
        next();
    }
    processInput(inputFields) {
        const { boardId, userId, itemId, groupId, isTopGroup, columnType, columnId, columnValue, ...additional } = inputFields;
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
        };
        const recipe = additional;
        return {
            context,
            trigger,
            recipe,
        };
    }
};
exports.MondayInputMiddleware = MondayInputMiddleware = __decorate([
    (0, common_1.Injectable)()
], MondayInputMiddleware);
//# sourceMappingURL=monday-input.middleware.js.map