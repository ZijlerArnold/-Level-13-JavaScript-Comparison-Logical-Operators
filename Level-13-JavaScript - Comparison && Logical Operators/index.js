console.log('');
console.log('     Hallo lieve beeldbuis kinderen')
console.log('     ===============================');
console.log('');

console.log('======= Deel 1: 50% korting=============');
console.log('');
const myAge = 19;

if (myAge < 18 || myAge > 40) {
    console.log('Nee jij mag niet binnen');
} else if (myAge >= 18 && myAge <= 25) {
    console.log('Kom maar binnen, Jij hebt 50% korting');
} else {
    console.log('Kom maar binnen, maar jij hebt geen korting');
}
console.log('');
console.log('======= Deel 2: Ludieke actie! =============');

console.log('');
const nameMale = 'Bram';
const nameFemale = 'Sarah';

if (nameMale === 'Bram' && nameFemale === 'Sarah') {
    console.log('Jij hebt een gratis biertje :-)');
} else {
    console.log('Maar jij mag betalen, klinkende munten.')
}
console.log('');
console.log('======= Deel 3: Jubileum korting  =============');
console.log('');
const totalAmount = '3';

if (totalAmount >= 25 && totalAmount < 50) {
    console.log('gratis (vega)bitterballen.');
} else if (totalAmount >= 50 && totalAmount < 100) {
    console.log('gratis portie nachos.');
} else if (totalAmount >= 100) {
    console.log('gratis flesje champagne.');
} else {
    console.log('jij krijg niks gratis');
}
console.log('');

/*
if (myAge < 18 || myAge > 30 || myAge === 25) {
    console.log('nee');
} else {
    console.log('ja hoor')
}
*/
