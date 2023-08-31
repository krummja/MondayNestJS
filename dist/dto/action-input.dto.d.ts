import { ColumnType } from "../gql/monday.schema";
export type ContextFields = Pick<InputFields, "boardId" | "userId">;
export type TriggerFields = Pick<InputFields, "itemId" | "groupId" | "isTopGroup" | "columnType" | "columnId" | "columnValue">;
export type AdditionalFields = Omit<InputFields, keyof ContextFields | keyof TriggerFields>;
export interface InputFields {
    boardId: number;
    userId: number;
    itemId?: number;
    groupId?: string;
    isTopGroup?: boolean;
    columnType?: ColumnType;
    columnId?: string;
    columnValue?: any;
    [key: string]: any;
}
export declare class WorkflowBlock<T extends InputFields> {
    inputFields: T;
    blockKind: "action" | "trigger";
    inboundFieldValues: object;
    recipeId: number;
    integrationId: number;
}
export declare class Action<T extends InputFields> {
    payload: WorkflowBlock<T>;
}
