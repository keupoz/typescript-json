# Typed JSON

A library inspired by Gson Java library.

## Install

```bash
npm i @keupoz/typescript-json
```

## Usage

Usage is pretty simple. To create an instance of Json element use `JsonElement.from(json)`.

```typescript
import { JsonElement } from "@keupoz/typescript-json";

const json = JsonElement.from({ a: 1, b: 2, c: 3 });
```

## Methods

All `getAsJson{type}` methods may return `JsonNull` instance.

### `JsonElement`

-   `JsonElement.from(value: any)`: inits a corresponding JsonElement subclass instance.
-   `JsonElement#isJsonArray()`: is a typeguard which tells that current instance is `JsonArray`.
-   `JsonElement#isJsonNull()`: is a typeguard which tells that current instance is `JsonNull`.
-   `JsonElement#isJsonObject()`: is a typeguard which tells that current instance is `JsonObject`.
-   `JsonElement#isJsonPrimitve()`: is a typeguard which tells that current instance is `JsonPrimitve`.

### `JsonArray`

-   `JsonArray#getAsJsonArray(index: number)`: returns value at specified index as `JsonArray`.
-   `JsonArray#getAsJsonObject(index: number)`: returns value at specified index as `JsonObject`.
-   `JsonArray#getAsJsonPrimitive(index: number)`: returns value at specified index as `JsonPrimitive`.
-   `JsonArray#getAsJsonArrayTuple()`: returns array of `JsonArray` instances.
-   `JsonArray#getAsJsonObjectTuple()`: returns array of `JsonObject` instances.
-   `JsonArray#getAsJsonPrimitiveTuple()`: returns array of `JsonPrimitive` instances.

### `JsonObject`

-   `JsonObject#getAsJsonArray(key: string)`: returns specified property as `JsonArray`.
-   `JsonObject#getAsJsonObject(key: string)`: returns specified property as `JsonObject`.
-   `JsonObject#getAsJsonPrimitive(key: string)`: returns specified property as `JsonPrimitive`.

### `JsonPrimitive`

-   `JsonPrimitive#isBoolean()`: returns boolean value representing if current primitive is boolean.
-   `JsonPrimitive#isNumber()`: returns boolean value representing if current primitive is number.
-   `JsonPrimitive#isString()`: returns boolean value representing if current primitive is string.
-   `JsonPrimitive#getAsBoolean()`: returns current primitive as boolean.
-   `JsonPrimitive#getAsNumber()`: returns current primitive as number.
-   `JsonPrimitive#getAsString()`: returns current primitive as string.
