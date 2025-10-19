/*
Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
 */

// creare un array di oggetti (bike_race) 
// descrivi gli oggetti con nome e peso

// creare un array di oggetti (biciclette) e do loro 2 valori: Name, peso

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
let name_bike = bicycle_race[0].name;

// aprire un ciclo for che scorra nell'array di oggetti cercando quello con il peso minore
for (let i = 0; i < bicycle_race.length; i++) {
    const small_bike = bicycle_race[i];
    if (small_bike.peso < bike_weight) {
        bike_weight = small_bike.peso
        name_bike = small_bike.name
        }
        
        // mostrare a schermo il risultato
        document.getElementById('result_one').innerHTML =
        `La bici con il peso minore è la ${name_bike} che pesa ${bike_weight} kg.`;
        }
        
        
 /*
Snack2**
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

const football_teams = [
    {
        name: 'Juventus',
        punti_fatti: 0,
        falli_subiti: 0
    },
    {
        name: 'Inter',
        punti_fatti: 0,
        falli_subiti: 0
    },
    {
        name: 'Milan',
        punti_fatti: 0,
        falli_subiti: 0
    },
    {
        name: 'Napoli',
        punti_fatti: 0,
        falli_subiti: 0
    },
    {
        name: 'Roma',
        punti_fatti: 0, 
        falli_subiti: 0
    },
    {
        name: 'Lazio',
        punti_fatti: 0,
        falli_subiti: 0
    },
    {
        name: 'Fiorentina',
        punti_fatti: 0,
        falli_subiti: 0
    }
]

const name_and_points = []

let resultInner = ''

for (let i = 0; i < football_teams.length; i++) {
    football_teams[i].punti_fatti = Math.floor(Math.random() * 80);
    football_teams[i].falli_subiti = Math.floor(Math.random() * 50);

    let total = {
        falli : football_teams[i].falli_subiti,
        nome : football_teams[i].name
    }

    name_and_points.push(total)

    resultInner += `<p>${total.nome} — Falli subiti: ${total.falli}</p>`;
}


document.getElementById('result').innerHTML = resultInner




