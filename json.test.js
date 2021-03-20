// tslint:disable: no-unused-expression

const { expect } = require("chai"),
    { JsonArray, JsonElement, JsonNull, JsonObject, JsonPrimitive } = require("./dist");

describe("Test JsonElement", () => {
    describe("Check JsonElement.from return type", () => {
        it("should return JsonArray for []", () => {
            expect(JsonElement.from([])).to.be.instanceOf(JsonArray);
        });

        it("should return JsonNull for null", () => {
            expect(JsonElement.from(null)).to.be.instanceOf(JsonNull);
        });

        it("should return JsonObject for {}", () => {
            expect(JsonElement.from({})).to.be.instanceOf(JsonObject);
        });

        it("should return JsonPrimitive for 0", () => {
            expect(JsonElement.from(0)).to.be.instanceOf(JsonPrimitive);
        });
    });

    describe("Check JsonElement.isJson{elementType} return value", () => {
        it("should return true for JsonArray", () => {
            expect(new JsonArray([]).isJsonArray()).to.be.true;
        });

        it("should return true for JsonNull", () => {
            expect(JsonNull.INSTANCE.isJsonNull()).to.be.true;
        });

        it("should return true for JsonObject", () => {
            expect(new JsonObject({}).isJsonObject()).to.be.true;
        });

        it("should return true for JsonPrimitive", () => {
            expect(new JsonPrimitive(0).isJsonPrimitive()).to.be.true;
        });

        it("should return false for non-JsonArray", () => {
            expect(JsonNull.INSTANCE.isJsonArray()).to.be.false;
        });

        it("should return false for non-JsonNull", () => {
            expect(new JsonObject({}).isJsonNull()).to.be.false;
        });

        it("should return false for non-JsonObject", () => {
            expect(JsonNull.INSTANCE.isJsonObject()).to.be.false;
        });

        it("should return false for non-JsonPrimitive", () => {
            expect(JsonNull.INSTANCE.isJsonPrimitive()).to.be.false;
        });
    });
});

describe("Test JsonArray", () => {
    describe("Check JsonArray.get return type", () => {
        const arr = new JsonArray([[], null, {}, true, 0, ""]);

        it("should be instance of JsonArray for index 0 ([])", () => {
            expect(arr.get(0)).to.be.instanceOf(JsonArray);
        });

        it("should be instance of JsonNull for index 1 (null)", () => {
            expect(arr.get(1)).to.be.instanceOf(JsonNull);
        });

        it("should be instance of JsonObject for index 2 ({})", () => {
            expect(arr.get(2)).to.be.instanceOf(JsonObject);
        });

        it("should be instance of JsonPrimitive for index 3 (true)", () => {
            expect(arr.get(3)).to.be.instanceOf(JsonPrimitive);
        });

        it("should be instance of JsonPrimitive for index 4 (0)", () => {
            expect(arr.get(4)).to.be.instanceOf(JsonPrimitive);
        });

        it("should be instance of JsonPrimitive for index 5 (\"\")", () => {
            expect(arr.get(5)).to.be.instanceOf(JsonPrimitive);
        });
    });

    describe("Check JsonArray.values return value", () => {
        const arr = new JsonArray([1, 2, 3]);

        it("should return an array", () => {
            expect(arr.values()).to.be.an("array");
        });
    });
});

describe("Test JsonObject", () => {
    describe("Check JsonObject.get return type", () => {
        const obj = new JsonObject({
            array: [],
            null: null,
            object: {},
            primitiveBoolean: true,
            primitiveNumber: 0,
            primitiveString: ""
        });

        it("should be instance of JsonArray for array", () => {
            expect(obj.get("array")).to.be.instanceOf(JsonArray);
        });

        it("should be instance of JsonNull for null", () => {
            expect(obj.get("null")).to.be.instanceOf(JsonNull);
        });

        it("should be instance of JsonObject for object", () => {
            expect(obj.get("object")).to.be.instanceOf(JsonObject);
        });

        it("should be instance of JsonPrimitive for primitiveBoolean", () => {
            expect(obj.get("primitiveBoolean")).to.be.instanceOf(JsonPrimitive);
        });

        it("should be instance of JsonPrimitive for primitiveNumber", () => {
            expect(obj.get("primitiveNumber")).to.be.instanceOf(JsonPrimitive);
        });

        it("should be instance of JsonPrimitive for primitiveString", () => {
            expect(obj.get("primitiveString")).to.be.instanceOf(JsonPrimitive);
        });
    });

    describe("Check JsonObject.keys and JsonObject.values return value", () => {
        const arr = new JsonObject({ a: 1, b: 2, c: 3 });

        it("should return an array of keys", () => {
            expect(arr.keys()).to.be.an("array");
        });

        it("should return an array of values", () => {
            expect(arr.values()).to.be.an("array");
        });
    });
});

describe("Test JsonPrimitive", () => {
    describe("Check JsonPrimitive.is{type} return value", () => {
        it("should return true for new JsonPrimitive(true).isBoolean()", () => {
            expect(new JsonPrimitive(true).isBoolean()).to.be.true;
        });

        it("should return true for new JsonPrimitive(0).isNumber()", () => {
            expect(new JsonPrimitive(0).isNumber()).to.be.true;
        });

        it("should return true for new JsonPrimitive(\"\").isString()", () => {
            expect(new JsonPrimitive("").isString()).to.be.true;
        });

        it("should return false for new JsonPrimitive(\"true\").isBoolean()", () => {
            expect(new JsonPrimitive("true").isBoolean()).to.be.false;
        });

        it("should return false for new JsonPrimitive(\"0\").isNumber()", () => {
            expect(new JsonPrimitive("0").isNumber()).to.be.false;
        });

        it("should return false for new JsonPrimitive(0).isString()", () => {
            expect(new JsonPrimitive(0).isString()).to.be.false;
        });
    });
});
