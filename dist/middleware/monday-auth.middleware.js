"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MondayAuthMiddleware = void 0;
const common_1 = require("@nestjs/common");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const monday_constants_1 = require("../monday.constants");
const monday_auth_errors_1 = require("./monday-auth.errors");
let MondayAuthMiddleware = exports.MondayAuthMiddleware = class MondayAuthMiddleware {
    constructor(options) {
        this.options = options;
        this.signingSecret = this.options.signingSecret;
    }
    use(req, res, next) {
        try {
            const authorization = req.headers.authorization ?? req.query?.token;
            if (typeof authorization !== "string") {
                res.status(401).json({ error: monday_auth_errors_1.NO_CREDENTIALS_IN_REQUEST });
                return;
            }
            if (typeof this.signingSecret !== "string") {
                res.status(500).json({ error: monday_auth_errors_1.MISSING_SIGNING_SECRET });
                return;
            }
            const { accountId, userId, backToUrl, shortLivedToken } = jsonwebtoken_1.default.verify(authorization, this.signingSecret);
            req.session = { accountId, userId, backToUrl, shortLivedToken };
            next();
        }
        catch (err) {
            console.error(err);
            res.status(401).json({ error: monday_auth_errors_1.COULD_NOT_VERIFY_CREDENTIALS });
        }
    }
};
exports.MondayAuthMiddleware = MondayAuthMiddleware = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(monday_constants_1.MONDAY_MODULE_OPTIONS)),
    __metadata("design:paramtypes", [Object])
], MondayAuthMiddleware);
