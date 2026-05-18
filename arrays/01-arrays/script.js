const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]

// let fourthTeacher = 0;
// for (let i = 0; i < teachers.length; i++) {
  // if ( i === 0 ) {
    // fourthTeacher = teachers.at(-4);
  // }
  //console.log(fourthTeacher)
// }

// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'
  //let Patrick = 0;
  //for (let i = 0; i < teachers.length; i++) {
    //if( i === 0 ){
    //teachers.splice (4, 1, 'Patrick');
    
      //console.log(teachers);
    //}
  //}


// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto
//let lastTeacher = [];
//for (let i = 0; i < teachers.length; i++) {
  //if ( i === 0 ) {
    //let Luca = teachers.splice (6, 1,);
    //lastTeacher.push(Luca[0]);

    //console.log(lastTeacher)

    
  //}
//}

// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto
let firstTeacher = [];
for (let i = 0; i < teachers.length; i++) {
  if ( i === 0 ) {
    let Nathan = teachers.splice (0, 1,);
    firstTeacher.push(Nathan[0]);

    console.log(firstTeacher);
  }
}
// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers

// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers

// 7. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex
const lewisIndex = null;

// 8. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty
const isTeachersEmpty = null;