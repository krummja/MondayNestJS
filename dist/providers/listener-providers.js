"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListenerProviders = exports.GROUP_LISTENER = void 0;
const monday_service_1 = require("../monday.service");
exports.GROUP_LISTENER = "GROUP_LISTENER";
exports.ListenerProviders = [
    {
        provide: exports.GROUP_LISTENER,
        useFactory: (service) => {
            return async (boardId) => {
                const options = { variables: { boardId } };
                const result = await service.sdk.api(/* GraphQL */ `
                    query PollBoardState($boardId: ID!) {
                        boards(ids: [$boardId]) {
                            groups {
                                id
                            }
                        }
                    }
                `, options);
                return result.data.boards[0];
            };
        },
        inject: [monday_service_1.MONDAY_SERVICE],
    }
];
