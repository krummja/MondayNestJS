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
var MondayCoreModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MondayCoreModule = void 0;
const common_1 = require("@nestjs/common");
const mondaySdk = require("monday-sdk-js");
const monday_constants_1 = require("./monday.constants");
const middleware_1 = require("./middleware");
let MondayCoreModule = exports.MondayCoreModule = MondayCoreModule_1 = class MondayCoreModule {
    constructor(options) {
        this.options = options;
        this.logger = new common_1.Logger("MondayModule");
    }
    static forRoot(options = {}) {
        const mondayModuleOptions = {
            provide: monday_constants_1.MONDAY_MODULE_OPTIONS,
            useValue: options,
        };
        const mondayAdapterProvider = {
            provide: monday_constants_1.MONDAY_SDK_ADAPTER,
            useFactory: (options) => {
                return this.createMondayClientFactory(options);
            },
            inject: [monday_constants_1.MONDAY_MODULE_OPTIONS],
        };
        return {
            module: MondayCoreModule_1,
            providers: [
                mondayModuleOptions,
                mondayAdapterProvider,
            ],
            exports: [
                mondayAdapterProvider,
            ],
        };
    }
    static createMondayClientFactory(options) {
        const sdk = mondaySdk({
            apiVersion: options.version,
            apiToken: options.apiToken,
            clientId: options.clientId,
        });
        return sdk;
    }
    configure(consumer) {
        consumer
            .apply(middleware_1.MondayAuthMiddleware, middleware_1.MondayTokenMiddleware, middleware_1.MondayInputMiddleware).forRoutes(...this.options.routes);
    }
    async onApplicationShutdown(signal) {
    }
};
exports.MondayCoreModule = MondayCoreModule = MondayCoreModule_1 = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({}),
    __param(0, (0, common_1.Inject)(monday_constants_1.MONDAY_MODULE_OPTIONS)),
    __metadata("design:paramtypes", [Object])
], MondayCoreModule);
//# sourceMappingURL=monday-core.module.js.map