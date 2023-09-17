import { Provider } from "@nestjs/common";
import { MONDAY_SERVICE, MondayService } from "../monday.service";

export const ITEM_NAME = "GET_ITEM_NAME";
export const GROUP_TITLE = "GET_GROUP_TITLE";
export const FOLDER_ID = "GET_FOLDER_ID";
export const BOARD_METADATA = "GET_BOARD_METADATA";
export const WORKSPACE_ID = "GET_WORKSPACE_ID";
export const WORKSPACE_COUNT = "GET_WORKSPACE_COUNT";

export const ValueProviders: Provider[] = [
    {
        provide: ITEM_NAME,
        useFactory: (service: MondayService) => {
            return async (itemId: string) => {
                const options = { variables: { itemId } };
                const result = await service.sdk.api(/* GraphQL */`
                    query GetItemName($itemId: ID!) {
                        items(ids: [$itemId]) {
                            id
                            name
                        }
                    }
                `, options);

                return result.data.items[0].name;
            };
        },
        inject: [MONDAY_SERVICE],
    },
    {
        provide: BOARD_METADATA,
        useFactory: (service: MondayService) => {
            return async (boardId: string) => {
                const options = { variables: { boardId } };
                const result = await service.sdk.api(/* GraphQL */`
                    query GetBoardMetadata($boardId: ID!) {
                        boards(ids: [$boardId]) {
                            id
                            name
                            type
                            board_kind

                            workspace_id
                            board_folder_id

                            columns {
                                id
                                title
                                type
                            }

                            groups {
                                id
                                title
                            }
                        }
                    }
                `, options);

                return result.data.boards[0];
            }
        },
        inject: [MONDAY_SERVICE],
    },
    {
        provide: FOLDER_ID,
        useFactory: (service: MondayService) => {
            return async (boardId: string) => {
                const options = { variables: { boardId } };
                const result = await service.sdk.api(/* GraphQL */`
                    query GetFolderId($boardId: ID!) {
                        boards(ids: [$boardId]) {
                            board_folder_id
                        }
                    }
                `, options);

                return result.data.boards[0].board_folder_id;
            };
        },
        inject: [MONDAY_SERVICE],
    },
    {
        provide: WORKSPACE_ID,
        useFactory: (service: MondayService) => {
            return async (boardId: string) => {
                const options = { variables: { boardId } };
                const result = await service.sdk.api(/* GraphQL */`
                    query GetWorkspaceId($boardId: ID!) {
                        boards(ids: [$boardId]) {
                            workspace_id
                        }
                    }
                `, options);

                return result.data.boards[0].workspace_id;
            };
        },
        inject: [MONDAY_SERVICE],
    },
    {
        provide: GROUP_TITLE,
        useFactory: (service: MondayService) => {
            return async (boardId: string, itemId: string) => {
                const options = { variables: { boardId, itemId } };
                const result = await service.sdk.api(/* GraphQL */`
                    query GetGroupTitle($boardId: ID!, $itemId: ID!) {
                        boards(ids: [$boardId]) {
                            items_page(query_params: { ids: [$itemId] }) {
                                items {
                                    group {
                                        id
                                        title
                                    }
                                }
                            }
                        }
                    }
                `, options);

                const boards = result.data.boards;
                const items = boards[0].items_page.items;
                const group = items[0].group;
                return group.title;
            };
        },
        inject: [MONDAY_SERVICE],
    },
    {
        provide: WORKSPACE_COUNT,
        useFactory: (service: MondayService) => {
            return async () => {
                let limit = 100;
                let page = 1;
                let total = 0;

                const query = /* GraphQL */`
                    query GetWorkspaces($page: Int) {
                        workspaces(page: $page, limit: 100)
                    }
                `;

                while (true) {
                    const result = await service.sdk.api(query, { variables: { page } });
                    const current = result.data.workspaces;
                    total += current.length;

                    if (current.length === 0 || total % limit > 0) break;
                    page++;
                }

                return total;
            };
        },
        inject: [MONDAY_SERVICE],
    }
];
