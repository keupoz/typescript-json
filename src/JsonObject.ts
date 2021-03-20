import { JsonElement } from "./JsonElement";

export class JsonObject extends JsonElement {
    private readonly value: any;

    constructor(value: any) {
        super();

        this.value = value;
    }

    public get(key: string) {
        const value = this.value[key];

        if (value === undefined) throw new Error(`Property "${key}" doesn't exist`);

        return JsonElement.from(value);
    }

    public getAsJsonArray(key: string) {
        const value = this.get(key);

        if (!value.isJsonArray()) throw new Error(`"${key}" is not array`);

        return value;
    }

    public getAsJsonObject(key: string) {
        const value = this.get(key);

        if (!value.isJsonObject()) throw new Error(`"${key}" is not object`);

        return value;
    }

    public getAsJsonPrimitive(key: string) {
        const value = this.get(key);

        if (!value.isJsonPrimitive()) throw new Error(`"${key}" is not primitive`);

        return value;
    }

    public keys() {
        return Object.keys(this.value);
    }

    public values() {
        return Object.values(this.value).map((value) => {
            return JsonElement.from(value);
        });
    }
}
