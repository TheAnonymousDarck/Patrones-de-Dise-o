// Dada una palabra de n Longitud retornar la cantidad de vocales que tiene

let word = "Enrique";
const vocales = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

function longitud(word) {
    var contador = 0;
    for (var i = 0; i < word.length; i++) {
        if (
        word[i] == "a" ||
        word[i] == "e" ||
        word[i] == "i" ||
        word[i] == "o" ||
        word[i] == "u" ||
        word[i] == "A" ||
        word[i] == "E" ||
        word[i] == "I" ||
        word[i] == "O" ||
        word[i] == "U"
        ) {
        contador++;
        }
    }
    return contador;
}

function longitud2(word) {
    var contador = 0;
    for (let i = 0; i < word.length; i++) {
        if (vocales.includes(word[i])) {
            contador++;
        }
    }
    return contador;
}

console.log(word);
console.log(longitud(word));
console.log(longitud2(word));
