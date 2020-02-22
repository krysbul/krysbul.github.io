'use strict';

let userOneHeight = 190;
let userTwoHeight = 190;


/*

Warunek if

*/
if ( userTwoHeight < userOneHeight ) {
    console.log("Olga jest niższa :)");
}



/*

Warunek if else

*/
if ( userTwoHeight > userOneHeight ) {
    
    console.log("Olga jest wyższa :)");
    
} else {
    
    console.log("Olga jest niższa");
    
}



/*

Warunek if else if

*/
if ( userTwoHeight > userOneHeight ) {

    console.log("Olga jest wyższa :)");

} else if ( userTwoHeight == userOneHeight ) {

    console.log("Olga tak wysoka jak Mateusz");

} else {

    console.log("Olga jest niższa");

}




/*

Warunek switch

*/
let color = 'zielony';

switch (color) {
    case 'czerwony':
        console.log('Kolor czerwony')
        break;
    case 'zielony':
        console.log('Kolor zielony')
        break;
    case 'niebieski':
        console.log('Kolor niebieski')
        break;
    default:
        console.log('Inny color')        
}
    