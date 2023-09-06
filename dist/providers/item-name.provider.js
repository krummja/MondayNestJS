"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValueProviders = exports.ITEM_NAME = void 0;
const monday_service_1 = require("../monday.service");
exports.ITEM_NAME = "GET_ITEM_NAME";
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
];
