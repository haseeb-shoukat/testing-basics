const caesarCipher = function (string) {
    let cipher = [];
    let code;

    for (let i = 0; i < string.length; i++) {
        code = string.charCodeAt(i)
        if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
            if (code === 90) code = 65;
            else if (code === 122) code = 97;
            else code += 1;
            cipher.push(String.fromCharCode(code))
        }
        else {
            cipher.push(string[i])
        }
    }

    return cipher.join("");
};

export { caesarCipher };
