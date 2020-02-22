'use static';

function multiply(parm1, parm2, parm3){

    let result;

    result = parm1 * parm2 * parm3;

    return result;
}

let multiplyResult = multiply(3, 9, 10);
let drugieDzialanie = multiply(2, 9, 10);

console.log("Wynik:multiplyResult" , multiplyResult);
console.log("Wynik:drugieDzialanie" , drugieDzialanie);

function dodawanie(parm1, parm2, parm3){

    let result;

    result = parm1 + parm2 + parm3;

    return result;
}

let dodawanieResult = dodawanie(3, 9, 10);
let drugieDodawanie = dodawanie(2, 9, 10);

console.log("Wynik:dodawanieResult" , dodawanieResult);
console.log("Wynik:drugieDodawanie" , drugieDodawanie);

console.log(multiply(2,3,4));

let arrowFunction = () => {
    return 'Jestem w funkcji';
}

console.log(arrowFunction());