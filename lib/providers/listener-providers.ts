import { Provider } from "@nestjs/common";
import { MONDAY_SERVICE, MondayService } from "../monday.service";

export const GROUP_LISTENER = "GROUP_LISTENER";

export const ListenerProviders: Provider[] = [
    {
        provide: GROUP_LISTENER,
        useFactory: (service: MondayService) => {
            return async (boardId: string) => {
                const options = { variables: { boardId } };
                const result = await service.sdk.api(/* GraphQL */`
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
        inject: [MONDAY_SERVICE],
    }
];
