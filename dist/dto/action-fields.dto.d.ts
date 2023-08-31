import { AdditionalFields, ContextFields, TriggerFields } from "../dto";
export type ActionFields = {
    context: ContextFields;
    trigger: TriggerFields;
    recipe: AdditionalFields;
};
