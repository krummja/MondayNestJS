import { DynamicModule, Module } from "@nestjs/common";

import { MondayModuleOptions } from "./interfaces";
import { MondayCoreModule } from "./monday-core.module";


@Module({})
export class MondayModule {

    public static forRoot(options?: MondayModuleOptions): DynamicModule {
        return {
            module: MondayModule,
            imports: [MondayCoreModule.forRoot(options)],
        };
    }
}
