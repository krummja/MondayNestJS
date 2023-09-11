"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValueProviders = exports.WORKSPACE_COUNT = exports.GROUP_TITLE = exports.ITEM_NAME = void 0;
const monday_service_1 = require("../monday.service");
exports.ITEM_NAME = "GET_ITEM_NAME";
exports.GROUP_TITLE = "GET_GROUP_TITLE";
exports.WORKSPACE_COUNT = "GET_WORKSPACE_COUNT";
exports.ValueProviders = [
    {
        provide: exports.ITEM_NAME,
        useFactory: (service) => {
            return async (itemId) => {
                const options = { variables: { itemId } };
                const result = await service.sdk.api(/* GraphQL */ `
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
        inject: [monday_service_1.MONDAY_SERVICE],
    },
    {
        provide: exports.GROUP_TITLE,
        useFactory: (service) => {
            return async (boardId, itemId) => {
                const options = { variables: { boardId, itemId } };
                const result = await service.sdk.api(/* GraphQL */ `
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
        inject: [monday_service_1.MONDAY_SERVICE],
    },
    {
        provide: exports.WORKSPACE_COUNT,
        useFactory: (service) => {
            return async () => {
                let limit = 100;
                let page = 1;
                let total = 0;
                const query = /* GraphQL */ `
                    query GetWorkspaces($page: Int) {
                        workspaces(page: $page, limit: 100)
                    }
                `;
                while (true) {
                    const result = await service.sdk.api(query, { variables: { page } });
                    const current = result.data.workspaces;
                    total += current.length;
                    if (current.length === 0 || total % limit > 0)
                        break;
                    page++;
                }
                return total;
            };
        },
        inject: [monday_service_1.MONDAY_SERVICE],
    }
];
