export interface ICreateItem {
    userId: string;
    boardId: string;
    pulseId: string;
    pulseName: "Create_item webhook";
    groupId: string;
    groupName: string;
    groupColor: string;
    isTopGroup: boolean;
    columnValues: object;
    app: string;
    type: "create_pulse";
    triggerTime: string;
    subscriptionId: string;
    triggerUuid: string;
    originalTriggerUuid?: string;
}
