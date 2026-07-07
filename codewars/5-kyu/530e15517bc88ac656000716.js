// Solution for the 530e15517bc88ac656000716 problem at CodeWars: Rot13 (5 kyu)

function rot13(message){
    return message
        .split('')
        .map(letter => rotate(letter))
        .join('')
}

const isLowerCase = (code) => /[a-z]/.test(code)
const isUpperCase = (code) => /[A-Z]/.test(code)

const rotate = (letter) => {
    if(!isUpperCase(letter) && !isLowerCase(letter)){
        return letter
    }

    const rotatedRawCode = (letter.charCodeAt(0) + 13)
    let code

    if(isUpperCase(letter)){
        code = rotatedRawCode <= 90 ? rotatedRawCode : (rotatedRawCode % 90) + 64
    } else if(isLowerCase(letter)){
        code = rotatedRawCode <= 122 ? rotatedRawCode : (rotatedRawCode % 122) + 96
    }

    return String.fromCharCode(code)
}