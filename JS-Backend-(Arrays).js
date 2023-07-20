


// SEM ARRAYS
const nota1 = 10;
const nota2 = 6.5;
const nota3 = 8;
const nota4 = 7.5;

const media = (nota1 + nota2 + nota3 + nota4) / 4;
console.log(media)



// COM ARRAYS
// Posição      0   1   2   3 
const notas = [10, 6.5, 8, 7.5]

const media2 = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;
console.log(media2)



//Push para Arrays
//Adiciona
const nota0 = [10, 6, 8]
nota0.push(7)

const media0 = (nota0[0] + nota0[1] + nota0[2] + nota0[3]) / nota0.length;
console.log(media0)



//Pop para Arrays
//Remove
 const nota01 = [10, 6, 8, 5.5, 10]
 nota01.pop()
 console.log(nota01)

 const media01 = (nota01[0] + nota01[1] + nota01[2] + nota01[3]) / nota01.length;
console.log(media01)
