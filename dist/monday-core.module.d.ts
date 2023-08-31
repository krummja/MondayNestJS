import { DynamicModule, OnApplicationShutdown, MiddlewareConsumer, NestModule } from "@nestjs/common";
import { MondayModuleOptions } from "./interfaces";
export declare class MondayCoreModule implements OnApplicationShutdown, NestModule {
    private readonly options;
    private readonly logger;
    constructor(options: MondayModuleOptions);
    static forRoot(options?: MondayModuleOptions): DynamicModule;
    private static createMondayClientFactory;
    configure(consumer: MiddlewareConsumer): void;
    onApplicationShutdown(signal?: string): Promise<void>;
}
