import { JsonArray, JsonNull, JsonObject, JsonPrimitive } from ".";

export abstract class JsonElement {
    private static readonly cache = new WeakMap<object, JsonElement>();

    public static from(value: any): JsonElement {
        if (value === null) return JsonNull.INSTANCE;

        switch (typeof value) {
            case "object": {
                const cached = JsonElement.cache.get(value);

                if (cached !== undefined) return cached;
                if (Array.isArray(value)) return new JsonArray(value);

                return new JsonObject(value);
            }

            case "boolean":
            case "number":
            case "string": return new JsonPrimitive(value);

            default: throw new Error("Unsupported type of value");
        }
    }

    public isJsonArray(): this is JsonArray {
        return this instanceof JsonArray;
    }

    public isJsonNull(): this is JsonNull {
        return this instanceof JsonNull;
    }

    public isJsonObject(): this is JsonObject {
        return this instanceof JsonObject;
    }

    public isJsonPrimitive(): this is JsonPrimitive {
        return this instanceof JsonPrimitive;
    }
}
