import { OnModuleInit, Injectable } from "@nestjs/common";
import { ModuleRef } from "@nestjs/core";

import { MONDAY_SDK_ADAPTER } from "./monday.constants";
import { MondaySdkAdapter } from "./interfaces";

export const MONDAY_SERVICE = "MONDAY_SERVICE";

@Injectable()
export class MondayService implements OnModuleInit {

    private _sdkAdapter: MondaySdkAdapter;

    public get sdk(): MondaySdkAdapter {
        return this._sdkAdapter;
    }

    public constructor(
        private moduleRef: ModuleRef,
    ) {}

    public onModuleInit() {
        this._sdkAdapter = this.moduleRef.get(MONDAY_SDK_ADAPTER, { strict: false });
    }
}

export const MondayProviders = [
    {
        provide: MONDAY_SERVICE,
        useClass: MondayService,
    }
];
