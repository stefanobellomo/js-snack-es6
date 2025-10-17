/*
Snack2**
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
 */

// creare un array di oggetti (football_teams) 
// descrivi gli oggetti con nome punti fatti e falli subiti
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

console.log(football_teams[0]);


// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
for (let i = 0; i < football_teams.length; i++) {
    football_teams[i].punti_fatti = Math.floor(Math.random() * 100);
    football_teams[i].falli_subiti = Math.floor(Math.random() * 50); 
}
    

// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console





