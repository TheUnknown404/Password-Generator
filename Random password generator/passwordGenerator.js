let characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!"£$%^&*()_-+={}[]:;@~#?/>.<,|'
const length = 16
let charactersArray = characters.split('');

function generatePassword(length) {
    let randomCharacters = '';
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * charactersArray.length);
        randomCharacters += charactersArray[randomIndex];
    }
    return randomCharacters;
}

let password = generatePassword(length);
console.log(password);