import { ColumnType } from "../gql/monday.schema";


export type ContextFields = Pick<
    InputFields,
    "boardId" | "userId"
>;

export type TriggerFields = Pick<
    InputFields,
    | "itemId"
    | "groupId"
    | "isTopGroup"
    | "columnType"
    | "columnId"
    | "columnValue"
    | "itemValues"
>;

export type AdditionalFields = Omit<InputFields, keyof ContextFields | keyof TriggerFields>;


export interface InputFields
{
    boardId: number;
    userId: number;
    itemId?: number;
    groupId?: string;
    isTopGroup?: boolean;
    columnType?: ColumnType;
    columnId?: string;
    columnValue?: any;
    [key: string]: any;
};


export class WorkflowBlock<T extends InputFields> {
    public inputFields: T;
    public blockKind: "action" | "trigger";
    public inboundFieldValues: object;
    public recipeId: number;
    public integrationId: number;
}

export class Action<T extends InputFields> {
    public payload: WorkflowBlock<T>;
}
