declare abstract class JsonElement {
    private static readonly cache;
    static from(value: any): JsonElement;
    isJsonArray(): this is JsonArray;
    isJsonNull(): this is JsonNull;
    isJsonObject(): this is JsonObject;
    isJsonPrimitive(): this is JsonPrimitive;
}

declare type JsonPrimitiveValue = boolean | number | string;
declare class JsonPrimitive extends JsonElement {
    private readonly value;
    constructor(value: JsonPrimitiveValue);
    getAsBoolean(): boolean;
    getAsNumber(): number;
    getAsString(): string;
    isBoolean(): boolean;
    isNumber(): boolean;
    isString(): boolean;
}

declare class JsonObject extends JsonElement {
    private readonly value;
    constructor(value: any);
    get(key: string): JsonElement;
    getAsJsonArray(key: string): JsonArray;
    getAsJsonObject(key: string): JsonObject;
    getAsJsonPrimitive(key: string): JsonPrimitive;
    keys(): string[];
    values(): JsonElement[];
}

declare class JsonArray extends JsonElement {
    private readonly value;
    constructor(value: any[]);
    get(index: number): JsonElement;
    getAsJsonArray(index: number): JsonArray;
    getAsJsonArrayTuple(): JsonArray[];
    getAsJsonObject(key: number): JsonObject;
    getAsJsonObjectTuple(): JsonObject[];
    getAsJsonPrimitive(key: number): JsonPrimitive;
    getAsJsonPrimitiveTuple(): JsonPrimitive[];
    size(): number;
    values(): JsonElement[];
}

declare class JsonNull extends JsonElement {
    static readonly INSTANCE: JsonNull;
    private constructor();
}

export { JsonArray, JsonElement, JsonNull, JsonObject, JsonPrimitive, JsonPrimitiveValue };
