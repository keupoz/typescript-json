import { JsonElement } from "./JsonElement";
import { JsonObject } from "./JsonObject";
import { JsonPrimitive } from "./JsonPrimitive";

export class JsonArray extends JsonElement {
    private readonly value: any[];

    constructor(value: any[]) {
        super();

        this.value = value;
    }

    public get(index: number) {
        if (index >= this.value.length) throw new RangeError(`${index} is out of range`);

        const value = this.value[index];

        if (value === undefined) throw new Error(`Index ${index} doesn't exist`);

        return JsonElement.from(value);
    }

    public getAsJsonArray(index: number) {
        const value = this.get(index);

        if (!value.isJsonArray()) throw new Error(`Index ${index} is not array`);

        return value;
    }

    public getAsJsonArrayTuple() {
        const result: JsonArray[] = [];

        for (let i = 0; i < this.value.length; i++) {
            result.push(this.getAsJsonArray(i));
        }

        return result;
    }

    public getAsJsonObject(key: number) {
        const value = this.get(key);

        if (!value.isJsonObject()) throw new Error(`Index ${key} is not object`);

        return value;
    }

    public getAsJsonObjectTuple() {
        const result: JsonObject[] = [];

        for (let i = 0; i < this.value.length; i++) {
            result.push(this.getAsJsonObject(i));
        }

        return result;
    }

    public getAsJsonPrimitive(key: number) {
        const value = this.get(key);

        if (!value.isJsonPrimitive()) throw new Error(`Index ${key} is not primitive`);

        return value;
    }

    public getAsJsonPrimitiveTuple() {
        const result: JsonPrimitive[] = [];

        for (let i = 0; i < this.value.length; i++) {
            result.push(this.getAsJsonPrimitive(i));
        }

        return result;
    }

    public size() {
        return this.value.length;
    }

    public values() {
        return this.value.map((value) => {
            return JsonElement.from(value);
        });
    }
}
