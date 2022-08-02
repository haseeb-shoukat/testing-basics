import {capitalize, reverseString, calculate} from "../tasks/string"

test("Capitalizes first letter.", () => {
    expect(capitalize("hello")).toBe("Hello");
})

test("Does not change if already capitalized.", () => {
    expect(capitalize("Hello")).toBe("Hello");
})

test("Capitalizes single letter string", () => {
    expect(capitalize("a")).toBe("A");
})

test("Capitalize works with symbols", () => {
    expect(capitalize("&@ello")).toBe("&@ello");
})

test("Capitalize makes sure other character are lowercase", () => {
    expect(capitalize("meLoN")).toBe("Melon");
})

test("Reverses strings", () => {
    expect(reverseString("meLoN")).toBe("NoLem");
})

test("Reverses strings with symbols", () => {
    expect(reverseString("Gre@t.")).toBe(".t@erG");
})

test("Reverses strings with uneven characters", () => {
    expect(reverseString("nEl")).toBe("lEn");
})

test("Reverses strings that are same backwards and forwards", () => {
    expect(reverseString("racecar")).toBe("racecar");
})

test("Adds two numbers", () => {
    expect(calculate.add(2, 4)).toBe(6);
})

test("Subtracts two numbers", () => {
    expect(calculate.subtract(2, 4)).toBe(-2);
})

test("Multiplies two numbers", () => {
    expect(calculate.multiply(3, 3)).toBe(9);
})

test("Divides two numbers", () => {
    expect(calculate.divide(6, 3)).toBe(2);
})

test("Add and Subtract floats", () => {
    expect(calculate.add(2.3, 6.4)).toBe(8.7);
    expect(calculate.subtract(7.1, 6.4)).toBeCloseTo(0.7);
})

test("Multiply and Divide Floats", () => {
    expect(calculate.multiply(2.3, 6.4)).toBeCloseTo(14.72);
    expect(calculate.divide(14.2, 33.1)).toBeCloseTo(0.429);

})