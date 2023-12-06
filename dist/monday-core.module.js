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
// External Dependencies
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
const mondaySdk = require("monday-sdk-js");
// Library Dependencies
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
    static forRootAsync(options = {}) {
        const mondayAdapterProvider = {
            provide: monday_constants_1.MONDAY_SDK_ADAPTER,
            useFactory: async (options) => {
                return this.createMondayClientFactory(options);
            },
            inject: [monday_constants_1.MONDAY_MODULE_OPTIONS],
        };
        const asyncProviders = this.createAsyncProviders(options);
        const providers = [
            ...asyncProviders,
            {
                provide: monday_constants_1.MONDAY_MODULE_ID,
                useValue: (0, uuid_1.v4)(),
            },
            mondayAdapterProvider,
            ...(options.extraProviders || []),
        ];
        const exports = [];
        return {
            module: MondayCoreModule_1,
            imports: options.imports,
            providers,
            exports,
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
    static createAsyncProviders(options) {
        if (options.useExisting || options.useFactory) {
            return [this.createAsyncOptionsProvider(options)];
        }
        const useClass = options.useClass;
        return [
            this.createAsyncOptionsProvider(options),
            {
                provide: useClass,
                useClass,
            }
        ];
    }
    static createAsyncOptionsProvider(options) {
        if (options.useFactory) {
            return {
                provide: monday_constants_1.MONDAY_MODULE_OPTIONS,
                useFactory: options.useFactory,
                inject: options.inject || [],
            };
        }
        const inject = [
            (options.useClass || options.useExisting),
        ];
        return {
            provide: monday_constants_1.MONDAY_MODULE_OPTIONS,
            useFactory: async (optionsFactory) => {
                await optionsFactory.createMondayModuleOptions();
            },
            inject,
        };
    }
    configure(consumer) {
        consumer
            .apply(middleware_1.MondayAuthMiddleware, middleware_1.MondayTokenMiddleware).forRoutes(...this.options.routes || []);
        consumer
            .apply(middleware_1.MondayInputMiddleware).forRoutes(...this.options.inputRoutes || []);
        consumer
            .apply(middleware_1.MondayWebhookMiddleware).forRoutes(...this.options.webhookRoutes || []);
    }
    async onApplicationShutdown(signal) {
        // TODO Shutdown error logging.
    }
};
exports.MondayCoreModule = MondayCoreModule = MondayCoreModule_1 = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({}),
    __param(0, (0, common_1.Inject)(monday_constants_1.MONDAY_MODULE_OPTIONS)),
    __metadata("design:paramtypes", [Object])
], MondayCoreModule);
