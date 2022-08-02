// A caesarCipher function that takes a string and returns it with each character “shifted”. Read more about how a Caesar cipher works on this website.

// Don’t forget to test wrapping from z to a.
// Don’t forget to test keeping the same case.
// Don’t forget to test punctuation!
// For this one, you may want to split the final function into a few smaller functions. One concept of Testing is that you don’t need to explicitly test every function you write… Just the public ones. So in this case you only need tests for the final caesarCipher function. If it works as expected you can rest assured that your smaller helper functions are doing what they’re supposed to.

import { caesarCipher } from "../tasks/caesarCipher";

test("Shift characters", () => {
    expect(caesarCipher("hellocaesar")).toBe("ifmmpdbftbs");
})

test("Shift character if there is a z", () => {
    expect(caesarCipher("zipmyzap")).toBe("ajqnzabq");
})

test("Keep the same case", () => {
    expect(caesarCipher("DeanTheGreat")).toBe("EfboUifHsfbu");
})

test("Deal with strings with numbers and symbols", () => {
    expect(caesarCipher("Clean and Beautiful 1text")).toBe("Dmfbo boe Cfbvujgvm 1ufyu");
})



