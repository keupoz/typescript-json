import { JsonElement } from "./JsonElement";

export class JsonNull extends JsonElement {
    public static readonly INSTANCE = new JsonNull();

    private constructor() {
        super();
    }
}
