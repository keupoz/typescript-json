import { JsonElement } from "./JsonElement";

export type JsonPrimitiveValue = boolean | number | string;

export class JsonPrimitive extends JsonElement {
    private readonly value: JsonPrimitiveValue;

    constructor(value: JsonPrimitiveValue) {
        super();

        this.value = value;
    }

    public getAsBoolean() {
        return Boolean(this.value);
    }

    public getAsNumber() {
        return Number(this.value);
    }

    public getAsString() {
        return String(this.value);
    }

    public isBoolean() {
        return typeof this.value === "boolean";
    }

    public isNumber() {
        return typeof this.value === "number";
    }

    public isString() {
        return typeof this.value === "string";
    }
}
