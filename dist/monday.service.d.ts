import { OnModuleInit } from "@nestjs/common";
import { ModuleRef } from "@nestjs/core";
import { MondaySdkAdapter } from "./interfaces";
export declare const MONDAY_SERVICE = "MONDAY_SERVICE";
export declare class MondayService implements OnModuleInit {
    private moduleRef;
    private _sdkAdapter;
    get sdk(): MondaySdkAdapter;
    constructor(moduleRef: ModuleRef);
    onModuleInit(): void;
}
export declare const MondayProviders: {
    provide: string;
    useClass: typeof MondayService;
}[];
