"use strict";



let person = {
    name: "Marcin",
    height: 180,
}

console.log(person.name);
console.log(person.height);


person["name"] = "Kasia";
person.height = 170;

person.eyes = "niebieskie";

person.printDetails = function () {
    console.log(this.name + " " + this.height + " " + this.eyes);
}

person.printDetails();

let {
    name,
    height
} = person;
console.log(name);



//let kaja = {
//    name: "Kaja",
//    height: 152,
//    sayName() {console.log(this.name)}
//}
//
//let krystian = {
//    name: "Krystian",
//    height: 180,
//    sayName() {console.log(this.name)}
//}
//
//kaja.sayName();
//krystian.sayName();
//
//console.log(kaja.height);
//
//console.log(kaja);
//

class Person {
    constructor(name, surname) {
        this.imie = name;
        this.nazwisko = surname;
    }
    przedstawTrenera(){
        console.log('Nasz trener ma na imię ' +this.imie + ' a na nazwisko ' + this.nazwisko)
    }
}



let krystian = new Person('Krystian', 'Dziopa');

krystian.height = 180;
krystian.eyes = "niebieskie";

krystian.przedstawTrenera();


let kaja = new Person('Kaja', 'Stefaniak');

kaja.przedstawTrenera();

let tablicaOsob = []
tablicaOsob.push(krystian)
tablicaOsob.push(kaja)
console.log("TCL: tablicaOsob", tablicaOsob)