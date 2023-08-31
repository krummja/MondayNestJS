import { DynamicModule } from "@nestjs/common";
import { MondayModuleOptions } from "./interfaces";
export declare class MondayModule {
    static forRoot(options?: MondayModuleOptions): DynamicModule;
}
