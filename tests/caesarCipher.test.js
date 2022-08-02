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



