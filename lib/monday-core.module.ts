// External Dependencies
import {
    DynamicModule,
    Global,
    Inject,
    Logger,
    Module,
    OnApplicationShutdown,
    Provider,
    MiddlewareConsumer,
    NestModule,
} from "@nestjs/common";

import mondaySdk = require("monday-sdk-js");


// Library Dependencies
import { MONDAY_MODULE_OPTIONS, MONDAY_SDK_ADAPTER } from "./monday.constants";
import { MondayModuleOptions } from "./interfaces";
import {
    MondayAuthMiddleware,
    MondayTokenMiddleware,
    MondayInputMiddleware,
} from "./middleware";

import { MondaySdkAdapter } from "./interfaces";


@Global()
@Module({})
export class MondayCoreModule implements OnApplicationShutdown, NestModule {

    private readonly logger = new Logger("MondayModule");

    public constructor(
        @Inject(MONDAY_MODULE_OPTIONS)
        private readonly options: MondayModuleOptions,
    ) {}

    public static forRoot(options: MondayModuleOptions = {}): DynamicModule {
        const mondayModuleOptions: Provider = {
            provide: MONDAY_MODULE_OPTIONS,
            useValue: options,
        };

        const mondayAdapterProvider: Provider = {
            provide: MONDAY_SDK_ADAPTER,
            useFactory: (options: MondayModuleOptions) => {
                return this.createMondayClientFactory(options);
            },
            inject: [MONDAY_MODULE_OPTIONS],
        };

        return {
            module: MondayCoreModule,
            providers: [
                mondayModuleOptions,
                mondayAdapterProvider,
            ],
            exports: [
                mondayAdapterProvider,
            ],
        };
    }

    private static createMondayClientFactory(options: MondayModuleOptions): MondaySdkAdapter {
        const sdk: MondaySdkAdapter = mondaySdk({
            apiVersion: options.version,
            apiToken: options.apiToken,
            clientId: options.clientId,
        });

        return sdk;
    }

    public configure(consumer: MiddlewareConsumer): void {
        consumer
            .apply(
                MondayAuthMiddleware,
                MondayTokenMiddleware,
                MondayInputMiddleware,
            ).forRoutes(
                ...this.options.routes,
            );
    }

    public async onApplicationShutdown(signal?: string): Promise<void> {
        // TODO Shutdown error logging.
    }
}
