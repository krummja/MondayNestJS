import { ModuleMetadata, Provider, Type } from "@nestjs/common";
import { RouteInfo } from "@nestjs/common/interfaces";
import { MondayApiVersion } from "./monday-sdk.interface";
export type MondayModuleOptions = {
    version?: MondayApiVersion;
    apiToken?: string;
    clientId?: string;
    clientSecret?: string;
    signingSecret?: string;
    oauthToken?: string;
    routes?: (string | Type<any> | RouteInfo)[];
};
export interface MondayOptionsFactory {
}
export interface MondayModuleAsyncOptions extends Pick<ModuleMetadata, 'imports'> {
    name?: string;
    useExisting?: Type<MondayOptionsFactory>;
    useClass?: Type<MondayOptionsFactory>;
    useFactory?: (...args: any[]) => Promise<MondayModuleOptions> | MondayModuleOptions;
    inject?: any[];
    extraProviders?: Provider[];
}
