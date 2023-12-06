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
    Type,
} from "@nestjs/common";

import { v4 as uuid } from "uuid";
import mondaySdk = require("monday-sdk-js");


// Library Dependencies
import { MONDAY_MODULE_ID, MONDAY_MODULE_OPTIONS, MONDAY_SDK_ADAPTER } from "./monday.constants";
import { MondayModuleAsyncOptions, MondayModuleOptions, MondayOptionsFactory } from "./interfaces";
import {
    MondayAuthMiddleware,
    MondayTokenMiddleware,
    MondayInputMiddleware,
    MondayWebhookMiddleware,
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

    public static forRootAsync(options: MondayModuleAsyncOptions = {}): DynamicModule {
        const mondayAdapterProvider: Provider = {
            provide: MONDAY_SDK_ADAPTER,
            useFactory: async (options: MondayModuleAsyncOptions) => {
                return this.createMondayClientFactory(options as MondayModuleOptions);
            },
            inject: [MONDAY_MODULE_OPTIONS],
        };

        const asyncProviders = this.createAsyncProviders(options);

        const providers = [
            ...asyncProviders,
            {
                provide: MONDAY_MODULE_ID,
                useValue: uuid(),
            },
            mondayAdapterProvider,
            ...(options.extraProviders || []),
        ];

        const exports: Array<Provider | Function> = [];

        return {
            module: MondayCoreModule,
            imports: options.imports,
            providers,
            exports,
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

    private static createAsyncProviders(options: MondayModuleAsyncOptions): Provider[] {
        if (options.useExisting || options.useFactory) {
            return [this.createAsyncOptionsProvider(options)];
        }

        const useClass = options.useClass as Type<MondayOptionsFactory>;
        return [
            this.createAsyncOptionsProvider(options),
            {
                provide: useClass,
                useClass,
            }
        ];
    }

    private static createAsyncOptionsProvider(options: MondayModuleAsyncOptions): Provider {
        if (options.useFactory) {
            return {
                provide: MONDAY_MODULE_OPTIONS,
                useFactory: options.useFactory,
                inject: options.inject || [],
            };
        }

        const inject = [
            (options.useClass || options.useExisting) as Type<MondayOptionsFactory>,
        ];

        return {
            provide: MONDAY_MODULE_OPTIONS,
            useFactory: async (optionsFactory: MondayOptionsFactory) => {
                await optionsFactory.createMondayModuleOptions();
            },
            inject,
        };
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

        consumer
            .apply(
                MondayWebhookMiddleware,
            ).forRoutes(
                ...this.options.webhookRoutes,
            );
    }

    public async onApplicationShutdown(signal?: string): Promise<void> {
        // TODO Shutdown error logging.
    }
}
