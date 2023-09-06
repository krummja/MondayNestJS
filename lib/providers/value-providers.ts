import { Provider } from "@nestjs/common";
import { MONDAY_SERVICE, MondayService } from "../monday.service";

export const ITEM_NAME = "GET_ITEM_NAME";

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
];
