import { DynamicModule, OnApplicationShutdown, MiddlewareConsumer, NestModule } from "@nestjs/common";
import { MondayModuleAsyncOptions, MondayModuleOptions } from "./interfaces";
export declare class MondayCoreModule implements OnApplicationShutdown, NestModule {
    private readonly options;
    private readonly logger;
    constructor(options: MondayModuleOptions);
    static forRoot(options?: MondayModuleOptions): DynamicModule;
    static forRootAsync(options?: MondayModuleAsyncOptions): DynamicModule;
    private static createMondayClientFactory;
    private static createAsyncProviders;
    private static createAsyncOptionsProvider;
    configure(consumer: MiddlewareConsumer): void;
    onApplicationShutdown(signal?: string): Promise<void>;
}
