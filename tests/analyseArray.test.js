import { analyzeArray } from "../tasks/analyzeArray";

test("Gives correct average", () => {
    expect(analyzeArray([1, 2, 6, 8]).average).toBe(4.25);
})

test("Gives correct max", () => {
    expect(analyzeArray([4, 22, 23, 8]).max).toBe(23);
})

test("Gives correct min", () => {
    expect(analyzeArray([1, 2, 6, 10, 44, 33]).min).toBe(1);
})

test("Gives correct length", () => {
    expect(analyzeArray([1, 2, 6, 8, 2, 1, 2, 2]).length).toBe(8);
})

test("Deals with floats", () => {
    expect(analyzeArray([1.1, 2.2, 6.3, 8.66, 2.2, 1.1, 2.2, 2.3])).toEqual({
        average: 3.2575, 
        min: 1.1, 
        max: 8.66, 
        length: 8
    });
})