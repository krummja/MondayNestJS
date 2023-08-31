import { DynamicModule } from "@nestjs/common";
import { MondayModuleAsyncOptions, MondayModuleOptions } from "./interfaces";
export declare class MondayModule {
    static forRoot(options?: MondayModuleOptions): DynamicModule;
    static forRootAsync(options: MondayModuleAsyncOptions): DynamicModule;
}
