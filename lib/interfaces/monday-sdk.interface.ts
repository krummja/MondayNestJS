import mondaySdk = require("monday-sdk-js");

import { ClientData } from "monday-sdk-js/types/client-data.interface";
import { ClientExecute } from "monday-sdk-js/types/client-execute.interface";
import { ClientApi, APIOptions } from "monday-sdk-js/types/client-api.interface";


export type MondayClientSdk = ClientData & ClientExecute & ClientApi;

export type MondayApiVersion = "2023-07" | "2023-10" | "2024-01";

export interface MondayServerSdk {
    setToken(token: string): void;
    setApiVersion(version: MondayApiVersion): void;
    api(query: string, options?: APIOptions): Promise<any>;
    oauthToken?(code: string, clientId: string, clientSecret: string): Promise<any>;
}

export type MondaySdkAdapter = Pick<
    ReturnType<typeof mondaySdk>,
    | "api"
    | "setToken"
    | "setApiVersion"
>;
