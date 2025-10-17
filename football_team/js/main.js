/*
Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.

Snack2**
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
 */

// creare un array di oggetti (bike_race) 
// descrivi gli oggetti con nome e peso
const bicycle_race = [
    {   
        name: 'mountain bike',
        peso: 15,
    },
    {
        name: 'road bike',
        peso: 10,
    },
    {
        name: 'city bike',
        peso: 12,
    },
    {
        name: 'electric bike',
        peso: 18,
    },  
    {
        name: 'folding bike',
        peso: 11,
    },
    {
        name: 'bmx bike',
        peso: 9,
    },
    {
        name: 'cruiser bike',
        peso: 14,
    }
]

// creare una variabile in cui catturare un peso iniziale
let bike_weight = bicycle_race[0].peso;

// aprire un ciclo for che scorra nell'array di oggetti cercando quello con il peso minore
for (let i = 0; i < bicycle_race.length; i++) {
    const small_bike = bicycle_race[i].peso;
    if (small_bike < bike_weight) {
        bike_weight = small_bike
    }
    // return il risultato
    // mostrare a schermo il risultato
    document.getElementById('result').innerHTML = `La bici con il peso minore è la ${bicycle_race[i].name} che pesa ${bike_weight} kg.`;
}


